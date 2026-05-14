import { useState, useEffect } from "react";
import Newsitem from "./newsItem";

export default function technology(props) {
  let [articles, setArticles] = useState([]);
  let [pageNo, setPageNo] = useState(1);
  let [loading, setLoading] = useState(false);
  const api = import.meta.env.VITE_MEDIASTACK_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      let url = `https://api.currentsapi.services/v1/latest-news?category=science&language=en&page_size=12&page_number=${pageNo}&apiKey=${api}`;
      let response = await fetch(url);
      let output = await response.json();
      if (output.news) {
        setArticles(output.news);
      } else if (output.error?.code === "429") {
        console.error("Rate limit exceeded. Try again later.");
        setArticles([]);
      }
      setLoading(false);
    };
    fetchData();
  }, [pageNo, api]);

  const nextPage = async () => {
    if (loading) return; // Prevent multiple requests while loading

    let next = pageNo + 1;
    setPageNo(next);
    console.log(pageNo);
  };

  const prevPage = async () => {
    if (loading) return; // Prevent multiple requests while loading
    if (pageNo > 1) {
      let prev = pageNo - 1;
      setPageNo(prev);
    }
  };

  return (
    <>
      <p className="text-white my-3 border-b-2 w-fit m-auto font-bold text-2xl">
        Latest Science News
      </p>

      {loading && (
        <div className="text-white text-center py-10">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white mb-2"></div>
          <p>Loading news...</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {articles.map((element) => {
          return (
            <Newsitem
              key={element.url}
              link={element.url}
              time={element.published}
              title={element.title}
              description={element.description}
              imageUrl={element.image}
            />
          );
        })}
      </div>

      {!loading && articles.length > 0 && (
        <div className="flex justify-between">
          <button
            id="prev"
            onClick={prevPage}
            disabled={pageNo <= 1}
            className="text-white bg-blue-500 box-border hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed font-medium rounded text-sm px-2 py-2"
          >
            &larr; Previous
          </button>
          <button
            id="next"
            onClick={nextPage}
            className="text-white bg-blue-500 box-border hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed font-medium rounded text-sm px-2 py-2"
          >
            Next &rarr;
          </button>
        </div>
      )}
    </>
  );
}
