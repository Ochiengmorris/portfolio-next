import HeaderLinks from "@/components/HeaderLinks";
import HomeImageHolder from "@/components/HomeImageHolder";
import MainComponent from "@/components/MainComponent";

export default function Home() {
  return (
    <div className="flex justify-center max-w-8xl mx-auto h-screen overflow-y-hidden ">
      <HomeImageHolder />
      <MainComponent />
      <div className="hidden xl:inline-block mt-[84px]">
        <HeaderLinks mediaClasses="flex flex-col bg-muted" />
      </div>
    </div>
  );
}
