import reactIcon from "../../assets/img/react.png";
import angular from "../../assets/img/angular.png";
import nodejs from "../../assets/img/nodejs.png";
import js from "../../assets/img/js.png";
import ts from "../../assets/img/typescript.png";
import java from "../../assets/img/java.png";
import sql from "../../assets/img/mysql.png";
import mongo from "../../assets/img/mongo.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Frameworks / Libraries</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={reactIcon} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={angular} alt="Image" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={nodejs} alt="Image" />
                  <h5>Node Js</h5>
                </div>
              </Carousel>
              <p>Languages</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={js} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={ts} alt="Image" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Image" />
                  <h5>Java</h5>
                </div>
              </Carousel>
              <p>Databases</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={sql} alt="Image" />
                  <h5>My SQL</h5>
                </div>
                <div className="item">
                  <img src={mongo} alt="Image" />
                  <h5>Mongo DB</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
