import {
  Blog,
  Contact,
  Hero,
  Portfolio,
  Resume,
  Service,
  Skill,
  Testimonial,
} from "../utils/Router";
import { Element } from "react-scroll";
export const Home = () => {
  return (
    <>
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="service">
        <Service />
      </Element>
      <Element name="portfolio">
        <Portfolio />
      </Element>
      <Element name="resume">
        <Resume />
      </Element>
      <Element name="skill">
        <Skill />
      </Element>
      <Element name="testimonial">
        <Testimonial />
      </Element>
      <Element name="blog">
        <Blog />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </>
  );
};
