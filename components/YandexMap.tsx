"use client"

import { useEffect, useRef, useState } from "react"

// Enhanced TypeScript definitions
type YMaps = {
  ready: (callback: () => void) => void
  Map: new (element: HTMLElement | null, options?: MapOptions) => IMap
  Placemark: new (coordinates: [number, number], properties?: PlacemarkProperties, options?: PlacemarkOptions) => IPlacemark
  templateLayoutFactory?: {
    createClass: (template: string) => any
  }
}

interface IMap {
  geoObjects: IGeoObjectCollection
  controls: IControlCollection
  setBounds: (bounds: number[][], options?: { checkZoomRange?: boolean }) => void
  destroy?: () => void
}

interface IGeoObjectCollection {
  add: (object: IPlacemark) => void
  getBounds: () => number[][] | null
}

interface IControlCollection {
  add: (control: string | object, options?: any) => void
}

interface IPlacemark {
  events: IEventManager
  balloon: {
    open: () => void
    close: () => void
  }
}

interface IEventManager {
  add: (types: string | string[], callback: Function, context?: any, priority?: number) => void
}

type MapOptions = {
  center?: [number, number]
  zoom?: number
  controls?: string[]
}

type PlacemarkProperties = {
  hintContent?: string
  balloonContent?: string
  balloonContentHeader?: string
  balloonContentBody?: string
  balloonContentFooter?: string
}

type PlacemarkOptions = {
  preset?: string
  iconLayout?: string
  iconImageHref?: string
  iconImageSize?: [number, number]
  iconImageOffset?: [number, number]
  balloonLayout?: any
}

declare global {
  interface Window {
    ymaps?: YMaps
  }
}

const TUT_SCHOOL_COORDINATES: [number, number] = [55.894611, 37.374147]
const DEFAULT_ZOOM = 17
const YANDEX_MAPS_LINK = "https://yandex.com/maps?source=wizbiz_new_map_single&ruri=~ymapsbm1%3A%2F%2Forg%3Foid%3D106949618068&type=auto&profile-mode=1&no-distribution=1&rtext=~55.894611%2C37.374147"

const YandexMap = () => {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const mapInstance = useRef<IMap | null>(null)

  // Type guard for Yandex Maps API
  const isYmapsLoaded = (ymaps: any): ymaps is YMaps => {
    return !!ymaps && 
           typeof ymaps.ready === 'function' && 
           typeof ymaps.Map === 'function' && 
           typeof ymaps.Placemark === 'function'
  }

  useEffect(() => {
    const initMap = () => {
      if (!mapRef.current) {
        setError("Map container not found")
        setIsLoading(false)
        return
      }

      const ymaps = window.ymaps
      if (!isYmapsLoaded(ymaps)) {
        setError("Yandex Maps API not properly loaded")
        setIsLoading(false)
        return
      }

      ymaps.ready(() => {
        try {
          // Create map instance
          mapInstance.current = new ymaps.Map(mapRef.current, {
            center: TUT_SCHOOL_COORDINATES,
            zoom: DEFAULT_ZOOM,
            controls: []
          })

          // Add zoom control
          mapInstance.current.controls.add('zoomControl')

          // Create placemark
          const placemark = new ymaps.Placemark(
            TUT_SCHOOL_COORDINATES,
            {
              hintContent: "Tut School - Language Courses",
              balloonContentHeader: "Tut School",
              balloonContentBody: "Foreign Language Courses<br>Moscow, Russia",
              balloonContentFooter: `<a href="${YANDEX_MAPS_LINK}" target="_blank">View on Yandex Maps</a>`
            },
            {
              preset: "islands#redEducationIcon",
              iconLayout: 'default#image',
              iconImageHref: '/images/map-marker.png',
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -40]
            }
          )

          // Add placemark to map
          mapInstance.current.geoObjects.add(placemark)

          // Open balloon by default
          setTimeout(() => {
            placemark.balloon.open()
          }, 500)

          setIsLoading(false)
        } catch (err) {
          setError(`Error initializing map: ${err instanceof Error ? err.message : 'Unknown error'}`)
          setIsLoading(false)
        }
      })
    }

    const loadYandexMaps = () => {
      if (window.ymaps && isYmapsLoaded(window.ymaps)) {
        initMap()
        return
      }

      const script = document.createElement('script')
      script.src = 'https://api-maps.yandex.ru/2.1/?lang=en_US&load=package.full'
      script.async = true
      
      script.onload = () => {
        if (!isYmapsLoaded(window.ymaps)) {
          setError("Yandex Maps API failed to load properly")
          setIsLoading(false)
          return
        }
        initMap()
      }

      script.onerror = () => {
        setError("Failed to load Yandex Maps script")
        setIsLoading(false)
      }

      document.body.appendChild(script)

      return () => {
        if (script.parentNode) {
          document.body.removeChild(script)
        }
        if (mapInstance.current?.destroy) {
          mapInstance.current.destroy()
        }
      }
    }

    loadYandexMaps()
  }, [])

  return (
    <div className="relative w-full rounded-xl overflow-hidden shadow-lg border border-gray-200">
      {/* Loading state */}
      {isLoading && (
        <div className="w-full h-[500px] flex items-center justify-center bg-gray-50">
          <div className="text-gray-500 animate-pulse">Loading map...</div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="w-full h-[500px] flex items-center justify-center bg-red-50">
          <div className="text-red-500 max-w-md text-center p-4">
            <p>{error}</p>
            <a 
              href={YANDEX_MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Open in Yandex Maps
            </a>
          </div>
        </div>
      )}

      {/* Map container */}
      <div 
        ref={mapRef} 
        className={`w-full h-[500px] ${isLoading || error ? 'hidden' : 'block'}`}
        aria-label="Tut School location map"
      />

      {/* Floating open button */}
      <a
        href={YANDEX_MAPS_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Open in Yandex Maps"
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