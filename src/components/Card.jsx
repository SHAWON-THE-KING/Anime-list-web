import React, { useEffect, useState } from "react";

function Countdown({ date }) {
  const [left, setLeft] = useState("");
  useEffect(() => {
    function updateCountdown() {
      const now = new Date();
      const target = new Date(date);
      const diff = Math.max(target - now, 0);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);
      setLeft(`${days}d ${hours}h ${mins}m ${secs}s`);
    }
    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [date]);

  return <span>{left}</span>;
}

export default function AnimeCard({
  title,
  genres,
  image,
  countdownDate,
  rating,
  studio,
  schedule,
  mangaLink,
  manga,
  mangaText,
  episodeInfo,
  description,
  icons = []
}) {
  return (
    <div className="bg-green-100 max-w-[340px] rounded-lg shadow border border-green-200 overflow-hidden font-[Segoe UI] hover:scale-110 duration-200 ">
      {/* Title */}
      <div className="text-center pt-2 text-base font-bold text-sky-700 leading-tight">
        {title}
      </div>
      {/* Genres */}
      <div className="text-center text-[13px] text-gray-700 font-medium mb-2">
        {genres}
      </div>
      <div className="flex flex-row">
        {/* Left Side: Image & Countdown */}
        <div className="relative w-[140px] min-h-[175px]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            style={{ background: '#eee' }}
          />
          <div className="absolute top-1 left-0 bg-gray-900/80 text-white text-xs font-bold px-2 py-1 rounded-tr rounded-br shadow-md w-[130px]">
            {episodeInfo}
            <br />
            <Countdown date={countdownDate} />
          </div>
          <div className="absolute bottom-2 left-2 text-white">
            <span className="bg-black/60 rounded px-2 py-0.5 flex gap-1 items-center">
              <span className="text-yellow-300 font-bold">&#9733;</span>
              <span className="text-white font-semibold">{rating}</span>
            </span>
          </div>
        </div>
        {/* Right Side: Info */}
        <div className="flex-1 px-2 pt-2 pb-4 flex flex-col gap-2 text-center">
          {/* Studio */}
          <a
            href="#"
            className="text-blue-500 font-semibold text-[13px] hover:underline"
          >
            {studio}
          </a>
          {/* Schedule */}
          <div className="text-[13px] text-gray-800">{schedule}</div>
          {/* Manga Link */}
          <div className="text-[13px] text-gray-700">
            <span className="font-semibold">
              <a href={mangaLink} className="hover:underline text-blue-800">{mangaText}</a>
            </span>
            <span className="font-semibold px-5">
              <a href={manga} className="hover:underline text-blue-800">{manga}</a>
            </span>
          </div>
          {/* Description */}
          <div className="text-[13px] italic text-gray-800 mt-1">
            {description || "No synopsis has been added to this title."}
          </div>
        </div>
      </div>
      {/* Footer Icons */}
      <div className="flex gap-2 px-3 pb-2 pt-1 justify-center">
        {icons.map((Icon, i) => (
          <span  key={i} className="text-lg">{Icon}</span>
        ))}
      </div>
    </div>
  );
}
