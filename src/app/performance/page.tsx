import PerformanceImg from "public/images/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgData={PerformanceImg}
      imgAlt="Performance Img"
      title="Performance Hosting"
    />
  );
}
