import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,

    useBreakpointValue,
    IconProps,
    Icon,
} from '@chakra-ui/react';
import { SiGraylog } from 'react-icons/si';


export default function JoinOurTeam() {
    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 32 }}>
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                        Web designers{' '}
                        <Text
                            as={'span'}
                            bgColor='red.500'
                            bgClip="text">
                            &
                        </Text>{' '}
                        Desenvolvedores Full-Stack
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'}>

                        <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                            +
                        </Text>
                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            minWidth={useBreakpointValue({ base: '44px', md: '60px' })}
                            minHeight={useBreakpointValue({ base: '44px', md: '60px' })}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient: 'linear(to-bl, gray.900)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}>
                            YOU
                        </Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.800'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 8 }}
                    maxW={{ lg: 'lg' }}>
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.50'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                            Contato
                            <Text
                                as={'span'}
                                bgColor="gray.50"
                                bgClip="text">
                                !
                            </Text>
                        </Heading>
                        <Text color={'gray.50'} fontSize={{ base: 'sm', sm: 'md' }}>
                            Entre em contato conosco para saber mais sobre as possibilidades que o MERN pode fazer.
                        </Text>
                    </Stack>
                    <Box as={'form'} mt={10}>
                        <Stack spacing={4}>
                            <Input
                                placeholder="Primeiro nome"
                                bg={'gray.50'}
                                border={0}
                                color={'gray.900'}
                                _placeholder={{
                                    color: 'gray.900',
                                }}
                            />
                            <Input
                                placeholder="E-mail"
                                bg={'gray.50'}
                                border={0}
                                color={'gray.900'}
                                _placeholder={{
                                    color: 'gray.900',
                                }}
                            />
                            <Input
                                placeholder="+1 (___) __-___-___"
                                bg={'gray.50'}
                                border={0}
                                color={'gray.900'}
                                _placeholder={{
                                    color: 'gray.900',
                                }}
                            />

                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            mt={8}
                            w={'full'}
                            bgColor="gray.900"
                            color={'white'}
                            _hover={{
                                bgColor: 'gray.700',
                                boxShadow: 'xl',
                            }}>
                            Enviar
                        </Button>
                    </Box>
                    form
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    );
}

export const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}>
            <circle cx="71" cy="61" r="111" fill="gray.300" />
            <circle cx="244" cy="106" r="139" fill="gray.900" />
            <circle cy="291" r="139" fill="gray.800" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="gray.50" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="gray.500" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    );
};