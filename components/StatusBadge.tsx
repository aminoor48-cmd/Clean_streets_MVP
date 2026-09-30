import type { ReportStatus } from "@/lib/placeholder-reports";

type StatusBadgeProps = {
  status: ReportStatus;
};

const statusStyles: Record<ReportStatus, string> = {
  Open: "bg-amber-100 text-amber-800",
  "In progress": "bg-sky-100 text-sky-800",
  Resolved: "bg-emerald-100 text-emerald-800",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
