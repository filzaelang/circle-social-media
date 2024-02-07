import { Flex, Text, Spacer } from '@chakra-ui/react'
import { Button, Image } from '@chakra-ui/react'

function SugestedAccout() {
    return (
        <Flex bg={"#262626"} wrap={"wrap"}>
            <Flex
                align="center"      // Mengatur posisi vertikal (sumbu Y) ke tengah
                justify="center"    // Sumbu X
                paddingRight={1}
            >
                <Image
                    borderRadius='full'
                    boxSize='30px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    bottom={"30"}
                    left={"5"}
                />
            </Flex>
            <Flex flexDirection={'column'} gap={0}>
                <Text color={"white"}>Mohammed Jawahir</Text>
                <Text color={"#606060"}>@em.jawahir</Text>
            </Flex>
            <Spacer />
            <Button
                backgroundColor="#1d1d1d"
                border={'2px solid white'}
                borderRadius={"10px"}
            >
                <Text color={"white"}>Follow</Text>
            </Button>
        </Flex>
    )
}

export default SugestedAccout