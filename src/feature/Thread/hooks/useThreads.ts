// import { useDispatch, useSelector } from "react-redux"
// import { RootState } from "../../../store/types/rootStates";


// export function useThread() {
//     const dispatch = useDispatch()
//     const threads = useSelector((state: RootState) => state.threads.threads)

//     return {
//         threads: threads || []
//     }
// }


// Axios
    // const [threads, setThreads] = useState<IThreadCard[]>([]);
    // const [users, setUsers] = useState<any>([]);

    // async function getThreads() {
    //     try {
    //         const response = await API.get("/thread")
    //         setThreads(response.data.data)
    //         setUsers(response.data.data)
    //     } catch (error) {
    //         throw error
    //     }
    // }

    // useEffect(() => {
    //     getThreads().then((data) => console.log(data))
    // }, [])
    // Axios