"use client"

import { useEffect, useRef } from "react"

const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Yandex Maps API script
    const loadYandexMapsScript = () => {
      const script = document.createElement("script")
      script.src = "https://api-maps.yandex.ru/2.1/?apikey=d082042e-7a81-435d-b874-a229b4c04466&lang=en_US"
      script.async = true
      script.onload = initMap
      document.body.appendChild(script)
    }

    // Initialize map after script loads
    const initMap = () => {
      if (typeof window.ymaps !== "undefined" && mapRef.current) {
        window.ymaps.ready(() => {
          // Create map with the specified coordinates and zoom level
          const map = new window.ymaps.Map(mapRef.current, {
            center: [55.89461099999354, 37.37414699999998], // [latitude, longitude]
            zoom: 15,
            controls: ["zoomControl", "fullscreenControl", "geolocationControl"],
          })

          // Add a placemark at the specified location
          const placemark = new window.ymaps.Placemark(
            [55.89461099999354, 37.37414699999998],
            {
              hintContent: "Tut School",
              balloonContent: "Tut School - Foreign Language Courses",
            },
            {
              preset: "islands#redDotIcon",
            },
          )

          map.geoObjects.add(placemark)
        })
      }
    }

    // Check if Yandex Maps API is already loaded
    if (typeof window.ymaps === "undefined") {
      loadYandexMapsScript()
    } else {
      initMap()
    }

    // Cleanup function
    return () => {
      const script = document.querySelector('script[src*="api-maps.yandex.ru"]')
      if (script) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="relative w-full">
      <div ref={mapRef} className="w-full h-[400px] rounded-lg overflow-hidden shadow-md"></div>
      <a
        href="https://yandex.ru/maps/?z=15&ll=37.37414699999998,55.89461099999354&l=map&rtext=~55.89461099999999760257196613,37.37414700000000067348082666&origin=jsapi_2_1_79&from=api-maps"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 bg-white py-1 px-3 rounded-md text-sm shadow-sm hover:bg-gray-100 transition-colors flex items-center gap-1"
      >
        <svg width="16" height="16" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M128 24C70.562 24 24 70.562 24 128C24 185.438 70.562 232 128 232C185.438 232 232 185.438 232 128C232 70.562 185.438 24 128 24Z"
            fill="#FC3F1D"
          />
          <path d="M176.5 131.5H143.5V164.5H131.5V131.5H98.5V119.5H131.5V86.5H143.5V119.5H176.5V131.5Z" fill="white" />
        </svg>
        Open in Yandex Maps
      </a>
    </div>
  )
}

// Add TypeScript interface for the global window object
declare global {
  interface Window {
    ymaps: any
  }
}

export default YandexMap