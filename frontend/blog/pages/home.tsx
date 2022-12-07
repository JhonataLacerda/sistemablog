import { Avatar, Image, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai';
import { Header } from "../components/Form/Header";
import { SideBar } from "../components/Form/SideBar";
import axios from "axios";
import { RiContrastDropLine } from "react-icons/ri";
import { api } from "../services/api";
import Post from "../components/Form/Post";
import { Content } from "../components/Form/Content";


export default function Home() {


    const [vetor, setVetor] = useState<any[]>([]);

    const getPosts = async () => {

        try {
            const response = await axios.get('http://localhost:8080/blog');


            const data = response.data;


            console.log(data);

            setVetor(data.blog);


        }


        catch (error) {

            console.log(error)

        }
    }



    return (
        <Flex direction="column" h="100vh">
            <Header />

            <Flex w="100%" my="7" maxWidth={1480} mx="auto" px="6">
                <Flex>
                    <SideBar  />
                </Flex>

                <Flex  >
                    <Content />
                </Flex>
               
            </Flex>
            <Flex mt="100px" ml="500px">
                    <Post />
                </Flex>
        </Flex>

    );

}


