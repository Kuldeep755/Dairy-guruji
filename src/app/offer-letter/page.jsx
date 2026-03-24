"use client";

import React, { useEffect, useState } from "react";
import { rolesData } from "./data/roles";
import ControlsSidebar from "./components/ControlsSidebar";
import FounderMessagePage from "./components/FounderMessagePage";
import OfferDetailsPage from "./components/OfferDetailsPage";
import TermsAndConditionsPage from "./components/TermsAndConditionsPage";
import AsmSpecificPage from "./components/AsmSpecificPage";
import SiSpecificPage from "./components/SiSpecificPage";

export default function OfferLetterPage() {
  // Redirect to home page if accessed directly
  if (typeof window !== 'undefined') {
    window.location.href = '/';
    return null;
  }
  const [role, setRole] = useState("ASM");
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    candidateName: "MR. GANESH CHOUDHARY",
    aadharNo: "9120 - 9656 - 8101",
    hq: "NASIRABAD",
  });

  const rd = rolesData[role];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePrint = () => {
    window.print();
  };

  useEffect(() => {
    const pxPerMm = 96 / 25.4;
    const a4HeightPx = 297 * pxPerMm;

    const resetPrintScale = () => {
      const pages = document.querySelectorAll(".offer-letter-pages .pdf-page");
      pages.forEach((page) => {
        page.style.setProperty("--print-scale", "1");
        page.classList.remove("pdf-page-scale");
      });
    };

    const applyPrintScale = () => {
      const pages = document.querySelectorAll(".offer-letter-pages .pdf-page");
      pages.forEach((page) => {
        page.style.setProperty("--print-scale", "1");
        page.classList.remove("pdf-page-scale");

        const contentHeight = page.scrollHeight;
        if (contentHeight <= a4HeightPx) return;

        const scale = Math.max(0.7, Math.min(1, a4HeightPx / contentHeight));
        page.style.setProperty("--print-scale", String(scale));
        page.classList.add("pdf-page-scale");
      });
    };

    window.addEventListener("beforeprint", applyPrintScale);
    window.addEventListener("afterprint", resetPrintScale);

    return () => {
      window.removeEventListener("beforeprint", applyPrintScale);
      window.removeEventListener("afterprint", resetPrintScale);
    };
  }, []);

  return (
    <div className="offer-letter-print-root min-h-screen bg-slate-200 print:bg-white flex flex-col lg:flex-row py-8 lg:py-0 print:py-0 print:block">
      <ControlsSidebar
        role={role}
        formData={formData}
        handleRoleChange={handleRoleChange}
        handleChange={handleChange}
        handlePrint={handlePrint}
      />

      {/* A4 Document Pages Container */}
      <div className="offer-letter-pages flex-1 flex flex-col gap-8 print:gap-0 font-sans text-gray-900 items-center lg:py-10 print:py-0 print:block w-full overflow-x-auto print:overflow-visible bg-slate-200 print:bg-white">
        <FounderMessagePage />
        <OfferDetailsPage formData={formData} rd={rd} role={role} />
        <TermsAndConditionsPage role={role} rd={rd} />

        {role === "ASM" && <AsmSpecificPage />}
        {role === "SI" && <SiSpecificPage />}
      </div>

      <style jsx global>{`
        /* Hide layout elements on this specific page */
        header,
        nav,
        footer,
        .fixed.bottom-6.right-6 {
          display: none !important;
        }
        .offer-letter-print-root,
        .offer-letter-print-root * {
          box-sizing: border-box;
          overflow-wrap: break-word;
          word-break: break-word;
        }

        .offer-letter-pages .pdf-page {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          break-inside: auto;
          page-break-inside: auto;
          break-after: page;
          page-break-after: always;
        }

        .offer-letter-pages .pdf-page:last-child {
          break-after: auto;
          page-break-after: auto;
        }

        .offer-letter-pages table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
          break-inside: avoid-page;
          page-break-inside: avoid;
        }

        .offer-letter-pages thead {
          display: table-header-group;
        }

        .offer-letter-pages tr,
        .offer-letter-pages td,
        .offer-letter-pages th {
          break-inside: avoid;
          page-break-inside: avoid;
        }

        @media print {
          body {
            background-color: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
            margin: 0;
            padding: 0;
          }
          @page {
            size: A4;
            margin: 0;
          }
          .offer-letter-pages {
            display: block !important;
            width: 210mm !important;
            margin: 0 auto !important;
            overflow: visible !important;
            background: white !important;
          }
          .offer-letter-pages .pdf-page {
            width: 210mm !important;
            min-height: 297mm !important;
            height: 297mm !important;
            display: block !important;
            overflow: hidden !important;
            box-shadow: none !important;
            margin: 0 !important;
          }
          .offer-letter-pages .pdf-page.pdf-page-scale {
            transform: scale(var(--print-scale, 1)) !important;
            transform-origin: top left !important;
            width: calc(210mm / var(--print-scale, 1)) !important;
          }
          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          /* Ensure backgrounds and borders print correctly */
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </div>
  );
}
