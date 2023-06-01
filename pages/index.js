import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapping from "@/components/Wrapping";

export default function Home() {
  return (
    <main>
      <HeroBanner />
      <Wrapping>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
          Walk in Cloud-like Comfort with our Cushioning Shoe Range
          </div>
          <div className="text-md md:text-xl">Experience cloud-like comfort with our cushioning shoe range. Designed for ultimate support and softness, these shoes provide unmatched comfort with every step. Elevate your walking experience with our collection and enjoy the perfect blend of style and cushioned bliss.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>
<ProductCard/>

        </div>
      </Wrapping>
    </main>
  );
}
