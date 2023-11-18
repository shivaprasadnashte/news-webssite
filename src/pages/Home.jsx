import NAVBAR from "../Components/Navbar";
import BODY from "../Components/Body";
import FOOTER from "../Components/Footer";
import HeadeNews from "../Components/HeadeNews";
function Home() {
  return (
    <>
      <div className=" flex flex-col  justify-between  ">
        <NAVBAR />
        <HeadeNews/>
        <main className=" flex justify-center mt-9">
          <BODY />
        </main>
        <FOOTER />
      </div>

    </>
  );
}

export default Home;