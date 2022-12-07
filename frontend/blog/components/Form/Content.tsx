import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Image, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { useParallax } from "react-scroll-parallax";
import { Parallax } from 'react-scroll-parallax';
import ContactForm from "./ContactForm";
import Post from "./Post";
export function Content() {

    return (





        <Flex direction="column" maxWidth="100%" >
            <Box>
            <Image src="contentimage.jpg" width="100%" height="700px" />
            <Flex align="center" ml="200px" mr="200px">

                <UnorderedList pt="70">
                    <Heading fontSize="20px" as="b" >MERN é uma singla para:</Heading>
                    <ListItem >MongoDB: É um banco de dados não-relacional.
                        É utilizado na MERN stack pois os dados são manipulados no formato JSON.</ListItem>
                    <ListItem>Node.js: O Node.js trabalha com JavaScript, ou seja, um
                        desenvolvedor que conheça bem a linguagem JavaScript não
                        terá dificuldades em aprender Node.js.</ListItem>
                    <ListItem> Express.js: Um middleware dedicado ao
                        gerenciamento de apps web complexos, é
                        usado para criação de API REST. A API REST
                        corresponde a um site que recuperará dados
                        por meio de solicitações HTTP.</ListItem>
                    <ListItem>React.js: Responsável pelo front-end, é
                        uma biblioteca JavaScript desenvolvida e
                        utilizada pelo Facebook. Responsável por
                        fazer, de maneira extremamente rápida,
                        animações, uploads e transições.</ListItem>

                </UnorderedList>



                <Flex marginLeft={30} pt="90px">
         

                    <Card size="sm" bg="gray.700" color="gray.100"
                        direction={{ base: 'column', sm: 'row' }}
                        overflow='hidden'

                    >
                        <Image mt="-1"
                            height={280}


                            maxW="350"
                            src='contentimagem2.jpg'
                            alt='Logo'
                        />

                        <Stack py="50px">
                            <CardBody>
                                <Heading py='2' size='sm'>FullStack MERN</Heading>

                                <Text>
                                    É um profissional FullStack que trabalha no front e no backend
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>

                </Flex>


            </Flex>

  

            <Image pt="70px" src="imagem3.jpg" width="300%" height="1000px" />
            <Flex mt="100px" ml="300px" direction="column">


                <Flex ml={-100} pt="-100px" direction="column" >

                    <Text py="0" fontSize="40px" align="center" mr="100px" >"Aprenda como se fosse viver para sempre e viva como se
                        < br />fosse morrer amanhã." – Mahatma Gandhi</Text>
                </Flex>


                <Flex id="sobre" py="60px" >
                    <Flex direction="column" pl="300px">
                        <Flex >
                            <Flex direction="column">
                                <Heading fontSize="50px" as='b'>Nossa missão</Heading>
                                <Text align="justify" as='i' maxW="400px">
                                    Sabemos que há empresas incríveis por ai e que precisam modernizar ou desenvolver novos
                                    sistemas web. O objetivo da iniciativa Wineron é ajudar a tornar esse sonho uma realidada.
                                    Com tecnologias de ponta utilizando o MERN como padrão para desenvolvimento a Wineron oferece
                                    a oportunidade de deixar o sistema web do seu jeito. Além  é claro de oferecer o conhecimento e
                                    experiências através do nosso blog. E é com esses objetivos que criamos esta iniciativa unindo
                                    software, educação e a comunidade para que possamos crescer cada dia mais.
                                </Text>
                            </Flex>
                            <Image
                                src="contentimagem4.jpeg"
                                ml="100px"
                                maxWidth="400px"
                                borderRadius="69% 31% 58% 42% / 35% 34% 66% 65% " />
                        </Flex>
                        <Flex ml="-100px" >

                            <Flex pt="90px">
                                <Image mr="100px"
                                    src="contentimagem5.jpg"
                                    ml="100px"
                                    maxWidth="400px"
                                    borderRadius="80% 20% 80% 20% / 12% 86% 14% 88%" />
                            </Flex>
                            <Flex direction="column" pt="70px">
                                <Heading fontSize="50px" as='b'>Nossa História</Heading>
                                <Text align="justify" as='i' maxW="400px">A  Wineron surgiu de uma iniciatva de um estudante
                                    que tinha e continua tendo o compromisso de apresentar ao mercado soluções de desevolvimento
                                    web. Especialmente utilizando a tecnologia MERN (MongoDB, Express JS, React JS e Node JS).
                                    Indo muito além do compromisso original, o objetivo da Wineron é oferecer conhecimento para a
                                    comunidade através de um blog próprio. Acreditamos que disseminar o conhecimento é o primeiro passo
                                    para o ganho de novos conhecimentos.
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>


            <Box id="post" py="100px" width="100%" mr="50px" >
                <Flex  pl="500px" backgroundImage="url('imagem1.jpg')" >

                    <Post />
                </Flex>
            </Box>

            </Box>

            <Flex py="300px" pl="450px" id="contato">
                <ContactForm />
            </Flex>



        </Flex>


    );
}