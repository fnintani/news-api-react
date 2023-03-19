import Navbar from "./Navbar.js"
import Loading from "./Loading.js"
import Error from "./Error.js"
import "./style.css";
import {useState, useEffect} from "react";
import axios from "axios";

export default function Main() {

let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=15a2a125b22b4c6a930c8066a67f6c4f`
const [newsData, setNewsData] = useState([]);
const [url_set, setUrl] = useState(url);
const [search, setSearch] = useState(" ");
const [isLoading, setLoading] = useState(true);

useEffect(() => {
    setLoading(true);
    axios
      .get(url_set)
      .then((response) => {
        // console.log(response.data)
        setNewsData(response.data.articles);
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url_set]);

    function getData() {
        setUrl(url)
    }

   function searchMovie(evt){
        evt.preventDefault()
        url="https://newsapi.org/v2/everything?q="+search+"&language=id&pageSize=24&apiKey=15a2a125b22b4c6a930c8066a67f6c4f"
        setUrl(url);
        // console.log(url);
        setSearch(" ")
    }

    return (
        <>
            <Navbar handleClick={getData} />
            <div className="form-container">
                <form className="form-control" onSubmit={searchMovie}>
                    <input 
                    type="text" 
                    placeholder="Search News" 
                    className="input-text"
                    onChange={(e)=>{setSearch(e.target.value)}}  
                    value={search}
                    >
                    </input>
                    <button className="submit-btn">search</button>
                </form>
            </div>
            {isLoading && <Loading />}
            {!isLoading && (newsData.length===0) && <Error />}
            <div className="container-card">
                {
                    !isLoading && newsData && newsData.map((article, i) => {
                        return(
                            <div className="card" key={i}>
                                <img src={article.urlToImage} className="card-img" alt="News Image Thumbnail"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    {article.description ? <p className="card-text">{`${article.description.substring(0, 100)}...`}</p> : ""}
                                    <a href={article.url} className="card-link">Read More...</a>
                                </div>
                            </div>
                        )
                    })
                
                }
            </div>
        </>
    )
}
