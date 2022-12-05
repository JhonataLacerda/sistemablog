import { Button, Flex, Stack } from '@chakra-ui/react'
import { FormEvent, useContext, useState } from 'react'
import { Input } from '../components/Form/Input'
import { AuthContext } from '../context/AuthContext';

export default function Home() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signIn} = useContext(AuthContext);

  async function handleSubmit(event:FormEvent){
      event.preventDefault();
      const data  ={
          email,
          password,
      }

     await signIn(data);

  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDirection="column"
        onSubmit={handleSubmit}
      >
        <Stack spacing="4">
          <Input  type="email" name="email"  value={email} onChange={e=>setEmail(e.target.value)}  label="E-mail" />
          <Input  type="password" name="password"  value={password} onChange={e=>setPassword(e.target.value)} label="Senha" />
         
          
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
