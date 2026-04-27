import React from "react";
import "../Style/ServicesGrid.css";

// 👉 Local images
import imgVaccum from "../Images/first.png";
import imgIndustrial from "../Images/second.png";
import imgIPS from "../Images/ninee.png";
import imgConcrete from "../Images/fourth.png";
import imgConcretee from "../Images/fifth.png";
import imgRaid from "../Images/third.png";
import imgExpansion from "../Images/sixth.png";
import imgFlooring from "../Images/seventh.png";
import imgFM2 from "../Images/eighth.png";

const services = [
  {
    title: "Vaccum Dewaterd Flooring",
    desc: "Efficient removal of water from concrete surfaces using advanced vaccum dewatering technology.",
    img: imgVaccum,
  },
  {
    title: "Industrial Flooring",
    desc: "Durable and heavy-duty flooring system designed for industrial environments.",
    img: imgIndustrial,
  },
  {
    title: "IPS Flooring",
    desc: "IPS flooring system for excellent strength, durability, and long-lasting performance",
    img: imgIPS,
  },
  {
    title: "Concrete Groove Cutting",
    desc: "Precision grooving in concrete surfaces to control cracking and improve appearance.",
    img: imgConcrete,
  },
  {
    title: "Concrete Hammer",
    desc: "Breaking and removal of concrete structures with powerful and safe hammering techniques.",
    img: imgConcretee,
  },
  {
    title: "Raid On Flooring Finishing",
    desc: "Surface raid treatment to enhance floor bonding and ensure a strong base for flooring.",
    img: imgRaid,
  },
  {
    title: "Expansion Joint Sealing",
    desc: "Installation of expansion joints to accommodate movement and prevent cracks.",
    img: imgExpansion,
  },
  {
    title: "Flooring",
    desc: "High-quality flooring solutions tailored for industrial and commercial spaces.",
    img: imgFlooring,
  },
  {
    title: "FM2 Laser",
    desc: "FM2 laser screed flooring for ultra-flat, high-precision surfaces.",
    img: imgFM2,
  },
];


const ServicesGrid = () => {
  return (
    <section className="services">
      <div className="services-container">
        {services.map((item, index) => (
          <div
            className="card"
            key={index}
            id={item.title.toLowerCase().replace(/\s+/g, '-')}
          >
            <img src={item.img} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default ServicesGrid;