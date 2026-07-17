import SectionTitle from "../Common/SectionTitle";
import process from "../../data/process";
import ProcessCard from "./ProcessCard";

function Process() {
  return (
    <section className="relative py-32 bg-[#050505] overflow-hidden">

      {/* Grid */}

      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Glow */}

      <div className="absolute left-0 top-0 w-[600px] h-[600px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-8">

        <SectionTitle
          subtitle="Our Process"
          title={
            <>
              How We Build
              <br />
              Digital Products
            </>
          }
        />

        <div className="mt-24">

          {process.map((item) => (
            <ProcessCard
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;