import { NextResponse } from "next/server";
import { createHash } from "node:crypto";

function getCloudinaryConfig() {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  const folder =
    process.env.CLOUDINARY_EMPLOYEE_PHOTO_FOLDER || "employee-data-form";

  return { cloudName, apiKey, apiSecret, folder };
}

function buildSignature({ timestamp, folder, apiSecret }) {
  const signatureBase = `folder=${folder}&timestamp=${timestamp}${apiSecret}`;
  return createHash("sha1").update(signatureBase).digest("hex");
}

export async function POST(request) {
  try {
    const { cloudName, apiKey, apiSecret, folder } = getCloudinaryConfig();

    if (!cloudName || !apiKey || !apiSecret) {
      return NextResponse.json(
        {
          ok: false,
          error:
            "Cloudinary is not configured. Add CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET.",
        },
        { status: 500 },
      );
    }

    const body = await request.formData();
    const file = body.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { ok: false, error: "Image file is required." },
        { status: 400 },
      );
    }

    if (!file.type.startsWith("image/")) {
      return NextResponse.json(
        { ok: false, error: "Only image files are allowed." },
        { status: 400 },
      );
    }

    const maxSizeBytes = 5 * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return NextResponse.json(
        { ok: false, error: "Image must be 5MB or smaller." },
        { status: 400 },
      );
    }

    const timestamp = Math.floor(Date.now() / 1000);
    const signature = buildSignature({ timestamp, folder, apiSecret });

    const uploadData = new FormData();
    uploadData.append("file", file);
    uploadData.append("api_key", apiKey);
    uploadData.append("timestamp", String(timestamp));
    uploadData.append("folder", folder);
    uploadData.append("signature", signature);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: uploadData,
        cache: "no-store",
      },
    );

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      return NextResponse.json(
        {
          ok: false,
          error: result?.error?.message || "Cloudinary upload failed.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      photoUrl: result.secure_url || "",
      publicId: result.public_id || "",
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        error: error.message || "Failed to upload image.",
      },
      { status: 500 },
    );
  }
}
