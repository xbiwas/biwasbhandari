import { useState, useEffect } from "react";
import { linklist } from "../../assets/data/data";
// import { NavLink } from "react-router-dom";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5"; // Import menu and close icons
import { Link } from "react-scroll";

export const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track if the menu is open or closed

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <>
      <header
        className={`tj-header-area header-absolute ${isSticky ? "sticky" : ""}`}
      >
        <div className="container flexSB">
          <div className="logo-box">
            <Link to="/">
              <img src="./images/common/logo.png" alt="logo" />
            </Link>
          </div>

          <div className={`header-menu ${isMenuOpen ? "open" : ""}`}>
            <nav>
              <ul>
                {linklist.map((link) => (
                  <li key={link.id}>
                    <Link
                      // className={toggleMenu}
                      to={link.link}
                      smooth="500"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flexSB">
            <div className="header-button">
              <Link
                to="contact"
                className="btn tj-btn-primary"
                smooth="500"
                style={{
                  cursor: "pointer",
                }}
              >
                Hire me!
              </Link>
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoCloseOutline size={55} />
              ) : (
                <IoMenuOutline size={55} />
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
