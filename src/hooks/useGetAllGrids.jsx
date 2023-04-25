
import { useState, useEffect } from "react";
import { getAllGridsInfo } from "../services/BoardService";
export default function useGetAllGrids() {
    const [isLoading, setIsLoading] = useState(true)
    const [allBoards, setAllBoards] = useState(null)

    useEffect(() => {
        getAllGridsInfo().then((data) => {
            setAllBoards(data.data);
            setIsLoading(false)
        })
    }, [])

    return { allBoards, isLoading }
}