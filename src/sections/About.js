import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  position: relative;
  display: flex;
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 1rem;
  left: 5%;
  width: 100%;
  z-index: 5;

  font-family: "Kaushan Script";
  font-size: ${(props) => props.theme.fontBig};
  font-weight: 300;

  display: flex;
`;

const Left = styled.div`
  width: 50%;
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  position: relative;
  z-index: 5;
  margin-top: 20%;
`;

const Right = styled.div`
  width: 50%;
  position: relative;

  img {
    width: 100%;
    height: auto;
  }

  .small-img-1 {
    width: 40%;
    right: 95%;
    bottom: 10%;
    position: absolute;
  }

  .small-img-2 {
    width: 40%;
    left: 80%;
    bottom: 30%;
    position: absolute;
  }
`;

const Home = () => {
  return (
    <Section id="fixed-target">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Us
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-target">
        We're fashion studio based in california. We create unique designs that
        will blow your mind. We also design unique jewellary pieces. Fashion is
        an ART that can not be grasped by everyone. We are very dedicated to
        making our products. We offer unique and creative products to a wide
        range of people. We have a variety of styles, but for most people, all
        of the options are in the box. We specialize in making things that make
        you happy. We strive to build on our vision. As a fashion label, we do
        our best to create amazing experiences for all people. We are always
        looking to make something that is easy for everyone.
      </Left>
      <Right>
        <img src={img1} alt="About us" />
        <img
          src={img2}
          data-scroll
          data-scroll-speed="5"
          className="small-img-1"
          alt="About us"
        />
        <img
          src={img3}
          data-scroll
          data-scroll-speed="-2"
          className="small-img-2"
          alt="About us"
        />
      </Right>
    </Section>
  );
};

export default Home;
