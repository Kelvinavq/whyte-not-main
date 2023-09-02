"use client"
import Footer from '@/components/footer/footer';
import NavBar from '@/components/nav/navBar';
import Style from './page.module.css';
import * as React from 'react';
import Form from '@/components/form/fom';
import ButtomWhat from '@/components/buttomWhat/buttomWhat';
import img from '../../../public/img/contacto.png'
import Image from 'next/image';

function Contacto(){
    const navStyle = {
        fondo : {background:"linear-gradient(white,rgb(245, 245, 255))"},
        letter : {color: "black"},
        logo : {color: "blackRed"},
      }
    return(
        <section className={Style.container}>
            <NavBar navBarStyle={navStyle}></NavBar>
            <div className={Style.form}>
            <Form></Form>
            <div className="imgForm">
                <Image src={img} alt=""></Image>
            </div>

            </div>
            <ButtomWhat></ButtomWhat>         
            <Footer></Footer>
        </section>
    )
}

export default Contacto