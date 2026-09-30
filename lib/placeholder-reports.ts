export type ReportStatus = "Open" | "In progress" | "Resolved";

export type Report = {
  id: string;
  title: string;
  description: string;
  location: string;
  status: ReportStatus;
  reportedAt: string;
};

export const placeholderReports: Report[] = [
  {
    id: "1",
    title: "Overflowing bin on High Street",
    description:
      "The public bin near the bus stop has been overflowing for several days. Litter is spreading onto the pavement.",
    location: "High Street, near the bus stop",
    status: "Open",
    reportedAt: "28 Sep 2026",
  },
  {
    id: "2",
    title: "Broken streetlight on Park Lane",
    description:
      "The streetlight outside number 14 is out. The pavement is very dark in the evening.",
    location: "Park Lane",
    status: "In progress",
    reportedAt: "26 Sep 2026",
  },
  {
    id: "3",
    title: "Fly-tipping behind the community centre",
    description:
      "Bags of household waste have been dumped in the alley behind the community centre.",
    location: "Alley behind Maple Community Centre",
    status: "Open",
    reportedAt: "24 Sep 2026",
  },
];

export function getReportById(id: string): Report | undefined {
  return placeholderReports.find((report) => report.id === id);
}
