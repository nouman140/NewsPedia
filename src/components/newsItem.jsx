import React, { useState, useEffect } from "react";
import img from "../assets/hero.png";

export default function news(props) {
  let [link, setLink] = useState(props.imageUrl);

  return (
    <>
      <div className=" grid border bg-slate-900 text-white my-2 mx-2">
        <img
          className="w-full"
          onError={() => {
            setLink(null);
          }}
          src={
            link
              ? link
              : "https://live.staticflickr.com/2865/33955594005_52a8ae2063_w.jpg"
          }
          alt="Sorry image is missing "
        />
        <h5 className="mt-3 mb-6  font-semibold tracking-tight  text-heading">
          {props.time}
        </h5>
        <div className="p-6 text-center">
          <h5 className="mt-3 mb-6 text-2xl font-semibold tracking-tight text-heading">
            {props.title}
          </h5>
          <p className="mt-3 mb-6  tracking-tight text-heading">
            {props.description}
          </p>

          <a
            href={props.link}
            target="_blank"
            className=" text-white bg-blue-500 box-border  hover:bg-blue-600 focus:ring-4 font-medium rounded text-sm px-2 py-2 "
          >
            Read more...
          </a>
        </div>
      </div>
    </>
  );
}
