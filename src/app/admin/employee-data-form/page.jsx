import { cookies } from "next/headers";
import { backendApiUrl } from "@/lib/api";
import EmployeeDataTable from "./EmployeeDataTable";

export default async function AdminEmployeeDataPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  let employees = [];

  try {
    const response = await fetch(backendApiUrl("/api/forms/admin/employee-data-form"), {
      headers: {
        cookie: cookieHeader,
      },
      cache: "no-store",
    });

    const data = await response.json();

    if (response.ok) {
      employees = Array.isArray(data?.employees) ? data.employees : [];
    }
  } catch {
    employees = [];
  }

  return <EmployeeDataTable initialEmployees={employees} />;
}
