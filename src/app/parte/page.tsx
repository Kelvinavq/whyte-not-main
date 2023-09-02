"use client"
import Footer from '@/components/footer/footer';
import NavBar from '@/components/nav/navBar';
import * as React from 'react';
import Style  from "./page.module.css"
import Image from 'next/image';

import facebook from "../../../public/img/parte/FACEBOOK.png"
import instagram  from "../../../public/img/parte/INSTAGRAM.png"
import whatsapp from "../../../public/img/parte/WHATSAPP.png"
import fuimosParte from "../../../public/img/parte/fuimos-parte.png"
import { Button, Link } from '@chakra-ui/react';
import ButtomWhat from '@/components/buttomWhat/buttomWhat';
import Slider from '@/components/slider/slider';
import SliderImgTwo from '@/components/sliderTwo/sliderTwo';


function Parte(){
    const navStyle = {
        fondo : {background:"linear-gradient(white,rgb(245, 245, 255))"},
        letter : {color: "black"},
        logo : {color: "blackRed"},
      }

    return(
        <section className={Style.container}>
            <NavBar navBarStyle={navStyle}></NavBar>
            <video autoPlay muted loop className={Style.banner}>
                <source src="/img/parte/banner.mp4" type="video/mp4" />
            </video>
            <Button variant='solid' className={Style.buttonBanner} colorScheme='red' size='lg' >
                <Link className={Style.link} href={'https://wa.link/t1uxho'}  target="_blank">CONTRÁTANOS</Link>
            </Button>
            <h3 className={Style.title} data-aos="fade-up">
                Estas son algunas de las empresas con las que whyte not ha tenido el privilegio de trabajar en proyectos de marketing digital.  Estamos orgullosos de haber colaborado con cada una de ellas y estamos agradecidos por la confianza que han depositado en nosotros. Entre las empresas con las que hemos trabajado se encuentran algunas reconocidas como marcas lideres en sus respectivos sectores, asi como pequeñas y medianas empresas que buscan hacer crecer su presencia online.
            </h3>
            <section className={Style.containerCarroussel} data-aos="fade-up">
                <h3>Fuimos parte de proyectos de marketing digital en</h3>
                <Slider></Slider>
            </section>
            <section className={Style.containerCarroussel2} data-aos="fade-up">
                <h3>Y DE PROYECTOS DE TV EN CHILE (DIRECCIÓN Y PRODUCCIÓN)</h3>
                <SliderImgTwo></SliderImgTwo>
            </section>
            <section className={Style.containerContacto} >
                <Image src={fuimosParte} alt='' data-aos="fade-up"></Image>
                <section className={Style.redesSociales}>
                    <div data-aos="fade-up">
                        <Link className={Style.link} href={'https://www.facebook.com/profile.php?viewas=100000686899395&id=100091506581426'}  target="_blank">
                            <Image src={facebook} alt=""/>
                            <h4 style={{color:"black"}}>SÍGUENOS EN FACEBOOK</h4>
                            <h4 style={{color:"#b60000"}}>WHYTE NOT MARKETING</h4>
                        </Link>
                    </div>
                    <div data-aos="fade-up">
                        <Link className={Style.link} href={'https://www.instagram.com/whytenot.marketing/'}  target="_blank">
                            <Image src={instagram} alt=""/>
                            <h4 style={{color:"black"}}>SÍGUENOS EN INSTAGRAM</h4>
                            <h4 style={{color:"#ff3030"}}>@WHYTENOT.MARKETING</h4>
                        </Link>
                    </div>
                    <div data-aos="fade-up">
                        <Link className={Style.link} href={'https://wa.link/t1uxho'}  target="_blank">
                            <Image src={whatsapp} alt=""/>
                            <h4 style={{color:"black"}}>CONTÁCTANOS</h4>
                            <h4 style={{color:"#ff3030"}}>CLICK AQUÍ</h4>
                        </Link>
                    </div>
                </section>
            </section> 
            <ButtomWhat></ButtomWhat>         
            <Footer></Footer>
        </section>
    )
}

export default Parte