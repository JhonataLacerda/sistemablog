import { Avatar, Image, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Spinner, Text, Table, Stack, Grid, HStack, Center, useColorModeValue, Img } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsArrowUpRight, BsFillChatLeftTextFill, BsHeart, BsHeartFill, BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi'
import { AiFillLike, AiFillHeart } from 'react-icons/ai';
import { ImShare } from 'react-icons/im'
import axios from "axios";
import { RiContrastDropLine } from "react-icons/ri";
import { api } from "../../services/api"
import data from '../../pages/home'
import { Pagination } from "./Pagination";
import moment from 'moment';
import 'moment/locale/pt-br'

export default function Post() {


    function DateTimeParser(date?: string) {
        if (date === undefined) return date;
        const dateTime = moment(date);

        return dateTime.format("LL");
    }


    const [vetor, setVetor] = useState<any[]>([]);

    const [itensPerPage, setItensPerPage] = useState(3);
    const [currentPage, setCurrentPage] = useState(0);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = vetor.slice(startIndex, endIndex);


    const pages = Math.ceil(vetor.length / itensPerPage);

    const [liked, setLiked] = useState(false);
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

    useEffect(() => {
        getPosts();
    }, []);


    return (


        <Flex direction="column">

            <Grid flex="1" templateColumns='repeat(3, 1fr)' gap="4" >
                {vetor.length === 0 ? "Carregando" : (
                    currentItens.map((post) => (
                        <Flex className="pets" key={post._id}>

                            <Center py={6} >
                                <Box
                                    w="xs"
                                    rounded={'sm'}
                                    my={5}
                                    mx={[0, 5]}
                                    overflow={'hidden'}
                                    bg="gray.700"

                                    border={'1px'}
                                    borderColor="black"
                                    boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
                                    <Box h={'200px'} borderBottom={'1px'} borderColor="black">
                                        <Img
                                            src={
                                                `${api.getUri()}/images/blog/${post.images[0]}`}

                                            roundedTop={'sm'}
                                            objectFit="cover"
                                            h="full"
                                            w="full"
                                            alt={'Blog Image'}
                                        />
                                    </Box>
                                    <Flex justify={'center'} mt={-12}>
                                    <Avatar size={'xl'} css={{
                                        border: '2px solid white', 
                                    }}  src={`${api.getUri()}/images/users/${post.user.image}`} />
                                    </Flex>
                                    <Box p={4}>
                                       <Box 

                                            display={'inline-block'}
                                            px={2}
                                            py={1}
                                            color="white"
                                            mb={2}>
                                    
                                            <Text fontSize={'xs'} fontWeight="medium">
                                            Autor:  {post.user.name}
                                            </Text>
                                            <Text>Data: {DateTimeParser(post.createdAt)}</Text>

                                        </Box>

                                        <Heading color="whiteAlpha.900" fontSize={'2xl'} noOfLines={1}>
                                            {post.titulo}
                                        </Heading>
                                        <Text color="whiteAlpha.900" noOfLines={2}>
                                            {post.texto}
                                        </Text>
                                    </Box>
                                    <HStack borderTop={'1px'} color="black">
                                        <Flex
                                            p={4}
                                            alignItems="center"
                                            justifyContent={'space-between'}
                                            roundedBottom={'sm'}
                                            cursor={'pointer'}
                                            w="full">
                                            <Text fontSize={'md'} color="whiteAlpha.900" fontWeight={'semibold'}>
                                                Continue lendo
                                            </Text>
                                            <ImShare size="25px" color="white"></ImShare>
                                        </Flex>
                                        <Flex
                                            p={4}
                                            alignItems="center"
                                            justifyContent={'space-between'}
                                            roundedBottom={'sm'}
                                            borderLeft={'1px'}

                                            cursor="pointer"
                                            onClick={() => setLiked(!liked)}>
                                            {liked ? (
                                                <BsHeartFill fill="white" fontSize={'24px'} />
                                            ) : (
                                                <BsHeart color="white" fontSize={'24px'} />

                                            )}
                                        </Flex>
                                    </HStack>
                                </Box>
                            </Center>

                        </Flex>

                    ))
                )}


            </Grid>


            <Stack
                direction="row"
                mt="8" justify="space-between"
                align="right"
                spacing="2"
            >


                <Box>

                </Box>

                <Stack direction="row" spacing="2">

                    {Array.from(Array(pages), (item, index) => {
                        return <Button value={index} onClick={(e: React.MouseEvent<HTMLButtonElement>) => setCurrentPage(Number(e.currentTarget.value))} size="sm"
                            fontSize="xs"
                            width="4"
                            bgColor="gray.700"
                            _hover={{
                                bg: 'gray.500'
                            }}>{index + 1}</Button>
                    })}

                </Stack>
            </Stack>

        </Flex>





    );
}
