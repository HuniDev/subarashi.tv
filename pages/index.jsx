import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sitehead from '../components/Sitehead'
import Poster from '../components/Poster'
import {  Heading, Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box>
     <Sitehead />
       <Box w='100%'>
         <Heading ml='20' size='md'>
           Trending
         </Heading>
        <Poster/>
       </Box>
       <Box w='100%'>
         <Heading ml='20' size='md' pt='10'>
           Newest         
         </Heading>
         <Poster/>
       </Box>
    </Box>
  )
}
