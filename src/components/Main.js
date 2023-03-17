import "./style.css";
import {useState, useEffect} from "react";

export default function Main() {

let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=15a2a125b22b4c6a930c8066a67f6c4f`
const [newsData, setNewsData] = useState([]);
const [url_set, setUrl] = useState(url);
const [search, setSearch] = useState(" ");

useEffect(() => {
    fetch(url_set)
    .then(res => res.json())
    .then(data => 
        // console.log(data.articles.)
        setNewsData(data.articles)
    )
}, [url_set])
    
    function getData() {
        setUrl(url)
    }

   function searchMovie(evt){
        evt.preventDefault()
        url="https://newsapi.org/v2/everything?q="+search+"&language=id&pageSize=24&apiKey=15a2a125b22b4c6a930c8066a67f6c4f"
        setUrl(url);
        console.log(url);
        setSearch(" ")
    }

       

    console.log(search)

    return (
        <>
            <nav className="navbar">
                <a className="link-home" onClick={getData} href="#">Home</a>
            </nav>
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
                    <button>search</button>
                </form>
            </div>
            <div className="container-card">
                {
                    (newsData.length===0)? <h5>News not found</h5> : newsData.map((article, i) => {
                        return(
                            <div className="card" key={i}>
                                <img src={article.urlToImage} className="card-img" alt="News Image Thumbnail"></img>
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.description}</p>
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
