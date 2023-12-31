"use client";
import Link from "next/link";
import * as React from "react";
import Image from "next/image";
import Style from "./navBar.module.css";
import LogoWhite from "../../../public/img/logo/white-logo.png";
import { AiOutlineMenu, AiOutlinePhone } from "react-icons/ai";
import { BsPuzzle } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function NavBar({ navBarStyle }: { navBarStyle: any }) {
  const logo = (color: string) => {
    if (color == "white") {
      {
        return LogoWhite;
      }
    } else if (color == "blackRed") {
      return LogoWhite;
    }
    return LogoWhite;
  };
  return (
    <div className={Style.containerNav} style={navBarStyle.fondo}>
      <nav className={Style.nav}>
        <Link href={"/"}>
          <Image
            className={Style.logo}
            src={logo(navBarStyle.logo.color)}
            alt="Logo de withenot"
          />
        </Link>
        <ul className={Style.navBar}>
          <li>
            <Link
              className={Style.link}
              style={navBarStyle.letter}
              href={"/somos"}
            >
              Somos
            </Link>
          </li>
          <li>
            <Link
              className={Style.link}
              style={navBarStyle.letter}
              href={"/servicios"}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link
              className={Style.link}
              style={navBarStyle.letter}
              href={"/parte"}
            >
              Fuimos parte de{" "}
            </Link>
          </li>
          <li>
            <Link
              className={Style.link}
              style={navBarStyle.letter}
              href={"/contacto"}
            >
              Contacto
            </Link>
          </li>

          <li>
            <Link
              className={Style.link}
              style={navBarStyle.letter}
              href={"https://www.instagram.com/whytenot.marketing/"}
            >
              <InstagramIcon />
            </Link>
          </li>
          <li>
            <Link
              className={Style.link}
              style={navBarStyle.letter}
              href={
                "https://www.facebook.com/people/Whyte-not/100091506581426/"
              }
            >
              <FacebookIcon />
            </Link>
          </li>
        </ul>
        <div className={Style.menuPhone}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<AiOutlineMenu />}
              variant="outline"
              className={Style.menuPhoneIcon}
            />
            <MenuList>
              <MenuItem as="a" href={"/somos"} icon={<IoIosPeople />}>
                Somos
              </MenuItem>
              <MenuItem
                as="a"
                href={"/servicios"}
                icon={<RiCustomerService2Line />}
              >
                Servicios
              </MenuItem>
              <MenuItem as="a" href={"/parte"} icon={<BsPuzzle />}>
                Fuimos parte de
              </MenuItem>
              <MenuItem as="a" href={"/contacto"} icon={<AiOutlinePhone />}>
                Contacto
              </MenuItem>
              
            </MenuList>
          </Menu>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
