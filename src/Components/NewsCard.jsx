import { useState,useEffect } from "react";

function NewsCard() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() =>
    {
        const fetchData=async()=>{
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=5aec5428482d4c2fa51863b44d162a6b`)
                const data = await response.json()
                setNews(data.articles);

            }
            catch (e) {
            console.error(e)
            }
        }

        fetchData();

        },[])
    

  return (
    <>
    {
        news.map((item,index)=>{
            return(
                <div className="card" key={index}>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">{item.description}</p>
                    </div>
                </div>
            )
        })
    }
    </>
  )
}

export default NewsCard