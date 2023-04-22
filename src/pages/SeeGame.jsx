import { useEffect, useState } from 'react';
import { getBoard } from "../services/BoardService";
import ViewBoard from "../components/ViewBoard";
import { useParams } from "react-router-dom";

export default function SeeGame() {
    let [board, setBoard] = useState(null)
    let [isLoading, setIsLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        getBoard(id).then((data) => { setBoard(data.data[0]); setIsLoading(false); })
        return () => { }
    }, [])

    return (
        <>
            {!isLoading &&
                <ViewBoard initGrid={board.grid} title={board.title} description={board.description} avatar={board.profiles.avatar_url} name={board.profiles.full_name} created_at={board.created_at}/>
            }
        </>
    )
}