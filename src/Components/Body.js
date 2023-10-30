import SCARD from "../Components/SmallCard";
import { useState, useEffect, useContext } from "react";
import left from "../asets/chevronleft.svg";
import right from "../asets/chevronright.svg";

function Body() {
  //===================== API Fetching ======================================
  const AIPKEY = "ce4e4db9fc22415694e75fc5f2a940b0";
  const API = "https://newsapi.org/v2/everything?q=";
  const [page, setPage] = useState(12);
  const [data, setData] = useState([]);
  const fetchApiData = async (query) => {
    try {
      const response = await fetch(
        `${API}${query}&apiKey=${AIPKEY}&language=en&pageSize=${page}`
      );

      setData(await response.json());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchApiData("bitcoin");
  }, [page]);

  //=========================================================
  return (
    <>
      <main className=" flex flex-col items-center gap-6 pb-6">
        <p className=" text-2xl font-bold">LETEST NEWS</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 justify-evenly">
          {data.articles?.map((item, index) => {
            return (
              <SCARD
                title={item.title}
                description={item.description}
                img={item.urlToImage || "https://picsum.photos/200/300"}
                url={item.url}
              />
            );
          })}
        </div>
        <div className=" flex">
          <div className=" bg-yellow-400 w-24 items-center rounded-md flex gap-1">
            <img src={left} alt="#" className=" h-4 text-center" />
            <button
              onClick={() => {
                setPage(page - 12);
              }}
            >
              Previous
            </button>
          </div>
          <div className=" px-6">
            <p>{page / 12}</p>
          </div>

          <div className=" bg-yellow-400 w-20 text-center px-2 rounded-md flex">
            <button
              onClick={() => {
                setPage(page + 12);
              }}
            >
              Next
            </button>
            <img src={right} alt="#" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Body;
