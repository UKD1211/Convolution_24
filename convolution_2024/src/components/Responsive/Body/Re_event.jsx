/* eslint-disable react/jsx-key */
import React from "react";
import "./Re_event.css";
import picture1 from "../../assets/Decisia_Dark.png";
// import picture2 from "../assets/Abol Tabol_Dark.png";
import picture2 from "../../assets/abol2nd.png";
import picture3 from "../../assets/Circuistics_Dark.png";
import picture4 from "../../assets/Eureka_Dark.png";
import picture5 from "../../assets/Inquizzitive_Dark.png";
import picture6 from "../../assets/Papier_Dark.png";
import picture7 from "../../assets/Sparkhack_Dark.png";
import picture8 from "../../assets/24 Frames Dark.png";
import picture9 from "../../assets/Algomaniac Dark.png";

const eventData = [
  {
    id: 1,
    heading: "Decisia",
    imgSrc: picture1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    heading: "Abol Tabol",
    imgSrc: picture2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    heading: "Circuistics",
    imgSrc: picture3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    heading: "Papier",
    imgSrc: picture6,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 1,
    heading: "Eureka",
    imgSrc: picture4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 2,
    heading: "Inquizzitive",
    imgSrc: picture5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 3,
    heading: "Sparkhack",
    imgSrc: picture7,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    heading: "24 Frames",
    imgSrc: picture8,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    id: 4,
    heading: "Algomaniac",
    imgSrc: picture9,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];

function Re_event() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center gap-2 py-5">
        <h1 className="text-center re_events_h1">EVENTS</h1>
        <span className="re_events_underline"></span>
        <p className="re_events_paragraph py-4">
          A plethora of events covering all your skills. So gear up for the
          showdown!
          <br />
          Browse over the links to register
        </p>
      </div>
      <div className="">
        <div className="flex flex-col gap-5">
          {eventData.map((data) => (
            <div
              className="flex flex-col items-center mx-2 my-4 justify-evenly gap-4"
              key={data.id}
            >
              <div className="re_event_img">
                <img src={data.imgSrc} alt={data.name} />
              </div>
              <div className="re_event_desc flex items-center flex-col text-center">
                <div className="re_event_desc_heading">{data.heading}</div>
                <div className="re_event_desc_underline mt-2 mb-3"></div>
                <div className="re_event_desc_para">{data.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Re_event;
