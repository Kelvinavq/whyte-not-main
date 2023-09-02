
"use client"
import Link from 'next/link';
import * as React from 'react';
import Image from 'next/image';
import Style from './navBar.module.css'
import LogoWhite from '../../../public/img/logo/white.png'
import LogoBlackRed from '../../../public/img/logo/blackRed.png'
import { AiOutlineMenu, AiOutlinePhone} from 'react-icons/ai';
import { BsPuzzle } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosPeople} from "react-icons/io";
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';



function NavBar ({navBarStyle}:{navBarStyle:any}){
    const logo = (color:string)=>{
        if(color == "white"){{ return LogoWhite }}else if (color == "blackRed") { return LogoBlackRed}
        return LogoWhite;
    }
    return(
        <div className={Style.containerNav} style={navBarStyle.fondo}>
            <nav className={Style.nav}>
                <Link  href={'/'}>
                    <Image
                        className={Style.logo}
                        src={logo(navBarStyle.logo.color)}
                        alt="Logo de withenot"
                    />
                </Link>
                <ul className={Style.navBar}>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'/somos'}>Somos</Link>
                    </li>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'/servicios'}>Servicios</Link>
                    </li>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'/parte'}>Fuimos parte de </Link>
                    </li>
                    <li>
                        <Link className={Style.link} style={navBarStyle.letter} href={'/contacto'}>Contacto</Link>
                    </li>
                </ul>
                <div className={Style.menuPhone}>
                    <Menu>
                        <MenuButton
                            as={IconButton}
                            aria-label='Options'
                            icon={<AiOutlineMenu/>}
                            variant='outline'
                            className={Style.menuPhoneIcon}
                        />
                        <MenuList>
                            <MenuItem as='a' href={'/somos'} icon={<IoIosPeople/>}>
                                Somos
                            </MenuItem>
                            <MenuItem as='a' href={'/servicios'} icon={<RiCustomerService2Line/>}>
                                Servicios
                            </MenuItem>
                            <MenuItem as='a' href={'/parte'} icon={<BsPuzzle/>}>
                                Fuimos parte de
                            </MenuItem>
                            <MenuItem as='a' href={'/contacto'} icon={<AiOutlinePhone/>}>
                                Contacto
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </div>
    
            </nav>
        </div>
    )
}

export default NavBar 