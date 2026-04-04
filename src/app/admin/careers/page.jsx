import CareersTable from "./CareersTable";

export default function AdminCareersPage() {
  return (
    <>
      <div>
        <h1 className="text-2xl font-black text-[#172432] mt-1 tracking-tight">
          Careers Applications
        </h1>
      </div>

      <CareersTable />
    </>
  );
}
