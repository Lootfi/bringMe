import React from 'react'
import { Center, Code, Heading, HStack, VStack, Text, Button } from 'native-base'
import NativeBaseIcon from '../components/icons/NativeBaseIcon'
import ToggleDarkMode from '../components/ToggleDarkMode'

const Home = ({ navigation }: any) => {
    return (
        <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <NativeBaseIcon />
          <Heading size="lg">Welcome to NativeBase</Heading>
          <HStack space={2} alignItems="center">
            <Text>Edit</Text>
            <Code>App.tsx</Code>
            <Text>and save to reload.</Text>
          </HStack>
          <Button onPress={() => navigation.navigate('Details')}>Details Screen</Button>
          <ToggleDarkMode />
        </VStack>
      </Center>
    )
}

export default Home
