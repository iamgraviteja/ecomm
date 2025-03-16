import Sales from "./sales";

const Home: React.FC = () => {
  return (
    <>
      <div>
        {/* <div className="flex">
          <div className="w-1/4">
            <SideNav />
          </div>
          <div className="w-3/4">
            <Carousel />
          </div>
        </div> */}
        <Sales />
      </div>
    </>
  );
};

export default Home;
