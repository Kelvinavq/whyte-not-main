"use client";
import * as React from "react";
import Style from "./footer.module.css";
import { Link, ListItem, UnorderedList } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsPaypal, BsWhatsapp } from "react-icons/bs";
import { SiBinance, SiMastercard } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";

function Footer() {
  return (
    <section className={Style.container}>
      <footer className={Style.footer}>
        <section>
          <p>A nosotros nos encanta atenderte y asesorarte</p>
          <div className={Style.footerListEmail}>
            <UnorderedList>
              <ListItem>
                Servicio al cliente y soporte: <b>agencia@whytenot.com</b>
              </ListItem>
              <ListItem>
                Asesoramiento de marketing digital: <b>bmora@whytenot.com</b>
              </ListItem>
              <ListItem>
                Producción digital dentro de Chile: <b>kikodiaz@whytenot.com</b>
              </ListItem>
            </UnorderedList>
          </div>
          <div className={Style.footerRedes}>
            <p>Síguenos por qué no?</p>
            <ul>
              <li>
                <Link
                  className={Style.footerlink}
                  href={"https://www.instagram.com/whytenot.marketing/"}
                >
                  <BsInstagram />
                </Link>
              </li>
              <li>
                <Link
                  className={Style.footerlink}
                  href={
                    "https://www.facebook.com/profile.php?viewas=100000686899395&id=100091506581426"
                  }
                >
                  <BsFacebook />
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <Link className={Style.footerlink} href={"/somos"}>
            Somos
          </Link>
          <Link className={Style.footerlink} href={"/servicios"}>
            Servicios
          </Link>
          <Link className={Style.footerlink} href={"/parte"}>
            Fuimos parte de{" "}
          </Link>
          <Link className={Style.footerlink} href={"/contacto"}>
            Contacto
          </Link>
          <div className={Style.footerMethodPay}>
            <p>Formas de pago</p>
            <ul>
              <li>
                <BsPaypal />
              </li>
              <li>
                <SiBinance />
              </li>
              <li>
                <FaCcVisa />
              </li>
              <li>
                <SiMastercard />
              </li>
              <li>Zinli</li>
            </ul>
          </div>
        </section>
      </footer>
    </section>
  );
}

export default Footer;
