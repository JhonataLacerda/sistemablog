import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import Footer from "../components/Form/Footer";
import Header from "../components/Form/Header";
import { PostBlog } from "../components/Form/PostBlog";

export default function Blog() {


    return (

        <Stack bg="whiteAlpha.900" h="3100px" py="0px" css={'scroll-behavior: smooth; '} >

            <Box>
                <Stack position="sticky" css={'z-index:1'} bottom="50px" width="100%" top="0" left="0">
                    <Header />
                </Stack>


            </Box>

            <Box >

                <Text fontSize="30px" color="gray.900" pl="130px" align="center">
                    <Heading>Blog</Heading>


                    Área de publicação de soluções de desenvolvimento.
                </Text>
            </Box>

            <Stack pt="0" width="100%" pr="0px" h="2700px">
                <Box >
                    <PostBlog />
                </Box>
            </Stack>


            <Box paddingTop="100px" bottom="0" width="100%" left="0">
                <Footer />
            </Box>
        </Stack>

    );
}