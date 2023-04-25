import Hero from "../components/Hero/Hero"
import { Link } from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai';
import { GiLovers } from 'react-icons/gi';
import { IoIosPeople, IoIosPerson } from 'react-icons/io';
import BoardPreview from "../components/Cards/BoardPreview";
import gif1 from '/src/assets/game-of-life-1.gif'
import gif2 from '/src/assets/game-of-life-2.gif'
import gif3 from '/src/assets/game-of-life-3.gif'
import useGetLastGrid from "../hooks/useGetLastGrid";

export default function Home() {
    const { lastBoards, isLoading } = useGetLastGrid();

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
                            <Link to={"/play/" + lastBoards[0].id}>
                                <BoardPreview title={lastBoards[0].title} description={lastBoards[0].description} avatar={lastBoards[0].profiles.avatar_url} name={lastBoards[0].profiles.full_name} gif={gif1} />
                            </Link>

                            <Link to={"/play/" + lastBoards[1].id}>
                                <BoardPreview title={lastBoards[1].title} description={lastBoards[1].description} avatar={lastBoards[1].profiles.avatar_url} name={lastBoards[1].profiles.full_name} gif={gif2} />
                            </Link>

                            <Link to={"/play/" + lastBoards[2].id}>
                                <BoardPreview title={lastBoards[2].title} description={lastBoards[2].description} avatar={lastBoards[2].profiles.avatar_url} name={lastBoards[2].profiles.full_name} gif={gif3} />
                            </Link>
                        </>
                    }

                </div>
                *The animations are not from the generations.
            </div>
        </>

    )
}