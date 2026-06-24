"use client"

import { useEffect, useMemo } from "react"
import L from "leaflet"
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet"

type CenterItem = {
  name: string
  coordinates: [number, number]
}

type CollectionCentersMapProps = {
  centers: CenterItem[]
  activeIndex: number
  onSelectCenter: (index: number) => void
  occludedRatio?: number
  className?: string
}

function createPinIcon(isActive: boolean): L.DivIcon {
  const pinColor = isActive ? "#067BF7" : "#02B992"
  const glow = isActive ? "0 0 0 6px rgba(6, 123, 247, 0.16)" : "none"

  return L.divIcon({
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    html: `
      <span
        style="
          display:block;
          width:18px;
          height:18px;
          border-radius:9999px;
          background:${pinColor};
          border:3px solid #ffffff;
          box-shadow:${glow};
        "
      ></span>
    `,
  })
}

function ActiveCenterSync({ coordinates, occludedRatio }: { coordinates: [number, number]; occludedRatio: number }) {
  const map = useMap()

  useEffect(() => {
    const zoom = 6
    const size = map.getSize()
    const shouldOffset = size.x >= 992
    const offsetX = shouldOffset ? Math.round((size.x * occludedRatio) / 2) : 0

    const targetPoint = map.project(coordinates, zoom)
    const adjustedCenter = map.unproject(L.point(targetPoint.x + offsetX, targetPoint.y), zoom)

    map.flyTo(adjustedCenter, zoom, { duration: 0.45 })
  }, [coordinates, map, occludedRatio])

  return null
}

export default function CollectionCentersMap({
  centers,
  activeIndex,
  onSelectCenter,
  occludedRatio = 0.34,
  className,
}: CollectionCentersMapProps) {
  const activeCoordinates = centers[activeIndex]?.coordinates ?? [12.8797, 121.774]

  const markerIcons = useMemo(() => {
    return centers.map((_, index) => createPinIcon(index === activeIndex))
  }, [centers, activeIndex])

  return (
    <MapContainer
      center={activeCoordinates}
      zoom={6}
      zoomControl={false}
      attributionControl
      scrollWheelZoom={false}
      className={className}
    >
      {/* Carto Voyager gives the soft blue water and muted land tones similar to the target design. */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
      />

      <ActiveCenterSync coordinates={activeCoordinates} occludedRatio={occludedRatio} />

      {centers.map((center, index) => (
        <Marker
          key={center.name}
          position={center.coordinates}
          icon={markerIcons[index]}
          eventHandlers={{
            click: () => onSelectCenter(index),
          }}
        />
      ))}
    </MapContainer>
  )
}
