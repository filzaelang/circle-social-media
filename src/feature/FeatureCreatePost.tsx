import { Input, Button, Text, Image } from '@chakra-ui/react'
import { Grid, GridItem } from "@chakra-ui/react"

//components
import { LuImagePlus } from "react-icons/lu";

function FeatureCreatePost() {
    return (
        <Grid templateColumns="repeat(12, 1fr)" bg="#1d1d1d" marginBottom={"10px"}>
            {/* image */}
            <GridItem colSpan={1} padding="0" position="relative" zIndex={1}>
                <Image
                    borderRadius='full'
                    boxSize='45px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                    bottom={"30"}
                    left={"5"}
                />
            </GridItem>

            {/* Input */}
            <GridItem colSpan={9} position="relative" zIndex={2}>
                <Input
                    placeholder='What is happening ?!'
                    color={"white"}
                    border="none"  // Menghilangkan garis
                    _focus={{ border: 'none' }}  // Menghilangkan garis saat dalam keadaan fokus 
                />
            </GridItem>

            {/* Image */}
            <GridItem colSpan={1} position="relative" zIndex={1}>
                <LuImagePlus color='04a51e' fontSize={40} />
            </GridItem>

            {/* Button Post */}
            <GridItem colSpan={1} position="relative" zIndex={2}>
                <Button
                    colorScheme="orange"
                    padding="20px"
                    backgroundColor="#04a51e"
                >
                    <Text>Post</Text>
                </Button>
            </GridItem>
        </Grid >
    )
}

export default FeatureCreatePost