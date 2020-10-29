import React, { useState } from 'react';
import '../assets/style.css';
import { FaStar } from 'react-icons/fa';

export const StarRating = ( ) => {

    const [rating, setRating] = useState( null);
    const [hover, setHover] = useState();
    
    return (
        <div >
            <div className='stars'> 
            {[ ...Array(5)].map( (star, i) => {
                const ratingValue = i+1;
                

                return (
                        <label className='stars' key={ i }>
                            <input 
                                type='radio' 
                                name= 'rating' 
                                value={ ratingValue } 
                                onClick = { () => setRating( ratingValue ) }
                            />
                            <FaStar 
                                className='star' 
                                size= { 40 } 
                                color={ ratingValue <= (hover || rating) ? '#FFC107' : '#E4E5E9' }
                                onMouseEnter = { () => setHover( ratingValue ) }
                                onMouseLeave = { () => setHover(null) }
                            />
                            
                        </label>
                ) 
                    
            } )} 
           </div>
            <div className='coment-rating'>
                {  rating === 1 ? <span> I just hate it 😠 </span>  : '' }
                {  rating === 2 ? <span> I don't like it 😒 </span>  : '' }
                {  rating === 3 ? <span> It is awesome 😄 </span>  : '' }
                {  rating === 4 ? <span> I just like it 😎 </span>  : '' }
                {  rating === 5 ? <span> I just love it 😍 </span>  : '' }
            </div>
        
        </div>
    )
}
