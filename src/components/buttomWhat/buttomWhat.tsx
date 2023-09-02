import Link from 'next/link';
import * as React from 'react';
import Style from './buttomWhat.module.css'
import { Button } from '@chakra-ui/react';
import { BsWhatsapp } from 'react-icons/bs';



function ButtomWhat (){
    return(
        <Button variant='solid' colorScheme='' className={Style.buttomWhatsapp} >
            <Link className={Style.link} href={'https://wa.link/t1uxho'}  target="_blank"><BsWhatsapp/></Link>
        </Button>
    )
}

export default ButtomWhat 