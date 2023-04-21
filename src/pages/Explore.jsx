import BoardPreview from "../components/BoardPreview";
import { useEffect, useState } from 'react';
import { getAllGrids } from "../services/BoardService";

export default function Explore() {
    let [boards, setBoards] = useState(null)
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllGrids().then((data) => { setBoards(data.data); setIsLoading(false) })
        return () => { }
    }, [])

    return (
        <div className="flex flex-wrap justify-center">
            {!isLoading && boards.map((board) => {
                return (
                    <div className="m-5">
                        <BoardPreview title={board.title} description ={board.description}/>
                    </div>
                )

            })
            }
        </div>

    )
}