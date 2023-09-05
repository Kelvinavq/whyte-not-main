'use client'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { Montserrat } from 'next/font/google'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
 
const montserrat = Montserrat({
  weight: 'variable',
  subsets: ['latin'],
})
 


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    useEffect(() => {
      AOS.init({
           duration: 800,
           once: true,
         })
   }, [])
    return (
      <html lang="es">
        <body className={montserrat.className}>
            <CacheProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
            </CacheProvider>
        </body>
      </html>
    )
  }
