import React from 'react';
import errorGif from '../../assets/404.gif';
import { isRouteErrorResponse,useLocation,useNavigate,useRouteError } from 'react-router-dom';
const ErrorPage = () => {

    const error = useRouteError();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(error);
    
    const searchRoute = 
    Array.from(location.pathname).slice(1).join('')
    

    const errorHandle =()=>{
        if (isRouteErrorResponse(error)) {
            return (
            <div 
            className='w-full h-auto flex flex-col items-center justify-center'
            >
                <h2 
                className='xxs:text-4xl lg:text-6xl text-sky-400 xxs:font-black lg:font-extrabold capitalize'>oops error occurred : <span className='text-sky-500'>{error.status}!</span></h2>
                <h3 className='font-serif font-black xxs:text-2xl lg:text-5xl text-red-400 uppercase'>  
                <span className='text-orange-700 lowercase italic'>  '{searchRoute}' </span> {error.statusText}</h3>
                {error.data?.message && <p>{error.data.message}</p>}
                <button onClick={()=>navigate(-1)} className="btn btn-dash btn-error capitalize hover:text-red-50">return</button>
            </div>
            )
        } else{
            return(
                <div 
                className='w-full h-auto flex flex-col items-center justify-center'
            >
                <h2 
                className='xxs:text-4xl lg:text-6xl text-sky-400 xxs:font-black lg:font-extrabold capitalize'>oops error occurred : <span className='text-sky-500'>{error.status}!</span></h2>

                <button onClick={()=>navigate(-1)} className="btn btn-dash btn-error capitalize hover:text-red-50">return</button>
            </div>
            )
        }
    }
    return (
        <div
        className="w-screen min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-stone-200/5 before:bg-opacity-40 before:-z-10" 
        style={{ backgroundImage: `url(${errorGif})` }}
        >
       {errorHandle()}
        </div>
    );
};

export default ErrorPage;