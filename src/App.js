import NAVBAR from "./Components/Navbar";
import FOOTER from "./Components/Footer";
import BODY from "./Components/Body";
import Aboutus from "./Components/Aboutus";
function App() {
  return (
    <>
      {/* <div className=" flex flex-col bg-slate-500  justify-between  ">
        <NAVBAR />
        <main className=" flex justify-center mt-9">
          <BODY />
        </main>
        <FOOTER />
      </div> */}
      <Aboutus />
    </>
  );
}

export default App;
