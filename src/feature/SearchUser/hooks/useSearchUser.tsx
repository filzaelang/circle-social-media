import { useState } from 'react'
import { setAuthTokenLogin } from '../../../libs/api';
import { API } from '../../../libs/api';

export default function useSearchUser() {

    const [searchQuery, setSearchQuery] = useState<any>("");
    const [searchResults, setSearchResults] = useState([]);
    setAuthTokenLogin(localStorage.token)

    async function handleSearch(query: any) {
        try {
            const response = await API.post(`/user`, { username: query });
            setSearchResults(response.data)
        } catch (error) {
            console.error("Error searching users:", error);
        }
    };

    const handleChange = (e: any) => {
        const query = e.target.value;
        setSearchQuery(query)
        handleSearch(query)
    };
    return {
        handleChange, setSearchQuery, searchQuery, setSearchResults, searchResults
    }
}
