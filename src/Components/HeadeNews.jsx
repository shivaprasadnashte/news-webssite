import { useEffect, useState } from "react"
import Hero from "./Hero";

function HeadeNews() {
    const AIPKEY = "ce4e4db9fc22415694e75fc5f2a940b0";
    const API = "https://newsapi.org/v2/top-headlines?country=in";

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(false)
    const [index, setIndex] = useState(0)


    const fetchApiData = async () => {
        try {
            const response = await fetch(
                `${API}&apiKey=${AIPKEY}&language=en&pageSize=${10}`
            );
            // setNews(await response.json());
            const data = await response.json();
            setNews(data.articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(true);
        }
    };
    useEffect(() => {
        fetchApiData();
        // eslint-disable-next-line
    })

    return (
        <>
            {
                loading ? <h1>Loading...</h1> : <div>
                    {news[0] ? <Hero index={index} setIndex={setIndex} title={news[index % news.length].title} desc={news[index % news.length].description} image={news[index % news.length].urlToImage} urlToReadMore={news[index % news.length].url} /> : null}
                </div>
            }
        </>
    )
}

export default HeadeNews