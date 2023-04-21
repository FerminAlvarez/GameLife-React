import Hero from "../components/Hero"
import { Link } from "react-router-dom";
import { AiFillHeart } from 'react-icons/ai';
import { GiLovers } from 'react-icons/gi';
import { IoIosPeople, IoIosPerson } from 'react-icons/io';
import BoardPreview from "../components/BoardPreview";
export default function Home() {
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

            <div className="my-5 text-center max-w-3xl mx-auto my-12">
                <h3 className="text-xl font-bold my-5">EXPLORE THE LAST CONFIGURATIONS</h3>
                <div className="flex justify-center space-x-2">
                    <Link to="/1">
                        <BoardPreview />
                    </Link>

                    <Link to="/2">
                        <BoardPreview />
                    </Link>

                    <Link to="/3">
                        <BoardPreview />
                    </Link>
                </div>
            </div>
        </>

    )
}