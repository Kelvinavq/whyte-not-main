'use client'
import NavBar from '@/components/nav/navBar';
import * as React from 'react';
import Image from 'next/image';
import proposito from "../../../public/img/somos/proposito.png";
import imgHeader from "../../../public/img/somos/imgHeader.png";
import  Style from './page.module.css';
import { Box,Button,Card, CardBody, CardHeader, Heading, Link, SimpleGrid, Text} from '@chakra-ui/react';
import Footer from '@/components/footer/footer';
import ButtomWhat from '@/components/buttomWhat/buttomWhat';



function Somos(){
    const navStyle = {
        fondo : {background:"linear-gradient(white,rgb(245, 245, 255))"},
        letter : {color: "black"},
        logo : {color: "blackRed"},
      }
    return(
        <section>
            <NavBar navBarStyle={navStyle}></NavBar>
            <header  className={Style.header}>

            </header>
            <main className={Style.mainCardAcerca}>
                <section className={Style.containerCardAcerca}>
                <Image src={proposito} alt=''></Image>

                    <Card align='center' className={Style.cardAcerca} >
                        <CardBody>
                            <Box data-aos="fade-right" >
                                <Text  fontSize='sm' className={Style.cardAcercaText}>
                                    Materializar, asesorar y desarrollar las ideas de nuestros clientes, potenciando negocios en el entorno digital, para mejorar la calidad de vida en Chile, aunque no tenemos fronteras.
                                </Text>
                                <Text  fontSize='sm' className={Style.cardAcercaText}>
                                Proveemos diversos servicios como la gestión de redes sociales, diseño de identidad de marca y construcción de aplicaciones móviles o sitios web, así como también otras herramientas necesarias para tus proyectos digitales.
                                </Text>
                            </Box>
                        </CardBody>
                    </Card>
                </section>
                <section className={Style.containerDifereciadores}>
                    <Heading size='md' className={Style.DifereciadoresTitle} textTransform='uppercase'>
                        Nuestros principales diferenciadores
                    </Heading>
                    <SimpleGrid data-aos="fade-up"   spacing={4} templateColumns='repeat(auto-fill, minmax(30%, 1fr))' className={Style.containerCardDifereciadores}>
                        <Card   className={Style.cardDifereciadores}>
                            <CardHeader>
                            <Heading size='md' > Experiencia </Heading>
                            </CardHeader>
                            <CardBody>
                            <Text className={Style.cardDifereciadoresText}>Más de 10 años de experiencia en producción digital y gestión de marketing digital de diversas marcas.</Text>
                            </CardBody>
                        </Card>
                        <Card className={Style.cardDifereciadores}>
                            <CardHeader>
                            <Heading size='md'> Asesoramiento 100% personalizado </Heading>
                            </CardHeader>
                            <CardBody>
                            <Text className={Style.cardDifereciadoresText}>Contamos con un equipo altamente capacitado listo para atender todas tus dudas y necesidades, para crear estrategias que solucionen e impulsen tu marca.</Text>
                            </CardBody>
                        </Card>
                        <Card className={Style.cardDifereciadores}>
                            <CardHeader>
                            <Heading size='md'> Valoramos </Heading>
                            </CardHeader>
                            <CardBody>
                            <Text className={Style.cardDifereciadoresText}>La confianza, la honestidad, el tiempo de nuestros clientes y colaboradores, el compromiso, el empoderamiento, y por sobre todo la felicidad de quienes  trabajan junto a nosotros.</Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </section>
            </main>
            <ButtomWhat></ButtomWhat>
            <Footer></Footer>
        </section>
    )
}

export default Somos;



