import { Stack, Image, Text, Flex, Heading, Button, useBreakpointValue, Link } from "@chakra-ui/react";

export function Servicos() {

    return (
        <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
                <Stack spacing={6} w={'full'} maxW={'lg'}>
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            color="blue.600"
                        >
                            Serviços
                        </Text>
                        <br />{' '}
                        <Text color={'blue.400'} as={'span'}>
                            Criação de  Web Sites
                        </Text>{' '}
                    </Heading>
                    <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                        Oferecemos uma gama de soluções para sistemas web no menor tempo possível.
                    </Text>
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
                        <Button
                            rounded={'full'}
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            <Link href="#contato">
                                <Text>
                                    Contatar
                                </Text>
                            </Link>
                        </Button>
                       
                    </Stack>
                </Stack>
            </Flex>
            <Flex flex={1}>
                <Image
                    alt={'Login Image'}
                    objectFit={'cover'}
                    pt="100px"
                    pl="370px"
                    height="1000px"
                    width="1400px"

                    src={
                        'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                    }
                />
            </Flex>
        </Stack>
    );
}