import Link from "next/link";
import PageContainer from "@/components/PageContainer";

const pins = [
  { id: "1", label: "Overflowing bin", top: "32%", left: "28%" },
  { id: "2", label: "Broken streetlight", top: "48%", left: "62%" },
  { id: "3", label: "Fly-tipping", top: "64%", left: "44%" },
];

export default function MapPage() {
  return (
    <PageContainer>
      <h1 className="text-2xl font-semibold text-stone-900">Map</h1>
      <p className="mt-2 max-w-2xl text-stone-600">
        Reports will appear on a real map here later. For now, this is a
        placeholder of the local area.
      </p>

      <div className="relative mt-6 h-[420px] overflow-hidden rounded-2xl border border-stone-200 bg-[#dce8dc] shadow-sm sm:h-[520px]">
        <div className="absolute inset-0 bg-[linear-gradient(#c5d4c5_1px,transparent_1px),linear-gradient(90deg,#c5d4c5_1px,transparent_1px)] bg-[size:48px_48px]" />
        <div className="absolute left-[8%] right-[8%] top-[38%] h-3 rounded-full bg-stone-300/80" />
        <div className="absolute bottom-[12%] top-[12%] left-[46%] w-3 rounded-full bg-stone-300/80" />
        <div className="absolute left-[18%] top-[18%] h-20 w-28 rounded-md bg-emerald-200/70" />
        <div className="absolute right-[14%] bottom-[20%] h-16 w-24 rounded-md bg-emerald-200/70" />
        <p className="absolute left-4 top-4 rounded-md bg-white/90 px-3 py-1 text-sm font-medium text-stone-700">
          Neighbourhood preview
        </p>

        {pins.map((pin) => (
          <Link
            key={pin.id}
            href={`/report/${pin.id}`}
            className="absolute flex -translate-x-1/2 -translate-y-full flex-col items-center"
            style={{ top: pin.top, left: pin.left }}
          >
            <span className="rounded-md bg-white px-2 py-1 text-xs font-medium text-stone-800 shadow-sm">
              {pin.label}
            </span>
            <span className="mt-1 h-3 w-3 rounded-full border-2 border-white bg-teal-700 shadow" />
          </Link>
        ))}
      </div>
    </PageContainer>
  );
}
