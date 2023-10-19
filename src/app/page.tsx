"use client";
import * as React from "react";
import Style from "./page.module.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import ImgCardOne from "../../public/img/home/cards/1.png";
import ImgCardTwo from "../../public/img/home/cards/2.png";
import ImgCardThree from "../../public/img/home/cards/3.png";
import starIcon from "../../public/img/home/sectionChooseIcon/star.svg";
import likeIcon from "../../public/img/home/sectionChooseIcon/like.svg";
import NavBar from "@/components/nav/navBar";
import Footer from "@/components/footer/footer";
import ButtomWhat from "@/components/buttomWhat/buttomWhat";
import { Montserrat } from "next/font/google";

import HeaderHomeText from "../../public/img/home/HeaderHomeText.png";

import Link from "next/link";

const montserrat = Montserrat({
  weight: "variable",
  subsets: ["latin"],
});

export default function Page() {
  const [buttonSelected, setButtonSelected] = useState(1);
  const colorTransparent = { background: "transparent" };
  const colorRed = { background: "linear-gradient(#b60000,#b60000)" };
  const [colorButtonSelected, setColorButtonSelected] = useState([
    colorRed,
    colorTransparent,
    colorTransparent,
  ]);

  const cambiarColor = (selected: number) => {
    setButtonSelected(selected);
    if (selected == 1) {
      setColorButtonSelected([colorRed, colorTransparent, colorTransparent]);
    }
    if (selected == 2) {
      setColorButtonSelected([colorTransparent, colorRed, colorTransparent]);
    }
    if (selected == 3) {
      setColorButtonSelected([colorTransparent, colorTransparent, colorRed]);
    }
  };

  const cardContent = [
    {
      id: 1,

      title: "Contenidos",

      text: "Desarrollamos contenidos sobre la base de la tecnología, con eficientes métodos y experiencias de gestión para el cliente, Utilizando las distintas plataformas audiovisuales digitales de manera creativa tecnológica, intuitivas e innovadoras.",

      icon: "",

      servicios: [
        "Creación de contenidos para redes sociales",
        "Redacción de artículos con optimización SEO, ideal para tus sitios web o blogs.",
        "Creatividad para planificar y diseñar los contenidos para tus plataformas digitales, tanto aplicaciones móviles como sitios web.",
      ],
      img: ImgCardOne,
    },
    {
      id: 2,

      title: "MARKETING DIGITAL – ENDOMARKETING",

      text: "Creativas soluciones de endomarketing para las empresas y sus trabajadores apoyando la gestión de RRHH y comunicación interna y posicionando el orgullo de pertenecer como valor agregado a nuestra gestión.",

      icon: "",

      servicios: [
        "Realización de aplicaciones móviles o sitios web para el desarrollo profesional de tu empresa.",
        "Asesoría digital para cualquier tipo de negocio y sin importar el statu en que se encuentre",
      ],
      img: ImgCardTwo,
    },
    {
      id: 3,

      title: "Smart Communication Platform (SCP)",

      text: "SCP es una plataforma tecnológica audiovisual multicontenidos  que diseña, administra y distribuye de manera intuitiva y remota contenidos. Creada  para informar, educar, entretener, integrar y desarrollar estrategias de comunicación corporativas, educacionales y de marketing comercial, a través de productos y servicios audiovisuales.",

      icon: "",

      servicios: [
        "Creación, desarrollo, producción, y realización de contenidos, para comunicación corporativa interna, establecimientos educacionales, corporaciones deportivas y culturales.",
        "Estrategias, campañas y planes de marketing para empresas, retail, supermercados, shopping center, malls, strep center.",
        "Soporte de cartelería digital (Digital Signage)",
        "Construcción de APP dedicada",
        "CCTV con  AI",
      ],
      img: ImgCardThree,
    },
  ];
  const navStyle = {
    fondo: { background: "linear-gradient(white,rgb(245, 245, 255))" },
    letter: { color: "black" },
    logo: { color: "blackRed" },
  };

  return (
    <section className={montserrat.className}>
      <NavBar navBarStyle={navStyle}></NavBar>
      <header className={Style.bannerHome}>
        <div className={Style.left}>
          <Image
            data-aos="fade-right"
            src={HeaderHomeText}
            alt=""
            className={Style.HomeText}
          />
        </div>
        <div className={Style.right}>
          <video
            data-aos="fade-left"
            autoPlay
            muted
            loop
            playsInline
            className={Style.VideoHeader}
          >
            <source src="/video/banner/VideoHeader.mp4" />
          </video>
        </div>
      </header>

      <section data-aos="fade-left" className={Style.sectionCards}>
        <div className={Style.containerButton}>
          <Button
            className={Style.button}
            style={colorButtonSelected[0]}
            onClick={() => {
              cambiarColor(1);
            }}
          >
            CONTENIDOS
          </Button>
          <Button
            className={Style.button}
            style={colorButtonSelected[1]}
            onClick={() => {
              cambiarColor(2);
            }}
          >
            MARKETING DIGITAL
          </Button>
          <Button
            className={Style.button}
            style={colorButtonSelected[2]}
            onClick={() => {
              cambiarColor(3);
            }}
          >
            SCP
          </Button>
        </div>
        <section className={Style.containerCard} data-aos="fade-up">
          <Card align="center" className={Style.card}>
            <CardHeader className={Style.cardHeader}>
              <div className={Style.cardHeaderTitle}>
                <Image
                  src={cardContent[buttonSelected - 1].img}
                  alt="Picture of the author"
                  width={70}
                  height={70}
                />
                <Heading size="lg" textTransform="uppercase">
                  {cardContent[buttonSelected - 1].title}
                </Heading>
              </div>
              <Stack>
                <CardBody>
                  <Link href="https://wa.link/3p9y3w" target="_blank">
                    <Button variant="solid" colorScheme="red">
                      Cotiza con nosotros
                    </Button>
                  </Link>
                </CardBody>
              </Stack>
            </CardHeader>
            <CardBody>
              <Text className={Style.cardContentText}>
                {cardContent[buttonSelected - 1].text}
              </Text>
              <div className={Style.cardSectionList}>
                <Heading size="md" textTransform="uppercase">
                  Servicios
                </Heading>
                <UnorderedList className={Style.cardSectionListContent}>
                  {cardContent[buttonSelected - 1].servicios.map(
                    (service, id) => (
                      <ListItem key={id}>{service}</ListItem>
                    )
                  )}
                </UnorderedList>
              </div>
            </CardBody>
          </Card>
        </section>
      </section>

      <section className={Style.sectionWhyChoose}>
        <header>
          <h3 data-aos="fade-up">
            ¡SOMOS LA MEJOR OPCIÓN PARA <strong>IMPULSAR TU NEGOCIO!</strong>
          </h3>
        </header>
        <main>
          <section data-aos="fade-up">
            <h4>
              ¿Por qué elegir a <strong>Whyte not</strong>?
            </h4>
            <Link href="https://wa.link/3p9y3w" target="_blank">
              <Button variant="solid" colorScheme="red">
                Cotiza con nosotros
              </Button>
            </Link>
          </section>

          <div className={Style.cards}>
            <Card
              align="center"
              className={Style.sectionWhyChooseCard}
              data-aos="fade-up"
            >
              <Image
                src={starIcon}
                alt=""
                className={Style.sectionWhyChooseIcon}
              />
              <CardHeader>
                <Heading size="md" className={Style.sectionWhyChooseCardTitle}>
                  EXPERIENCIA
                </Heading>
              </CardHeader>
              <CardBody>
                <Text className={Style.sectionWhyChooseCardContent}>
                  Contamos con todos los conocimientos y la experiencia
                  necesaria para poder materializar e impulsar tu negocio.
                </Text>
              </CardBody>
            </Card>
            <Card
              align="center"
              className={Style.sectionWhyChooseCard}
              data-aos="fade-up"
            >
              <Image
                src={likeIcon}
                alt=""
                className={Style.sectionWhyChooseIcon}
              />
              <CardHeader>
                <Heading size="md" className={Style.sectionWhyChooseCardTitle}>
                  COMPROMISO
                </Heading>
              </CardHeader>
              <CardBody>
                <Text className={Style.sectionWhyChooseCardContent}>
                  En Whyte Not nos comprometemos contigo y tu proyecto,
                  involucrándonos como si fuera nuestro.
                </Text>
              </CardBody>
            </Card>
            <Card
              align="center"
              className={Style.sectionWhyChooseCard}
              data-aos="fade-up"
            >
              <Image
                src={starIcon}
                alt=""
                className={Style.sectionWhyChooseIcon}
              />
              <CardHeader>
                <Heading size="md" className={Style.sectionWhyChooseCardTitle}>
                  TE VALORAMOS
                </Heading>
              </CardHeader>
              <CardBody>
                <Text className={Style.sectionWhyChooseCardContent}>
                  ¡Tu confianza no tiene precio! Nosotros la valoramos al dejar
                  tu proyecto en nuestras manos.
                </Text>
              </CardBody>
            </Card>
          </div>
        </main>
      </section>
      <ButtomWhat></ButtomWhat>
      <Footer></Footer>
    </section>
  );
}
