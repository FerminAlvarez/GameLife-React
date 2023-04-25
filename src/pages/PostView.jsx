import PostBoardCard from "../components/Cards/PostBoardCard";
import { useParams } from "react-router-dom";
import useGetBoard from '../hooks/useGetBoard';
import AlertError from '../components/Alerts/AlertError';

export default function PostView() {
    const { id } = useParams()
    let { isLoading, error, board } = useGetBoard(id)
    const errorMessage = "An error occurred while trying to get the board."

    return (
        <>
            {error &&
                <AlertError errorMessage={errorMessage} />
            }
            {!isLoading &&
                <PostBoardCard initGrid={board.grid} title={board.title} description={board.description} avatar={board.profiles.avatar_url} name={board.profiles.full_name} created_at={board.created_at} />
            }
        </>
    )
}