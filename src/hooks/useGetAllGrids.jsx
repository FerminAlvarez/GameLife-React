
import { useState, useEffect } from "react";
import { getAllGridsInfo } from "../services/BoardService";
export default function useGetAllGrids() {
    let [isLoading, setIsLoading] = useState(true)
    let [allBoards, setAllBoards] = useState(null)

    useEffect(() => {
        getAllGridsInfo().then((data) => {
            setAllBoards(data.data);
            setIsLoading(false)
        })
    }, [])

    return { allBoards, isLoading }
}