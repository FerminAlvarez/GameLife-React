import BoardPreviewGif from "../components/Cards/BoardPreviewGif";
import { Link } from "react-router-dom";
import useGetAllGrids from "../hooks/useGetAllGrids";

export default function Explore() {
    let  { allBoards, isLoading } = useGetAllGrids()

    return (
        <div>
            <h2 className="text-2xl font-bold my-5 mx-auto text-center">The Latest 50 Configurations</h2>
            <div className="flex flex-wrap justify-center">
                {!isLoading && allBoards.map((board) => {
                    return (
                        <div className="m-5">
                            <Link to={"/play/" + board.id}>
                                <BoardPreviewGif title={board.title} description={board.description} avatar={board.profiles.avatar_url} name={board.profiles.full_name} />
                            </Link>
                        </div>
                    )
                })
                }
            </div>

        </div>

    )
}