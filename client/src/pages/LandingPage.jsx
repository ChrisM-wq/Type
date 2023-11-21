import TypewriterEffect from "../components/TypewriterEffect";
import FloatingLetters from '../components/FloatingLetters';
import Navbar from '../components/Navbar';
import { Link, Navigate } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
        <Navbar />

        <section className='flex flex-col w-full bg-[#303030] h-[calc(100vh-64px)] items-center justify-around p-20'>
            <div className='flex flex-col items-center z-10 gap-10'>
                <h1 className='text-secondary font-bold text-9xl drop-shadow-lg'>Type.</h1>
                <TypewriterEffect />
            </div>
            <div className=' h-60 flex items-center justify-center gap-28 z-10'>
                <div className='bg-secondary p-8 rounded-tr-3xl rounded-bl-3xl shadow-2xl'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-bold text-4xl text-primary'>Typing Battle</h2>
                        <h5 className='font-semibold text-2xl text-primary'>Create your own game and play with friends!</h5>
                        <div className="flex gap-10">
                        <Link to={'/game/create'} className='w-full py-4 bg-primary rounded-tr-3xl rounded-bl-3xl font-semibold text-2xl text-secondary flex items-center justify-center'>Create Game</Link>
                        <Link to={'/game/join'} className='w-full py-4 bg-primary rounded-tr-3xl rounded-bl-3xl font-semibold text-2xl text-secondary flex items-center justify-center'>Join Game</Link>

                        </div>
                    </div>
                </div>
                {/* <div className='bg-primary  p-8 rounded-tr-3xl rounded-bl-3xl shadow-2xl'>
                <div className='flex flex-col gap-5'>
                        <h2 className='font-bold text-4xl text-secondary'>Typing Practice</h2>
                        <h5 className='font-semibold text-2xl text-secondary'>Master the art of typing on your own.</h5>
                        <button className='w-full py-4 bg-secondary rounded-tr-3xl rounded-bl-3xl font-bold text-2xl text-primary'>Practice</button>
                    </div>
                </div> */}
            </div>


            <div className='fixed z-0 brightness-50 w-full h-full'>
                <FloatingLetters />
            </div>

        </section>

        </>

    )
};

export default LandingPage;