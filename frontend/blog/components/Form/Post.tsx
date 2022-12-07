import { Avatar, Image, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillChatLeftTextFill, BsThreeDotsVertical } from 'react-icons/bs';
import { BiShare } from 'react-icons/bi'
import { AiFillLike } from 'react-icons/ai';
import axios from "axios";
import { RiContrastDropLine } from "react-icons/ri";
import { api } from "../../services/api"
import data from '../../pages/home'

export default function Post() {


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

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Flex flex="1" gap="4" align="flex-start" >
            {vetor.length === 0 ? "Carregando" : (
                vetor.map((post) => (
                    <Flex className="pets" key={post._id}>

                        <Card maxW='md' bg="gray.700" size="sm" color="gray.100">
                            <CardHeader>
                                <Flex>
                                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                                        <Avatar name={post.user.name} src={`${api.getUri()}/images/users/${post.user.image}`} />

                                        <Box>
                                            <Heading size='sm'></Heading>

                                        </Box>
                                    </Flex>
                                    <IconButton
                                        variant='ghost'
                                        colorScheme='gray'
                                        aria-label='See menu'
                                        icon={<BsThreeDotsVertical />}
                                    />
                                </Flex>
                            </CardHeader>
                            <CardBody>
                                <Heading size='md' pb={4}>{post.titulo}</Heading>
                                <Text>
                                    {post.texto}
                                </Text>
                            </CardBody>
                            <Image boxSize="450px"
                                objectFit='cover'
                                src={`${api.getUri()}/images/blog/${post.images[0]}`}
                                alt='Chakra UI'
                            />

                            <CardFooter
                                justify='space-between'
                                flexWrap='wrap'
                                sx={{
                                    '& > button': {
                                        minW: '136px',
                                    },
                                }}
                            >
                                <Button flex='1' variant='ghost' leftIcon={<AiFillLike />}>
                                    Like
                                </Button>
                                <Button flex='1' variant='ghost' leftIcon={<BsFillChatLeftTextFill />}>
                                    Comment
                                </Button>
                                <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
                                    Share
                                </Button>
                            </CardFooter>
                        </Card>
                    </Flex>
                ))
            )}
        </Flex>
    );
}
