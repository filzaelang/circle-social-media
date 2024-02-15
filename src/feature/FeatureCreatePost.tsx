import { Button, Text, Image, Textarea, Avatar } from '@chakra-ui/react'
import { Grid, GridItem } from "@chakra-ui/react"
import { useState, ChangeEvent } from 'react';

//components
import { LuImagePlus } from "react-icons/lu";

function FeatureCreatePost() {
    const [value, setValue] = useState('')

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let inputValue = e.target.value
        setValue(inputValue)
    }

    return (
        <Grid templateColumns="repeat(12, 1fr)" bg="#1d1d1d" marginBottom={"10px"} alignItems={"center"}>
            {/* image */}

            <GridItem colSpan={{ base: 1, lg: 1, xl: 1 }} padding="0" position="relative" zIndex={1}>
                <Avatar
                    size={{ base: "sm", md: "md", lg: "md", xl: "md", xxl: "md" }}
                    src='https://bit.ly/dan-abramov'
                    name='Dan Abramov'
                />
            </GridItem>

            {/* Input */}
            <GridItem colSpan={{ base: 9, lg: 9, xl: 9 }} position="relative" zIndex={2}>
                <Textarea
                    value={value}
                    onChange={handleInputChange}
                    placeholder='What is happening ?!'
                    rows={1}
                    color={"white"}
                    variant='unstyled'
                />
            </GridItem>

            {/* Image */}
            <GridItem colSpan={{ base: 1, lg: 1, xl: 1 }} position="relative" zIndex={1}>
                <LuImagePlus color='04a51e' fontSize={40} />
            </GridItem>

            {/* Button Post */}
            <GridItem colSpan={{ base: 1, lg: 1, xl: 1 }} position="relative" zIndex={2}>
                <Button
                    colorScheme="orange"
                    padding="20px"
                    backgroundColor="#04a51e"
                    borderRadius={100}
                >
                    <Text>Post</Text>
                </Button>
            </GridItem>
        </Grid >
    )
}

export default FeatureCreatePost