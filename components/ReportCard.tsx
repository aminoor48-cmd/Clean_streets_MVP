import Link from "next/link";
import type { Report } from "@/lib/placeholder-reports";
import StatusBadge from "@/components/StatusBadge";

type ReportCardProps = {
  report: Report;
};

export default function ReportCard({ report }: ReportCardProps) {
  return (
    <Link
      href={`/report/${report.id}`}
      className="block rounded-xl border border-stone-200 bg-white p-5 shadow-sm transition hover:border-teal-700/40 hover:shadow-md"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-stone-900">{report.title}</h3>
        <StatusBadge status={report.status} />
      </div>
      <p className="mb-3 line-clamp-2 text-sm text-stone-600">
        {report.description}
      </p>
      <p className="text-sm text-stone-500">{report.location}</p>
      <p className="mt-1 text-xs text-stone-400">Reported {report.reportedAt}</p>
    </Link>
  );
}
