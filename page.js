import AircraftCard from "@/components/AircraftCard";
import SectionHeading from "@/components/SectionHeading";
import CTABand from "@/components/CTABand";
import { aircraft } from "@/data/aircraft";

export const metadata = {
  title: "Private Jet Types: Light, Midsize, Heavy & Turboprop",
  description: "Compare private jet categories by passengers, range and best use. Get instant charter quotes on light jets, midsize, super midsize, heavy jets, turboprops and empty legs.",
  alternates: { canonical: "/aircraft" },
};

export default function AircraftPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-20">
        <SectionHeading
          eyebrow="The Fleet"
          title="Private jet categories"
          sub="Every category is available through Villiers' network of 10,000+ aircraft. Pick the size that fits your group and route, then get an instant quote."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aircraft.map((a) => <AircraftCard key={a.slug} a={a} />)}
        </div>
        <p className="mt-8 text-center text-xs text-white/40">Passenger and range figures are typical for each category; specific aircraft vary.</p>
      </section>
      <CTABand title="Not sure which jet?" sub="Compare all categories with live prices in one search." />
    </>
  );
}
