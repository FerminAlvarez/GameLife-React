import { Link } from "react-router-dom"
import imgUrl from '/src/assets/game-of-life-loop.gif'

export default function Hero() {
    return (
        <section>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${imgUrl})` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center ">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-5xl font-extrabold text-white uppercase">Play Conway's Game of Life and Share Your Creations</h1>
                        <p className="mb-5 text-white">Experience the mesmerizing world of life simulation with Conway's Game of Life. Play now and witness the evolution of captivating patterns and shapes. Join the Game of Life community and discover endless possibilities for creativity and innovation.</p>
                        <Link to="/play" className="btn btn-primary mx-5">Play Game</Link>
                        <Link to="/explore" className="btn btn-primary mx-5">Explore Creations</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}