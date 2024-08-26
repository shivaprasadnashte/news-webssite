import SCARD from "./SmallCard";
import { useState, useEffect } from "react";
import left from "../asets/chevronleft.svg";
import right from "../asets/chevronright.svg";

function Body() {
  const AIPKEY = "ce4e4db9fc22415694e75fc5f2a940b0";
  const API = "https://newsapi.org/v2/everything?q=all";
  const [page, setPage] = useState(12);
  const [data, setData] = useState([]);
  const [loding, setLoding] = useState(true);
  const fetchApiData = async (query) => {
    try {
      const response = await fetch(
        `${API}&apiKey=${AIPKEY}&language=en&pageSize=${page}`
      );
      setData(await response.json());
      setLoding(false);
    } catch (error) {
      console.log(error);
      setLoding(true);
    }
  };
  useEffect(() => {
    fetchApiData("bitcoin");
    //eslint-disable-next-line
  }, [page]);

  return (
    <>
      {loding ? (
        <div className=" flex justify-center items-center h-screen">
          <div className=" animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <main className=" flex flex-col items-center gap-6 pb-6">
          <p className=" text-2xl font-bold">LATEST NEWS</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly">
            {data.articles?.map((item, index) => {
              return (
                <SCARD
                  key={index}
                  title={item.title}
                  description={item.description}
                  img={item.urlToImage || "https://utfs.io/f/77a29cc1-07b2-46e0-b137-cbdc43aeb3ec-h89hs9.jpeg"}
                  url={item.url}
                />
              );
            })}
          </div>
          <div className=" flex">
            {page > 12 && (
              <div className="  shadow-xl w-24 items-center rounded-md flex gap-1">
                <img src={left} alt="#" className=" h-4 text-center" />
                <button
                  onClick={() => {
                    setPage(page - 12);
                  }}
                >
                  Previous
                </button>
              </div>
            )}
            <div className=" px-6">
              <p>{page / 12}</p>
            </div>

            <div className=" shadow-xl w-20 text-center px-2 rounded-md flex">
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
      )}
    </>
  );
}

export default Body;
