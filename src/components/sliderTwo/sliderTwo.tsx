import React from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Container,
} from '@chakra-ui/react';
import  Style from './sliderTwo.module.css';

import Image from 'next/image';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';


import ImgTv1 from "../../../public/img/parte/CARRUSEL2/1.png"
import ImgTv2 from "../../../public/img/parte/CARRUSEL2/2.png"
import ImgTv3 from "../../../public/img/parte/CARRUSEL2/3.png"
import ImgTv4 from "../../../public/img/parte/CARRUSEL2/4.png"


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function SliderImgTwo() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const sliderImg = [
    {
      image : ImgTv1
    },
    {
      image : ImgTv2
    },
    {
      image : ImgTv3
    },
    {
      image : ImgTv4
    },
  ];

  return (
    <Box
      position={'relative'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {sliderImg.map((slide, index) => (
          <Box
            key={index}
            >
            <Container className={Style.containerImg} size="container.lg" height="400px" position="relative">
              <Image  className={Style.img} src={slide.image} alt=""/>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}

export default SliderImgTwo;