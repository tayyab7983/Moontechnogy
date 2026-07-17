  import SectionTitle from "../Common/SectionTitle";
import approach from "../../data/approach";
import ApproachItem from "./ApproachItem";

function Approach() {
  return (
   <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 lg:pb-32 bg-[#050505] overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Glow */}
      <div className="absolute left-0 top-0 w-[700px] h-[700px] rounded-full bg-[#d4af37]/10 blur-[180px]"></div>

      <div className="relative z-10 max-w-[1450px] mx-auto px-8">

        <SectionTitle
          subtitle="Our Approach"
          title={
            <>
              Built To Grow
              <br />
              Modern Businesses
            </>
          }
        />

        <div className="mt-24">

          {approach.map((item) => (
            <ApproachItem
              key={item.id}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Approach;