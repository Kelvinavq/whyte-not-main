"use client";
import Footer from "@/components/footer/footer";
import NavBar from "@/components/nav/navBar";
import Style from "./page.module.css";
import Image from "next/image";
import ImgService1 from "../../../public/img/service/service1.png";
import ImgService2 from "../../../public/img/service/service2.png";
import ImgService3 from "../../../public/img/service/service3.png";
import ImgService4 from "../../../public/img/service/service4.png";
import ImgService5 from "../../../public/img/service/service5.png";
import ImgService6 from "../../../public/img/service/service6.png";
import ImgService7 from "../../../public/img/service/service7.png";
import ImgService8 from "../../../public/img/service/service8.png";
import ImgService9 from "../../../public/img/service/service9.png";
import * as React from "react";
import { Button, Link } from "@chakra-ui/react";
import ButtomWhat from "@/components/buttomWhat/buttomWhat";

function Servicios() {
  const navStyle = {
    fondo: { background: "linear-gradient(white,rgb(245, 245, 255))" },
    letter: { color: "black" },
    logo: { color: "blackRed" },
  };
  const services = [
    {
      serviceTitle: "Posicionamiento SEO",
      serviceContent:
        "Nuestro servicio se compone de SEO, utilizamos una metodología de trabajo circular que comienza desde la planificación hasta la revisión y optimización del servicio. Utilizamos diferentes plataformas para recopilar información y comprender el punto de partida de cada proyecto, estableciendo los objetivos para crear el contenido optimizado con SEO.",
      serviceImg: ImgService2,
      serviceImgSize: 400,
    },
    {
      serviceTitle: "Desarrollo web",
      serviceContent:
        "Contamos con un equipo multidisciplinario para la creación del contenido SEO, el desarrollo web, landing page o plataforma digital. También el diseño UI/UX de forma atractivo para sorprender a tus clientes. De igual forma contamos con ejecutivos que llevan el control de cada tarea, expertos que  ejecutarán tu proyecto de principio a fin, sin importar la tecnología a utilizar.",
      serviceImg: ImgService3,
      serviceImgSize: 400,
    },
    {
      serviceTitle: "Gestión de redes sociales",
      serviceContent:
        "Nuestro servicio de redes sociales consiste en recopilar información, analizar la competencia, diseñar una estrategia y finalmente ejecutarla, algunas redes sociales en las que tenemos experiencia son: Tik Tok, Facebook, Instagram, Linkedin y Twitter.",
      serviceImg: ImgService4,
      serviceImgSize: 400,
    },
    {
      serviceTitle: "Desarrollo de aplicaciones móviles",
      serviceContent:
        "Construimos tu aplicación móvil, contamos con un equipo de programadores profesionales y diseñadores UX capaces de diseñar, desarrollar y alojar cualquier aplicación móvil, ya sea, en apple store o play store, independientemente de sus funciones, asegurando un servicio óptimo.",
      serviceImg: ImgService5,
      serviceImgSize: 400,
    },
    {
      serviceTitle: "Desarrollo de identidad de marca",
      serviceContent:
        "Ideamos la identidad de marca para que inicies tu negocio. Somos capaces de crear un logo atractivo, con colores acorde a tu modelo de negocio y asesoría profesional.",
      serviceImg: ImgService6,
      serviceImgSize: 400,
    },
    {
      serviceTitle: "Campañas publicitarias",
      serviceContent:
        "Realizamos campañas digitales en medios como Google Ads, Facebook ads, Tik Tok Ads, Linkedin Ads, entre otros. También contamos con diferentes medios offline a los que tu marca puede acceder, como radio, televisión y medios impresos.",
      serviceImg: ImgService7,
      serviceImgSize: 400,
    },
    {
      serviceTitle: "Buscar eventos",
      serviceContent:
        "Integramos tu marca a eventos de emprendimiento para posicionarse y crear lazos comerciales con otras del mismo rubro.  También creamos y producimos tus propios eventos corporativos.",
      serviceImg: ImgService8,
      serviceImgSize: 400,
    },
    {
      serviceTitle: "MAILING",
      serviceContent:
        "Contamos con amplias bases de datos y trabajamos con mejores  tecnologías que facilitan su funcionamiento. Realizamos envíos masivos de correos con un contenido que destaca por su diseño para  así promocionar los productos y servicios de tu marca.",
      serviceImg: ImgService9,
      serviceImgSize: 400,
    },
  ];
  return (
    <section>
      <NavBar navBarStyle={navStyle}></NavBar>
      <video autoPlay muted loop className={Style.banner}>
        <source src="/img/service/banner.mp4" type="video/mp4" />
      </video>
      <div className={Style.buttonBanner}>
        <Link
          className={Style.link}
          href={"https://wa.link/3p9y3w"}
          target="_blank"
        >
          <Button
            variant="solid"
            data-aos="flip-left"
            colorScheme="red"
            size="lg"
          >
            CONTRÁTANOS
          </Button>
        </Link>
      </div>
      <section className={Style.sectionService}>
        <Image
          data-aos="fade-right"
          className={Style.imgService}
          src={ImgService1}
          alt="image lineas para el fondo"
          height={400}
          width={400}
        />
        <div className={Style.sectionServiceContent} data-aos="fade-right">
          <h2>Investigación de mercado</h2>
          <p>
            Nuestro equipo está altamente capacitado para evaluar, diagnosticar
            y delinear una estrategia de marketing adecuada para posicionar su
            marca y obtener ventajas sobre la competencia.
          </p>
          <Link href="https://wa.link/3p9y3w" target="_blank">

          <Button variant="solid" colorScheme="red">
            CONTRÁTANOS
          </Button>
        </Link>

        </div>
      </section>
      {services.map((service, id) => {
        if (id % 2 != 0) {
          return (
            <section key={id} className={Style.sectionServiceOne}>
              <Image
                data-aos="fade-right"
                className={Style.imgService}
                src={service.serviceImg}
                alt="image lineas para el fondo"
                height={service.serviceImgSize}
                width={service.serviceImgSize}
              />

              <div
                className={Style.sectionServiceContent}
                data-aos="fade-right"
              >
                <h2>{service.serviceTitle}</h2>
                <p>{service.serviceContent}</p>
          <Link href="https://wa.link/3p9y3w" target="_blank">

                <Button variant="solid" colorScheme="red">
                  CONTRÁTANOS
                </Button>
        </Link>

              </div>
            </section>
          );
        }
        return (
          <section key={id} className={Style.sectionServiceTwo}>
            <div
              className={Style.sectionServiceContentTwo}
              data-aos="fade-left"
            >
              <h2>{service.serviceTitle}</h2>
              <p>{service.serviceContent}</p>
          <Link href="https://wa.link/3p9y3w" target="_blank">

              <Button variant="solid" colorScheme="red">
                CONTRÁTANOS
              </Button>
        </Link>

            </div>
            <Image
              data-aos="fade-left"
              className={Style.imgService}
              src={service.serviceImg}
              alt="image lineas para el fondo"
              height={service.serviceImgSize}
              width={service.serviceImgSize}
            />
          </section>
        );
      })}
      <ButtomWhat></ButtomWhat>
      <Footer></Footer>
    </section>
  );
}

export default Servicios;
