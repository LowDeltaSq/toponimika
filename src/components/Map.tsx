"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";

import customMarkerIcon from "/public/market-icon.png";
import Image from "next/image";

interface Place {
  name: string;
  description: string;
  imageUrl: string;
  position: LatLngExpression;
}

const places: Place[] = [
  {
    description:
      "Астана — столица Казахстана, известная своей современной архитектурой и культурным разнообразием. Город расположен на реке Ишим и является политическим и экономическим центром страны.",
    position: [51.1694, 71.4491],
    name: "Астана",
    imageUrl: "/astana.jpg",
  },
  {
    description:
      "Кокшетау — административный центр Акмолинской области, расположен у подножия Кокшетауского возвышения. Город известен своими живописными пейзажами и природными красотами.",
    position: [53.2833, 69.4],
    name: "Кокшетау",
    imageUrl: "/kokshetau.jpg",
  },
  {
    description:
      "Степногорск — город, расположенный в центре Акмолинской области, известный своими промышленными предприятиями и окружающими природными красотами.",
    position: [52.35169458666146, 71.88621109644748],
    name: "Степногорск",
    imageUrl: "/stepnogorsk.jpg",
  },
  {
    description:
      "Атбасар — город на реке Жеребе, известен своим культурным наследием и историческими памятниками.",
    position: [51.8223879737928, 68.3851944721443],
    name: "Атбасар",
    imageUrl: "/atbasar.jpg",
  },
  {
    description:
      "Щучинск — город на берегу озера Щучье, известный своими чистыми водами и живописными пейзажами.",
    position: [52.9333, 70.2],
    name: "Щучинск",
    imageUrl: "/shuchinsk.png",
  },
  {
    description:
      "Есиль — город на реке Есиль, славящийся своим природным окружением и местами для отдыха на свежем воздухе.",
    position: [51.956236659270544, 66.39990732024768],
    name: "Есиль",
    imageUrl: "/yesil.jpg",
  },
  {
    description:
      "Зеренда — небольшой город на берегу озера Зеренда, популярное место для отдыха с развитой туристической инфраструктурой.",
    position: [52.91152173527233, 69.16886127325714],
    name: "Зеренда",
    imageUrl: "/zerenda.jpg",
  },
  {
    description:
      "Акколь — село, известное своими природными ресурсами и культурным разнообразием, важная часть местной экономики.",
    position: [51.99576448429619, 70.9435264595956],
    name: "Акколь",
    imageUrl: "/akkol.jpg",
  },
  {
    description:
      "Макинск — город, известный своими промышленными предприятиями и благоприятной экологической обстановкой.",
    position: [52.638200942822344, 70.42301112635988],
    name: "Макинск",
    imageUrl: "/makinsk.jpg",
  },
  {
    description:
      "Боровое — курортный поселок на берегу озера Боровое, известный своими природными красотами, возможностями для активного отдыха и туризма.",
    position: [53.08821352367219, 70.31803546488973],
    name: "Боровое",
    imageUrl: "/borovoe.jpg",
  },
];

// Создание кастомного маркера
const customIcon = new L.Icon({
  iconUrl: customMarkerIcon.src, // путь до изображения маркера
  iconSize: [50, 50], // размер иконки
  iconAnchor: [15, 40], // точка, по которой иконка прикрепляется к карте (центр внизу)
  popupAnchor: [0, -40], // смещение всплывающего окна относительно маркера
});

export const Map = () => {
  const defaultPosition: LatLngExpression = [53.2833, 69.4];

  return (
    <MapContainer
      center={defaultPosition}
      zoom={10}
      style={{ height: "80vh", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {places.map((place, index) => (
        <Marker key={index} position={place.position} icon={customIcon}>
          <Popup>
            <div className="grid gap-4">
              <div className="">
                <Image
                  src={place.imageUrl}
                  width={500}
                  height={0}
                  alt={place.name}
                />
              </div>
              <div className="">{place.description}</div>
            </div>
          </Popup>
          <Tooltip>
            <div className="text-base font-semibold">{place.name}</div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};
