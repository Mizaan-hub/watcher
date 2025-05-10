import Header from "@/components/Header";

const page = async ({ params }: ParamsWithSearch) => {
  const { id } = await params;
  return (
    <div className="wrapper page">
      <Header subHeader="ana@crush.hot" title="Ana De Armas" userImg="/hall/ana/ana-7.png" />
      <h1 className="text-2xl font-karla">User Id: {id}</h1>
    </div>
  );
};

export default page;
