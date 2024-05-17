import { useState, useEffect } from "react";
import { IoCallOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { CiLocationOn } from "react-icons/ci";

export const Contact = () => {
  const [contactInfo, setContactInfo] = useState({
    phone: "+977 986-1237042",
    email: "biwas2059@gmail.com",
    address: "Kathmandu, Nepal",
  });

  const [formState, setFormState] = useState({
    conName: "",
    conLName: "",
    conEmail: "",
    conPhone: "",
    conService: "",
    conMessage: "",
  });

  useEffect(() => {
    // Simulate fetching data
    const fetchContactInfo = async () => {
      // Simulated data
      const dummyData = {
        phone: "+977 986-1237042",
        email: "biwas2059@gmail.com",
        address: "Kathmandu, Nepal",
      };

      // Simulate delay for fetching
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Set the fetched data
      setContactInfo(dummyData);
    };

    fetchContactInfo();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <>
      <section className="contact-section" id="contact-section">
        <div className="container flexSB">
          <div className="contact-form-box w-half">
            <div className="section-header">
              <h2 className="section-title">Let&apos;s work together!</h2>
              <p>
                I design and code beautifully simple things and I love what I
                do. Just simple like that!
              </p>
            </div>

            <div className="tj-contact-form">
              <form id="contact-form">
                <div className="flexSB gap">
                  <div className="form_group">
                    <input
                      type="text"
                      name="conName"
                      id="conName"
                      placeholder="First name"
                      value={formState.conName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="text"
                      name="conLName"
                      id="conLName"
                      placeholder="Last name"
                      value={formState.conLName}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flexSB gap">
                  <div className="form_group">
                    <input
                      type="email"
                      name="conEmail"
                      id="conEmail"
                      placeholder="Email address"
                      value={formState.conEmail}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form_group">
                    <input
                      type="tel"
                      name="conPhone"
                      id="conPhone"
                      placeholder="Phone number"
                      value={formState.conPhone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="form_group">
                  <select
                    name="conService"
                    id="conService"
                    className="tj-nice-select"
                    value={formState.conService}
                    onChange={handleInputChange}
                  >
                    <option value="" disabled>
                      Choose Service
                    </option>
                    <option value="branding">Branding Design</option>
                    <option value="web">Web Design</option>
                    <option value="uxui">UI/UX Design</option>
                    <option value="app">App Design</option>
                  </select>
                </div>
                <div className="form_group">
                  <textarea
                    name="conMessage"
                    id="conMessage"
                    placeholder="Message"
                    value={formState.conMessage}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="form_btn">
                  <button type="submit" className="btn tj-btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="contact-info-list w-half">
            <ul className="ul-reset">
              <li>
                <div className="icon-box">
                  <IoCallOutline size={25} />
                </div>
                <div className="text-box">
                  <p>Phone</p>
                  <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <TfiEmail />
                </div>
                <div className="text-box">
                  <p>Email</p>
                  <a href={`mailto:${contactInfo.email}`}>
                    {contactInfo.email}
                  </a>
                </div>
              </li>
              <li>
                <div className="icon-box">
                  <CiLocationOn size={25} />
                </div>
                <div className="text-box">
                  <p>Address</p>
                  <a href="#">{contactInfo.address}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};
