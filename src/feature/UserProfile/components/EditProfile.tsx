import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../../../store/types/rootStates'

export default function EditProfile() {
    const user = useSelector((state: RootState) => state.auth)
    return (
        <>
            <form encType='multipart/form-data'>
                <FormControl mb={"20px"}>
                    <FormLabel color={"white"}>Username</FormLabel>
                    <Input id='username' type="text" name="username" value={user.data.username} color={"white"} readOnly />
                    <FormLabel color={"white"}>Fullname</FormLabel>
                    <Input id='full_name' type="text" name="full_name" value={user.data.full_name} color={"white"} readOnly />
                    <FormLabel color={"white"}>Description</FormLabel>
                    <Input id='description' type="text" name="description" value={user.data.description} color={"white"} readOnly />
                    <FormLabel color={"white"}>Change Photo Profile</FormLabel>
                    <Input id='photo_profile' type="file" name="photo_profile" style={{ width: '160px', fontSize: '22px' }} readOnly />
                </FormControl>
            </form>
        </>
    )
}
