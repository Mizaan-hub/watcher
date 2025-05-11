import Header from "@/components/Header";
import VideoCard from "@/components/VideoCard";
import { onlyAna } from "@/constants";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header subHeader="ana@crush.hot" title="Ana De Armas" userImg="/hall/ana/ana-7.png" />
      <h1>{id}</h1>
      <section className="video-grid">
      {onlyAna.map((card) => (
        <VideoCard key={card.id} {... card} />
      ))}
      </section>
    </div>
  );
};

export default page;
