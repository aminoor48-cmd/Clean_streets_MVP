import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import StatusBadge from "@/components/StatusBadge";
import { getReportById } from "@/lib/placeholder-reports";

type ReportDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ReportDetailPage({ params }: ReportDetailPageProps) {
  const { id } = await params;
  const report = getReportById(id);

  return (
    <PageContainer>
      <Link href="/" className="text-sm text-teal-800 hover:underline">
        ← Back to reports
      </Link>

      {report ? (
        <article className="mt-6 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
          <div className="flex h-48 items-center justify-center bg-stone-100 text-stone-500 sm:h-64">
            Photo placeholder
          </div>
          <div className="p-6">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
              <h1 className="text-2xl font-semibold text-stone-900">
                {report.title}
              </h1>
              <StatusBadge status={report.status} />
            </div>
            <p className="text-sm text-stone-500">{report.location}</p>
            <p className="mt-1 text-xs text-stone-400">
              Reported {report.reportedAt}
            </p>
            <p className="mt-4 leading-7 text-stone-700">{report.description}</p>
          </div>
        </article>
      ) : (
        <article className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-semibold text-stone-900">Report</h1>
          <p className="mt-2 text-stone-600">
            Report details will appear here. This placeholder is for report{" "}
            <span className="font-medium text-stone-800">{id}</span>.
          </p>
          <div className="mt-6 flex h-48 items-center justify-center rounded-xl bg-stone-100 text-stone-500">
            Photo placeholder
          </div>
        </article>
      )}
    </PageContainer>
  );
}
