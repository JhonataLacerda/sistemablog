import { Box, Icon, Link, Stack, Text } from "@chakra-ui/react";
import { AiFillHome } from 'react-icons/ai'
import { MdWork, MdHomeRepairService } from 'react-icons/md'
import { SiAboutdotme } from 'react-icons/si'


export function SideBar() {
    return (
        <Box as="aside" w="64" mr="8">

            <Stack spacing="12" align="flex-start">

                <Box>
                    <Text fontWeight="bold" ml="-95 " color="#ccb271" fontSize="small">
                        GERAL
                    </Text>
                    <Stack spacing="1" ml="-95" mt="8" align="strech">
                     
                        <Link display="flex" color="#ccb271">
                            <Icon as={AiFillHome} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >INICIO</Text>
                        </Link>
                        <Link display="flex" color="#ccb271">
                            <Icon as={SiAboutdotme} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >SOBRE</Text>
                        </Link>
                        <Link display="flex" color="#ccb271">
                            <Icon as={MdHomeRepairService} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >SERVIÇOS</Text>
                        </Link>
                        <Link display="flex" color="#ccb271">
                            <Icon as={MdWork} fontSize="20" />
                            <Text ml="4" fontWeight="medium" >PORTIFÓLIO</Text>
                        </Link>




                    </Stack>
                </Box>


            </Stack>


        </Box>


    );
}