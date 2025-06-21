"use client"

import { useState } from "react"

const TUT_SCHOOL_COORDINATES = "55.894611,37.374147"
const YANDEX_MAPS_DIRECTIONS_URL = `https://yandex.com/maps/embed/10758/himki/?ll=37.374147%2C55.894611&mode=routes&rtext=~${TUT_SCHOOL_COORDINATES}&rtt=auto&ruri=~&z=17`

const YandexMap = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false)

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      {/* Loading state */}
      {!isIframeLoaded && (
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-50">
          <div className="text-gray-500 animate-pulse">Loading directions...</div>
        </div>
      )}

      {/* Map container */}
      <iframe
        src={YANDEX_MAPS_DIRECTIONS_URL}
        className={`w-full h-[500px] ${isIframeLoaded ? 'block' : 'hidden'}`}
        frameBorder="0"
        allowFullScreen
        aria-label="Directions to Tut School"
        onLoad={() => setIsIframeLoaded(true)}
        loading="lazy"
      />

      {/* Floating open button */}
      <a
        href={`https://yandex.com/maps/?rtext=~${TUT_SCHOOL_COORDINATES}&mode=routes`}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Open directions in Yandex Maps"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" fill="#FC3F1D"/>
          <path d="M16 12H12V8H10V12H6V14H10V18H12V14H16V12Z" fill="white"/>
        </svg>
      </a>
    </div>
  )
}

export default YandexMap