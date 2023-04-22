import Hero from "../components/Hero"
import { Link } from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai';
import { GiLovers } from 'react-icons/gi';
import { IoIosPeople, IoIosPerson } from 'react-icons/io';
import BoardPreviewHome from "../components/BoardPreviewHome";
import { useEffect, useState } from 'react';
import { getLastGridsInfo } from "../services/BoardService";
export default function Home() {
    let [isLoading, setIsLoading] = useState(true)
    let [boardsInfo, setBoardsInfo] = useState(null)

    useEffect(() => {
        getLastGridsInfo().then((data) => { setBoardsInfo(data.data); setIsLoading(false) })
        return () => { }
    }, [])
    return (
        <>
            <Hero />
            <div className="text-center max-w-3xl mx-auto my-12">
                <h2 className="text-2xl font-bold my-5">ABOUT GAME</h2>
                <p className=" align-center ">The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician <span className="font-bold">John Horton Conway</span> in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves.</p>
                <div className="max-w-4xl">
                    <h3 className="text-xl font-bold mt-12">RULES</h3>
                    <div className="flex space-x-10">
                        <div className="card w-96 bg-base-100 text-center">
                            <div className="card-body">
                                <h2 className="card-title mx-auto">Underpopulation <IoIosPerson /> </h2>
                                <p>Any live cell with fewer than two live neighbours dies</p>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 text-center">
                            <div className="card-body text-center">
                                <h2 className="card-title mx-auto">Reproduction <GiLovers /> </h2>
                                <p>Any dead cell with exactly three live neighbours becomes a live cell</p>
                            </div>
                        </div>

                        <div className="card w-96 bg-base-100 text-center">
                            <div className="card-body">
                                <h2 className="card-title mx-auto">Overpopulation <IoIosPeople /> </h2>
                                <p>Any live cell with more than three live neighbours dies</p>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 text-center mb-5">
                        <div className="card-body text-center">
                            <h2 className="card-title mx-auto">Just live
                                <AiFillHeart /></h2>
                            <p>Any live cell with two or three live neighbours lives on to the next generation</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="my-5 text-center max-w-3xl mx-auto my-12 overflow">
                <h3 className="text-xl font-bold my-5">EXPLORE THE LAST CONFIGURATIONS</h3>
                <div className="flex justify-center space-x-2">

                    {!isLoading &&
                        <>
                            <Link to={"/play/"+boardsInfo[0].id}>
                                <BoardPreviewHome title={boardsInfo[0].title} description={boardsInfo[0].description} avatar={boardsInfo[0].profiles.avatar_url} name={boardsInfo[0].profiles.full_name} />
                            </Link>

                            <Link to={"/play/"+boardsInfo[1].id}>
                                <BoardPreviewHome title={boardsInfo[1].title} description={boardsInfo[1].description} avatar={boardsInfo[1].profiles.avatar_url} name={boardsInfo[1].profiles.full_name} />
                            </Link>

                            <Link to={"/play/"+boardsInfo[2].id}>
                                <BoardPreviewHome title={boardsInfo[2].title} description={boardsInfo[2].description} avatar={boardsInfo[2].profiles.avatar_url} name={boardsInfo[2].profiles.full_name} />
                            </Link>
                        </>
                    }

                </div>
                *The animations are not from the generations.
            </div>
        </>

    )
}