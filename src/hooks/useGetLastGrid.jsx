
import { useState, useEffect } from "react";
import { getLastGridsInfo } from "../services/BoardService";
export default function useGetLastGrid() {
    let [isLoading, setIsLoading] = useState(true)
    let [lastBoards, setLastBoards] = useState(null)

    useEffect(() => {
        getLastGridsInfo().then((data) => { 
            setLastBoards(data.data); 
            setIsLoading(false) })
    }, [])

    return { lastBoards, isLoading }
}