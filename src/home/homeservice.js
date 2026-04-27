import "../Style/homeservice.css";

// Images
import homeser1 from "../Images/homeser1.png";
import homeser2 from "../Images/homeser2.png";
import homeser3 from "../Images/homeser3.png";
import homeser4 from "../Images/homeser4.png";
import homeser5 from "../Images/homeser5.png";
import homeser6 from "../Images/homeser6.png";
import homeser7 from "../Images/homeser7.png";
import homeser8 from "../Images/homeser8.png";
import homeser9 from "../Images/homeser9.png";
import homeserright from "../Images/homeright.png";
import homeconstructor from "../Images/homeconstruct.png";
import skillicon from "../Images/skillicon.png";
import timeicon from "../Images/timeicon.png";
import highicon from "../Images/highicon.png";
import customericon from "../Images/customericon.png";




const servicesData = [
  { id: 1, title: "Vaccum Dewatered Flooring", image: homeser1 },
  { id: 2, title: "Industrial Flooring", image: homeser2 },
  { id: 3, title: "IPS Flooring", image: homeser3 },
  { id: 4, title: "Concrete Groove Cutting", image: homeser4 },
  { id: 5, title: "Concrete Hammer", image: homeser5 },
  { id: 6, title: "Raid On Flooring Finishing", image: homeser6 },
  { id: 7, title: "Expansion Joint Sealing", image: homeser7 },
  { id: 8, title: "Flooring", image: homeser8 },
];

const HomeService = () => {
  return (
    <div className="home-content-wrapper">
      <section className="services-section">
        {/* HEADER */}
        <div className="services-header">
          <h2>All Our <span>Services</span></h2>
          <div className="red-arrow-indicator">
            <svg width="45" height="40" viewBox="0 0 45 40">
              <path
                d="M5 8 H35 V35"
                stroke="#ff3b3b"
                strokeWidth="3"
                fill="none"
                strokeLinecap="square"
              />
              <path
                d="M28 28 L35 35 L40 28"
                stroke="#ff3b3b"
                strokeWidth="3"
                fill="none"
                strokeLinecap="square"
              />
            </svg>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="services-grid">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-image-wrapper">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-title-block">
                {service.title}
              </div>
            </div>
          ))}
        </div>

        {/* TOP ROW (9th CARD, BRANDING, DESC) */}
        <div className="layout-row-top">
          <div className="card-9-box">
            <div className="service-card">
              <div className="service-image-wrapper">
                <img src={homeser9} alt="FM2 Laser" />
              </div>
              <div className="service-title-block">
                FM2 Laser
              </div>
            </div>
          </div>

          <div className="branding-box">
            <h3>M M L</h3>
            <p>Construction</p>
          </div>

          <div className="description-box">
            <p>
              MML Construction delivers high-quality flooring and construction solutions with precision and
              reliability. We combine skilled workmanship and modern technology to ensure durable, on-time
              project completion.
            </p>
          </div>
        </div>

        {/* SHOWCASE */}
        <div className="showcase-row">
          <div className="why-mml-box">
            <div className="why-mml-header">
              <h2>Why <span>M M L</span><br />Construction</h2>
              <div className="red-arrow-indicator">
                <svg width="45" height="40" viewBox="0 0 45 40">
                  <path
                    d="M5 8 H35 V35"
                    stroke="#ff3b3b"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="square"
                  />
                  <path
                    d="M28 28 L35 35 L40 28"
                    stroke="#ff3b3b"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="showcase-image-container">
            <img src={homeserright} alt="Showcase" />
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="trust-section">
        <div className="trust-grid">
          <div className="trust-points-container">
            <div className="trust-item">
              <div className="trust-header">
                <span className="trust-icon-svg">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff2a13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>
                </span>
                <h4>Trusted & Reliable Service</h4>
              </div>
              <p>We are known for delivering consistent quality work with honesty and reliability.<br /> Clients trust us for dependable construction solutions every time.</p>
            </div>
            <div className="trust-item">
              <div className="trust-header">
                <span className="trust-icon-svg">
                  <img src={skillicon} alt="Skilled Team" width="20" height="20" />
                </span>
                <h4>Skilled & Experienced Team</h4>
              </div>
              <p>Our team consists of trained professionals<br /> who bring expertise and precision to<br /> every project we handle.</p>
            </div>
            <div className="trust-item">
              <div className="trust-header">
                <span className="trust-icon-svg">
                  <img src={customericon} alt="Skilled Team" width="25" height="25" />
                </span>
                <h4>Customer Satisfaction First</h4>
              </div>
              <p>We prioritize client needs and aim to exceed expectations through our service, support,<br /> and final results.</p>
            </div>
          </div>

          <div className="trust-points-container">
            <div className="trust-item">
              <div className="trust-header">
                <span className="trust-icon-svg">
                  <img src={timeicon} alt="Skilled Team" width="25" height="25" />
                </span>
                <h4>On-Time Project Delivery</h4>
              </div>
              <p>We value your time and ensure every project is completed within the promised schedule without compromising on quality.</p>
            </div>
            <div className="trust-item">
              <div className="trust-header">
                <span className="trust-icon-svg">
                  <img src={highicon} alt="Skilled Team" width="25" height="25" />
                </span>
                <h4>High-Quality Materials</h4>
              </div>
              <p>We use only premium quality materials to ensure long-lasting durability and a perfect finish in all our work.</p>
            </div>
          </div>

          <div className="worker-image-box">
            <img src={homeconstructor} alt="Construction Worker" />
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-banner">
        <h3>Build Your Dream with <span>MML Construction</span></h3>
        <p>Quality work, trusted service, and on-time delivery for every project.</p>
      </section>

      {/* FOOTER */}
      
    </div>
  );
};

export default HomeService;