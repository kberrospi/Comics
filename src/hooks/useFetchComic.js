
import { useState, useEffect } from "react"


export const useFetchComic = ( url ) => {

    const [state, setstate] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        setstate({ data:null, loading: true, error:null });
        
        fetch( url )
        .then( resp => resp.json() )
        .then( data => {

            setstate({
                loading: false,
                error: null,
                data
            })

        })
        
    }, [ url ])
   

    return state; 
}