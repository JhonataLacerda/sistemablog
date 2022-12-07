import { Avatar, Image, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Spinner, Text, Stack, UnorderedList, ListItem } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillChatLeftTextFill, BsStackOverflow, BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai';
import { Header } from "../components/Form/Header";

import axios from "axios";
import { RiContrastDropLine } from "react-icons/ri";
import { api } from "../services/api";

import { Content } from "../components/Form/Content";
import Footer from '../components/Form/Footer'
import Post from "../components/Form/Post";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import { url } from "inspector";
import WithSubnavigation from "../components/Form/WithSubnavigation";



export default function Home() {



    return (




        <Stack  h="3100px"  py="0px" css={'scroll-behavior: smooth; '} >

     <Box>
           <Stack position="sticky" css={'z-index:1'} bottom="50px" width="100%"  top="0"left="0">
                    <Header />
                    </Stack>

                    

         
          
            <Stack  pt="0" width="100%"  pr="0px" h="3700px" direction="column">
                <Box >
                    <Content />
                </Box>
            </Stack>
    

            </Box>
           

            <Box  paddingTop="1400px" bottom="0" width="100%" left="0">
                <Footer />
            </Box>
        </Stack>
        


    );

}


