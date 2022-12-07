import { Button, Card, CardBody, CardFooter, Flex, Heading, Image, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";

export function Content() {

    return (
        <Flex direction="column" maxWidth="100%" >
            <Flex>

                <Image src="contentimage.jpg" ml={-100} width="1200px" height="500px" borderRadius={40} />
            </Flex>
            <Flex align="center" pt="50px"  mr="150px">
                



            

                    
                    <UnorderedList pt="70">
                    <Heading fontSize="20px"as="b" >MERN é uma singla para:</Heading>
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

                        <Stack mt="-3">
                            <CardBody>
                                <Heading py='4' size='sm'>FullStack MERN</Heading>

                                <Text  >
                                    É um profissional FullStack que trabalha no front e no backend
                                </Text>
                            </CardBody>
                        </Stack>
                    </Card>

                </Flex>


            </Flex>





            <Flex  ml={-100} pt="150px" direction="column">
            <Image src="contentimagem3.jpg" minWidth="1200px" maxHeight="500px"  borderRadius={40}/>
            <Text fontSize="40px" align="center">"Aprenda como se fosse viver para sempre e viva como se fosse morrer amanhã." – Mahatma Gandhi</Text>
            </Flex>
        </Flex>


    );
}