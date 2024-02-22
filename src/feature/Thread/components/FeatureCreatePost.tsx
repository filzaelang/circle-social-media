import { Button, Text, Textarea, Avatar, Input, Image } from '@chakra-ui/react'
import { Grid, GridItem } from "@chakra-ui/react"
import { useState, ChangeEvent } from 'react';
import { IThreadPost } from '../../../interface/ThreadInterface';
import axios, { AxiosError } from "axios";
import { API } from '../../../libs/api';

//components
import { LuImagePlus } from "react-icons/lu";

function FeatureCreatePost() {
    // const [value, setValue] = useState('')
    // const [selectedImage, setSelectedImage] = useState<File | null>(null);

    // const [inputData, setInputData] = useState({
    //     value: '',
    //     selectedImage: null as File | null,
    // });

    const [data, setData] = useState<IThreadPost>({
        content: "",
        image: ""
    })

    async function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    async function handlePostThread() {
        try {
            const response = await API.post("/thread", data)
            console.log(response)

        } catch (error) {
            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError<{ error: string }>;
                const errorMessage = axiosError.response?.data?.error;
                alert(errorMessage)
                throw axiosError;
            } else {
                alert("An unexpected error occurred");
                throw error;
            }
        }
    }

    // async function handlePost() {
    //     try {

    //     } catch (error) {
    //         if (axios.isAxiosError(error)) {
    //             const axiosError = error as AxiosError<{ error: string }>;
    //             const errorMessage = axiosError.response?.data?.error;
    //             alert(errorMessage)
    //             throw axiosError;
    //         } else {
    //             alert("An unexpected error occurred");
    //             throw error;
    //         }
    //     }
    // }


    // const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    //     let inputValue = event.target.value
    //     setValue(inputValue)
    // }

    // const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    //     const files = event.target.files;

    //     if (files && files.length > 0) {
    //         const file = files[0];

    //         // Lakukan sesuatu dengan file, seperti mengirimnya ke server atau menampilkan di aplikasi
    //         setSelectedImage(file);
    //     }
    // }

    return (
        <>
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
                    {/* <Textarea
                        value={value}
                        onChange={handleInputChange}
                        placeholder='What is happening ?!'
                        rows={1}
                        color={"white"}
                        variant='unstyled'
                    /> */}
                    <Input
                        placeholder='What is happening ?!'
                        name='content'
                        id='content'
                        color={"white"}
                        onChange={handleChange}
                    />

                </GridItem>

                {/* Image */}
                <GridItem colSpan={{ base: 1, lg: 1, xl: 1 }} position="relative" zIndex={1}>
                    {/* <label htmlFor="upload-input">
                        <LuImagePlus color='04a51e' fontSize={40} />
                    </label>
                    <Input
                        id="upload-input"
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                    /> */}
                    <Input
                        name='image'
                        id='image'
                        color={"white"}
                        onChange={handleChange}
                    />
                </GridItem>

                {/* Button Post */}
                <GridItem colSpan={{ base: 1, lg: 1, xl: 1 }} position="relative" zIndex={2}>
                    <Button
                        colorScheme="orange"
                        padding="20px"
                        backgroundColor="#04a51e"
                        borderRadius={100}
                        onClick={handlePostThread}
                    >
                        <Text>Post</Text>
                    </Button>
                </GridItem>
            </Grid >
            {/* {selectedImage && (
                <Image
                    src={URL.createObjectURL(selectedImage)}
                    alt="Selected"
                    style={{ maxWidth: '100%', maxHeight: '100%', marginTop: '10px' }}
                />
            )} */}
        </>
    )
}

export default FeatureCreatePost