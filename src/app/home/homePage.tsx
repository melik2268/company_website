import Image from "next/image";
import { Col, Row } from "react-bootstrap";
import image_1 from "@/images/image_1.jpg";
import "./homePage.css";
import MyCarousel from "@/component/carousel/carousel";
export default function HomePage() {
  return (
    <>
      <MyCarousel></MyCarousel>
      <div className="responsive-row">
        <div className="left-side">
          {" "}
          <Image
            src={image_1}
            className="responsive-image"
            width={500}
            alt=""
          ></Image>
        </div>

        <div className="right-side text-container">
          <div className="text-title">
            Lorem ipsum dolor sit amet consectetur
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          dolor veritatis incidunt ipsum! Quidem unde accusamus perferendis illo
          a tenetur recusandae modi hic, repellendus pariatur dolor! Id aut
          eaque quia.
        </div>
      </div>
      <div className="responsive-row ">
        <div className="left-side text-container">
          <div className="text-title">
            Lorem ipsum dolor sit amet consectetur
          </div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          dolor veritatis incidunt ipsum! Quidem unde accusamus perferendis illo
          a tenetur recusandae modi hic, repellendus pariatur dolor! Id aut
          eaque quia.
        </div>

        <div className="right-side">
          {" "}
          <Image
            src={image_1}
            className="responsive-image"
            width={500}
            alt=""
          ></Image>
        </div>
      </div>
    </>
  );
}
