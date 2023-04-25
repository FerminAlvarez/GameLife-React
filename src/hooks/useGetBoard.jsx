
import { useState, useEffect } from "react";
import { getBoard } from "../services/BoardService";
export default function useGetBoard(id) {
    let [isLoading, setIsLoading] = useState(true)
    let [error, setError] = useState(false)
    let [board, setBoard] = useState(null)

    useEffect(() => {
        getBoard(id).then((response) => {
            if (response.data.length > 0) {
                setBoard(response.data[0]);
                setIsLoading(false);
            } else setError(true)
    })
    }, [])

    return { isLoading, error, board }
}