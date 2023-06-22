import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

function News() {
  let articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title:
        "'This has to be our rock bottom' - despair at England's capitulation",
      description:
        "Former England cricketers and pundits reacts to the tourists' latest Ashes collapse as the England lose in Hobart and Australia complete a 4-0 series win.",
      url: "http://www.bbc.co.uk/sport/cricket/60015667",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/0797/production/_122734910_gettyimages-1237760611.jpg",
      publishedAt: "2022-01-16T16:52:25.0877036Z",
      content:
        '"That has to be our rock bottom."\r\nThose were the words of former England captain Sir Alastair Cook after the tourists\' Ashes misery finally came to an end in a familiar fashion. \r\nSet 271 to win on … [+3595 chars]',
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
  ];

  const [newss, setnewss] = useState(articles);
  const [pageSize, setpageSize] = useState(9);
  const [api, setapi] = useState(
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=90054779653d4cc791a3adcdc6c7f54e&pageSize=${pageSize}`
  );

  const top = () => {
    console.log("top");
    setapi(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=90054779653d4cc791a3adcdc6c7f54e"
    );
  };
  const cricket = () => {
    setapi(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=90054779653d4cc791a3adcdc6c7f54e&q=cricket"
    );
    console.log("cricket");
  };
  const corona = () => {
    console.log("corona");
    setapi(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=90054779653d4cc791a3adcdc6c7f54e&q=corona"
    );
  };
  const stock = () => {
    console.log("stock");
    setapi(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=90054779653d4cc791a3adcdc6c7f54e&q=tech"
    );
  };
  const art = () => {
    console.log("art");
    setapi(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=90054779653d4cc791a3adcdc6c7f54e&q="
    );
  };
  const bus = () => {
    console.log("bus");
    setapi(
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=90054779653d4cc791a3adcdc6c7f54e&q=stock"
    );
  };

  const load_more = () => {
    console.log("pratik");
    setapi(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=90054779653d4cc791a3adcdc6c7f54e&pageSize=${
        pageSize + 9
      }`
    );
    setpageSize(pageSize + 9);
  };

  useEffect(() => {
    fetch(api)
      .then((respons) => respons.json())
      .then((result) => {
        setnewss(result.articles);
        // console.log(resuslt)
      });
  }, [newss]);

  return (
    <>
      <div className="newbar">
        <button className="newsbar_btn" onClick={top}>
          Top Headline
        </button>
        <button className="newsbar_btn" onClick={cricket}>
          Cricket
        </button>
        <button className="newsbar_btn" onClick={corona}>
          Corona
        </button>
        <button className="newsbar_btn" onClick={stock}>
          Tech
        </button>
        <button className="newsbar_btn" onClick={bus}>
          Stock
        </button>
        <button className="newsbar_btn" onClick={art}>
          Arts
        </button>
      </div>
      <div className="pack">
        {newss.map((element) => {
          return (
            <div className="news" key={element.url}>
              <img
                className="kuch"
                src={element.urlToImage}
                alt="somethings "
              />
              <h3>{element.title}</h3>
              <p>{element.content}</p>
              <div className="btn">
                <a href={element.url} target="blank">
                  Read More
                </a>
              </div>
            </div>
          );
        })}
      </div>
      <div className="next">
        <button
          disabled={pageSize >= 38}
          className="next_button"
          onClick={load_more}
        >
          Load More
        </button>
      </div>
      ;
    </>
  );
}

export default News;
