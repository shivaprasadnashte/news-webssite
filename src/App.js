import NAVBAR from "./Components/Navbar";
import SCARD from "./Components/SmallCard";

import FOOTER from "./Components/Footer";
import PEGINATION from "./Components/Pegination";
import IDIMG from "./asets/idimg.jpg";
import IMAG from "./asets/imgbw4.jpeg";
import IMA from "./asets/logo1.jpg";
import NEWSPAGE from "./Components/Newspage";
// import NewsCard from "./Components/NewsCard";
import BODY from "./Components/Body";
import Api from "./Components/Api";
function App() {
  return (
    <>
      <div className=" flex flex-col bg-slate-500  justify-between  ">
        <NAVBAR />
        <main className=" flex justify-center mt-9">
      
          <BODY/>
        
        </main>
        <FOOTER />
      </div>
      {/* <Api/> */}
    </>
  );
}

export default App;
