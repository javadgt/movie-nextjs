"use client"

import Image from "next/image";
import React from "react";

function MovieCard({ data }) {
  console.log(data);
  return (
    <div className='cursor-pointer bg-slate-600 rounded-md overflow-hidden flex flex-col'>
      <Image
        className='w-full h-96 '
        src={data.poster}
        alt={data.title}
        width={300}
        height={300}
      />
      <div className='p-2 py-6 flex justify-center items-center  flex-grow'>
        <span className='text-center w-full inline-block'>{data.title}</span>
        <span className='text-center w-full inline-block'>IMDB : {data.imdb_rating}</span>
      </div>
    </div>
  );
}

export default MovieCard;