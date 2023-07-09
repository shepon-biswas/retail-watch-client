import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <div className='w-11/12 md:w-10/12 mx-auto flex justify-center items-center h-screen'>
                    <div className='text-center'>
                        <img src="https://i.ibb.co/r4sMJSC/507f015a7efd81cec270faf9c4f1aabd.gif" alt="Error Image" />
                        <h1 className='text-xl font-bold text-center text-red-700'>Oppss! Something Went Wrong...</h1>
                        <Link to={'/'}>
                            <button className='px-4 py-2 text-white bg-[#9336B4] rounded-lg font-semibold my-8 hover:bg-[#db79ff] flex items-center w-full text-center justify-center'>
                            <FaArrowLeft className='me-2'></FaArrowLeft>
                                Go Back HomePage
                            </button>
                            </Link>
                    </div>
            </div>
        </>
    );
};

export default ErrorPage;