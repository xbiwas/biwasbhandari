import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { hero } from "../../../assets/data/data";

export const Hero = () => {
  const socialIcons = [
    {
      id: 1,
      icon: <FaXTwitter size={17} />,
      link: "https://twitter.com/x_biwas",
    },
    {
      id: 3,
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/in/biwas-bhandari/",
    },
    {
      id: 4,
      icon: <IoLogoGithub size={20} />,
      link: "https://github.com/xbiwas",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="intro_text">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" textAnchor="middle">
              HI
            </text>
          </svg>
        </div>
        <div className="container">
          <div className="content flexSB">
            <div className="left w-half">
              <div className="hero-content-box">
                <span className="hero-sub-title">I am Biwas</span>
                <h1 className="hero-title">
                  Frontend Developer and
                  <br />
                  Python Developer
                </h1>

                <div className="hero-image-box d-md-none text-center">
                  <img src="assets/img/hero/me.png" alt="" />
                </div>

                <p className="lead">
                  Experienced in react, typescript, mongodb for 2 years and
                  currently learning python to deep dive into Generative AI.
                </p>
                <div className="button-box flexG">
                  <a
                    href="https://www.linkedin.com/in/biwas-bhandari/"
                    target="_blank"
                    className="btn tj-btn-secondary"
                  >
                    CV <i className="flaticon-download"></i>
                  </a>
                  <ul className="ul-reset social-icons">
                    {socialIcons.map((icon, index) => (
                      <li key={index}>
                        <a href={icon.link} target="_blank">
                          {icon.icon}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="right w-half">
              <div className="hero-image-box text-center">
                <img src="./images/common/me.png" alt="logo" />
              </div>
            </div>
          </div>

          <div className="funfact-area grid4">
            {hero.map((item, index) => (
              <div className="funfact-item" key={index}>
                <div className="number">
                  <span>{item.text}</span>
                </div>
                <div className="text">{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
