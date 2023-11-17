import { useParams } from "react-router-dom"
import SCARD from "../Components/SmallCard";
import { useState, useEffect, useContext } from "react";
import left from "../asets/chevronleft.svg";
import right from "../asets/chevronright.svg";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function SearchPage() {
    const { searchTerm } = useParams();
    const AIPKEY = "ce4e4db9fc22415694e75fc5f2a940b0";
    const API = "https://newsapi.org/v2/everything?q=";
    const [page, setPage] = useState(12);
    const [data, setData] = useState([]);
    const [loding, setLoding] = useState(true);
    const fetchApiData = async (query) => {
      try {
        const response = await fetch(
          `${API}${query}&apiKey=${AIPKEY}&language=en&pageSize=${page}`
        );
        setData(await response.json());
        setLoding(false);
      } catch (error) {
        console.log(error);
        setLoding(true);
      }
    };
    useEffect(() => {
      fetchApiData(searchTerm);
    }, [page]);
  
    
    return (
      <>
        <Navbar />
        { loding ? <div className=" flex justify-center items-center h-screen">
          <div className=" animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div> :
          
          <main className="my-5 md:my-20 flex flex-col items-center gap-6 pb-6">
          <p className="text-xl md:text-2xl font-bold">Top search news on topic {searchTerm}</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-evenly">
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
            {(page>12)&&<div className="  shadow-xl w-24 items-center rounded-md flex gap-1">
              <img src={left} alt="#" className=" h-4 text-center" />
              <button
                onClick={() => {
                  setPage(page - 12);
                }}
              >
                Previous
              </button>
            </div>}
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
        </main>}
        <Footer />
      </>
    );
}

export default SearchPage