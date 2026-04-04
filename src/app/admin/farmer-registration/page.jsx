import { cookies } from "next/headers";
import { FileText } from "lucide-react";
import { backendApiUrl } from "@/lib/api";

function formatDateTime(value) {
  if (!value) {
    return "-";
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return parsed.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

export default async function AdminFarmerRegistrationPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  let registrations = [];
  let total = 0;
  let fetchError = "";

  try {
    const response = await fetch(
      backendApiUrl("/api/forms/admin/farmer-registration"),
      {
        headers: { cookie: cookieHeader },
        cache: "no-store",
      },
    );

    const data = await response.json();

    if (!response.ok) {
      fetchError = data?.error || "Unable to load farmer registration data.";
    } else {
      registrations = Array.isArray(data?.registrations)
        ? data.registrations
        : [];
      total =
        typeof data?.total === "number" ? data.total : registrations.length;
    }
  } catch {
    fetchError = "Unable to load farmer registration data.";
  }

  return (
    <>
      <header className="">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-black text-[#172432] mt-1 tracking-tight">
            Farmer Registrations
          </h1>

          <div className="inline-flex items-center gap-2 rounded-xl bg-white/80 border border-white px-4 py-2.5 shadow-sm">
            <FileText className="h-4 w-4 text-[#1f7d46]" />
            <span className="text-sm font-bold text-slate-700">
              Total Form Submissions: {total}
            </span>
          </div>
        </div>
      </header>

      <section className="rounded-[2rem] border border-white/60 bg-white/70 shadow-sm backdrop-blur-xl overflow-hidden flex flex-col">
        <div className="flex items-center gap-2 border-b border-primary/10 px-6 py-5">
          <FileText className="h-4 w-4 text-[#1f7d46]" />
          <h2 className="text-lg font-bold text-[#172432]">Complete Data</h2>
        </div>

        {fetchError ? (
          <p className="px-6 py-8 text-sm font-bold text-red-600">
            {fetchError}
          </p>
        ) : registrations.length === 0 ? (
          <p className="px-6 py-8 text-sm font-medium text-slate-500">
            No farmer registrations found yet.
          </p>
        ) : (
          <div className="p-0 flex-1 overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-transparent border-b border-primary/10">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    ID
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Farmer Name
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Mobile
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Village
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    District
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Submitted At
                  </th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#1f7d46]/70">
                    Data Payload
                  </th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b border-primary/5 hover:bg-white/50 transition align-top"
                  >
                    <td className="px-6 py-4 font-bold text-[#172432] whitespace-nowrap">
                      #{item.id}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">
                      {item.farmerName || "-"}
                    </td>
                    <td className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">
                      {item.primaryMobile || "-"}
                    </td>
                    <td className="px-6 py-4 text-slate-600 whitespace-nowrap">
                      {item.village || "-"}
                    </td>
                    <td className="px-6 py-4 text-slate-600 whitespace-nowrap">
                      {item.district || "-"}
                    </td>
                    <td className="px-6 py-4 text-slate-500 whitespace-nowrap">
                      {formatDateTime(item.createdAt)}
                    </td>
                    <td className="px-6 py-4 min-w-[360px]">
                      <details className="group">
                        <summary className="cursor-pointer text-sm font-bold text-[#1f7d46] hover:text-[#1a6539] transition list-none w-max">
                          <span className="flex items-center gap-1.5">
                            View JSON
                            <span className="transition group-open:rotate-180">
                              ↓
                            </span>
                          </span>
                        </summary>
                        <pre className="mt-3 overflow-x-auto rounded-xl bg-white/50 border border-white/60 p-4 text-xs leading-5 text-slate-700 shadow-inner">
                          {JSON.stringify(item.registrationData || {}, null, 2)}
                        </pre>
                      </details>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </>
  );
}
