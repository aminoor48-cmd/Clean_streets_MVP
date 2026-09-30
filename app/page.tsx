import Link from "next/link";
import PageContainer from "@/components/PageContainer";
import ReportCard from "@/components/ReportCard";
import { placeholderReports } from "@/lib/placeholder-reports";

export default function HomePage() {
  return (
    <PageContainer>
      <section className="rounded-2xl bg-white px-6 py-12 shadow-sm sm:px-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-wide text-teal-700">
          Community reporting
        </p>
        <h1 className="max-w-2xl text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl">
          Report local problems and help keep your streets clean.
        </h1>
        <p className="mt-4 max-w-xl text-base leading-7 text-stone-600">
          Spotted overflowing bins, fly-tipping, or a broken streetlight?
          Share it with your neighbours so issues can be seen and followed up.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/report/new"
            className="inline-flex items-center justify-center rounded-lg bg-teal-700 px-5 py-3 font-medium text-white hover:bg-teal-800"
          >
            Report an issue
          </Link>
          <Link
            href="/map"
            className="inline-flex items-center justify-center rounded-lg border border-stone-300 bg-white px-5 py-3 font-medium text-stone-800 hover:bg-stone-50"
          >
            Explore the map
          </Link>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold text-stone-900">
          Recent reports
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {placeholderReports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
