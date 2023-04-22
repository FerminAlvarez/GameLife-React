import BoardPreview from "../components/BoardPreview";
import { useEffect, useState } from 'react';
import { getAllGridsInfo } from "../services/BoardService";
import { Link } from "react-router-dom";

export default function Explore() {
    let [boards, setBoards] = useState(null)
    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAllGridsInfo().then((data) => { setBoards(data.data); setIsLoading(false) })
        return () => { }
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-bold my-5 mx-auto text-center">The Latest 50 Configurations</h2>
            <div className="flex flex-wrap justify-center">
                {!isLoading && boards.map((board) => {
                    return (
                        <div className="m-5">
                            <Link to={"/play/" + board.id}>
                                <BoardPreview title={board.title} description={board.description} avatar={board.profiles.avatar_url} name={board.profiles.full_name} />
                            </Link>
                        </div>
                    )
                })
                }
            </div>

        </div>

    )
}