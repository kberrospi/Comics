import React, {  useState } from 'react';
import '../assets/style.css';
import { getRandomInt } from '../helpers/getRandom';
import { useFetchComic } from '../hooks/useFetchComic';
import { StarRating } from './StarRating';



export const ComicScreen = () => {
    
    const [num, setNum] = useState( getRandomInt(0, 2377) ); 
    const { loading, data } = useFetchComic( `http://cors-anywhere.herokuapp.com/http://xkcd.com/${ num }/info.0.json` )
    const { title, img } = !!data && data

    return (
        <>   
            <div className='container'>
                <div className='comic'>
                { loading 
                    ? 
                    <div className='loading'>
                        <p className="animate__animated animate__flash"> Loading...</p>
                    </div>  
                    : 
                    <div className='animate__slow animate__animated animate__fadeIn'>
                        <div className='comic-title'>
                            <h1> { title } </h1>
                        </div>
                        <div className='comic-img'>
                            <img  src={ img } alt={ title } />
                        </div>
                        <div className='comic-rating'>
                            <StarRating  /> 
                        </div>
                        <div className='other-comic' >
                            <button className='btn btn-comic'onClick={ () => setNum( getRandomInt(0, 2377) ) } > Other Comic </button>
                        </div>
                    </div>
                    }
                </div>
            </div>  
        </>
    )
}
