import PageContainer from "@/components/PageContainer";
import ReportCard from "@/components/ReportCard";
import { placeholderReports } from "@/lib/placeholder-reports";

export default function ProfilePage() {
  const myReports = placeholderReports.slice(0, 2);

  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold text-stone-900">Your profile</h1>
      <p className="mt-2 text-stone-600">
        Real accounts will be added later. This is a placeholder profile.
      </p>

      <section className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-stone-500">Name</p>
        <p className="text-lg font-medium text-stone-900">Jamie Patel</p>
        <p className="mt-4 text-sm text-stone-500">Email</p>
        <p className="text-stone-800">jamie@example.com</p>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-semibold text-stone-900">
          Your reports
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {myReports.map((report) => (
            <ReportCard key={report.id} report={report} />
          ))}
        </div>
      </section>
    </PageContainer>
  );
}
