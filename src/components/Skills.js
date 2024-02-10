import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import html from "../assets/img/html5.svg";
import js from "../assets/img/js.svg";
import css from "../assets/img/css.svg";
import haskell from "../assets/img/haskellLogo.svg";
import c from "../assets/img/c-1.svg";
import cc from "../assets/img/c.svg";
import ccc from "../assets/img/c--4.svg";
import reactLogo from "../assets/img/react-2.svg";
import bootstrapLogo from "../assets/img/bootstrap-5-1.svg";
import { SkillItem } from './SkillItem';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };
  const programingLanguage = [
    { logo: html, alt: "HTML Logo", title: "HTML" },
    { logo: css, alt: "CSS Logo", title: "CSS" },
    { logo: js, alt: "JavaScript Logo", title: "JavaScript" },
    { logo: haskell, alt: "Haskell Logo", title: "Haskell" },
    { logo: c, alt: "C Logo", title: "C" },
    { logo: cc, alt: "C++ Logo", title: "C++" },
    { logo: ccc, alt: "C# Logo", title: "C#" }
  ];
  const frameWorks =[
    { logo: reactLogo, alt: "React Logo", title: "React" },
    { logo: bootstrapLogo, alt: "Bootstrap Logo", title: "Bootstrap" },
  ];

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <h3>Programing Languages</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            {programingLanguage.map((language, index) => (
                              <SkillItem key={index} {...language}/>
                            ))}
                        </Carousel>
                        <h3>FrameWorks</h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                          {frameWorks.map((language, index) => (
                              <SkillItem key={index} {...language}/>
                          ))}
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}