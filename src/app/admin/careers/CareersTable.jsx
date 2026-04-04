"use client";

import { useState, useEffect } from "react";
import {
  Search,
  FilterX,
  Users,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  MoreVertical,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { backendApiUrl } from "@/lib/api";

function formatDateTime(value) {
  if (!value) return "-";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });
}

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
}

export default function CareersTable() {
  const [applications, setApplications] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const [nameFilter, setNameFilter] = useState("");
  const [stateFilter, setStateFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");

  const debouncedName = useDebounce(nameFilter, 500);
  const debouncedState = useDebounce(stateFilter, 500);
  const debouncedCity = useDebounce(cityFilter, 500);

  const [sortKey, setSortKey] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");

  const [page, setPage] = useState(1);
  const PAGE_SIZE = 30;
  const [totalPages, setTotalPages] = useState(1);

  // Reset page when filters or sorting change
  useEffect(() => {
    setPage(1);
  }, [debouncedName, debouncedState, debouncedCity, sortKey, sortOrder]);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setFetchError("");
      try {
        const queryParams = new URLSearchParams({
          page: page.toString(),
          limit: PAGE_SIZE.toString(),
          search: debouncedName,
          state: debouncedState,
          city: debouncedCity,
          sortKey,
          sortOrder,
        });

        const res = await fetch(backendApiUrl(`/api/forms/admin/careers?${queryParams.toString()}`), {
          credentials: "include"
        });
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to load data");
        }

        setApplications(data.applications || []);
        setTotalCount(data.total || 0);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        setFetchError(err.message || "An error occurred fetching applications data.");
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [page, debouncedName, debouncedState, debouncedCity, sortKey, sortOrder]);

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortKey(key);
      setSortOrder("asc");
    }
  };

  const TableDataSkeleton = () => (
    <>
      {Array.from({ length: PAGE_SIZE }).map((_, i) => (
        <TableRow key={`skeleton-${i}`} className="bg-white">
          <TableCell>
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-slate-200 animate-pulse"></div>
              <div className="h-4 w-32 bg-slate-200 rounded animate-pulse"></div>
            </div>
          </TableCell>
          <TableCell><div className="h-4 w-40 bg-slate-200 rounded animate-pulse"></div></TableCell>
          <TableCell><div className="h-4 w-20 bg-slate-200 rounded animate-pulse"></div></TableCell>
          <TableCell><div className="h-4 w-24 bg-slate-200 rounded animate-pulse"></div></TableCell>
          <TableCell><div className="h-4 w-32 bg-slate-200 rounded animate-pulse"></div></TableCell>
          <TableCell><div className="h-6 w-6 bg-slate-200 rounded animate-pulse"></div></TableCell>
        </TableRow>
      ))}
    </>
  );

  return (
    <section className="flex flex-col gap-6">
      {fetchError && (
        <div className="rounded-[2rem] border border-red-200 bg-red-50 p-6 shadow-sm">
          <h2 className="text-lg font-bold text-red-800">Error fetching data</h2>
          <p className="mt-2 text-sm text-red-600">{fetchError}</p>
        </div>
      )}

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <div className="flex gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-none sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search name..."
              value={nameFilter}
              onChange={(e) => setNameFilter(e.target.value)}
              className="pl-9 bg-white"
            />
          </div>
          <Input
            placeholder="State"
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            className="w-32 sm:w-40 bg-white"
          />
          <Input
            placeholder="City"
            value={cityFilter}
            onChange={(e) => setCityFilter(e.target.value)}
            className="w-32 sm:w-40 bg-white"
          />

          {(nameFilter || stateFilter || cityFilter) && (
            <Button
              variant="outline"
              onClick={() => {
                setNameFilter("");
                setStateFilter("");
                setCityFilter("");
              }}
              className="bg-white"
            >
              <FilterX className="w-4 h-4 mr-1" /> Clear
            </Button>
          )}
        </div>
      </div>

      {/* Table */}
      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-green-100 text-green-700">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Applicants</h2>
              <p className="text-xs text-slate-500">
                {isLoading ? "Loading..." : `${totalCount} total results`}
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-auto max-h-[500px]">
          <Table>
            <TableHeader className="sticky top-0 bg-white z-10 shadow-sm">
              <TableRow>
                {["name", "email", "state", "city", "createdAt"].map((key) => (
                  <TableHead
                    key={key}
                    onClick={() => handleSort(key)}
                    className="cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-1 capitalize font-semibold text-slate-700">
                      {key === "createdAt" ? "Date" : key}
                      <ArrowUpDown className={`w-3 h-3 ${sortKey === key ? 'text-green-600' : 'text-slate-400'}`} />
                    </div>
                  </TableHead>
                ))}
                <TableHead className="font-semibold text-slate-700">Actions</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {isLoading ? (
                <TableDataSkeleton />
              ) : applications.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center text-slate-500">
                    No applicants found matching your criteria.
                  </TableCell>
                </TableRow>
              ) : (
                applications.map((item, index) => (
                  <TableRow
                    key={item.id}
                    className={`hover:bg-slate-50 transition-colors ${index % 2 === 0 ? "bg-white" : "bg-slate-50/40"}`}
                  >
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center shadow-sm">
                          {item.name?.charAt(0)?.toUpperCase()}
                        </div>
                        <span className="font-medium text-slate-800">{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-slate-600">{item.email}</TableCell>
                    <TableCell className="text-slate-600">{item.state}</TableCell>
                    <TableCell className="text-slate-600">{item.city}</TableCell>
                    <TableCell className="text-slate-600">{formatDateTime(item.createdAt)}</TableCell>
                    <TableCell>
                      <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-400 hover:text-slate-700">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-3 border-t bg-slate-50">
          <p className="text-xs font-medium text-slate-500">
            Page {page} of {Math.max(1, totalPages)}
          </p>

          <div className="flex gap-2">
            <Button
              disabled={page === 1 || isLoading}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              size="sm"
              variant="outline"
              className="bg-white shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 mr-1" /> Prev
            </Button>
            <Button
              disabled={page >= totalPages || isLoading}
              onClick={() => setPage(p => p + 1)}
              size="sm"
              variant="outline"
              className="bg-white shadow-sm"
            >
              Next <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
