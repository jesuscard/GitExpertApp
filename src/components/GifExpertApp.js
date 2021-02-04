 import React, { useState } from 'react';
import { AddCategory } from './AddCategory';

 const GifExpertApp = ({
    }) =>{

    const [categories, setCategories] = useState(['Onu Punch', 'Samurai X', ' Dragon Ball'])

    // const handleAdd = () =>{

    //     const newSerie = 'Friend';
    //     //setCategories([...categories, newSerie])
    //     setCategories( cate => [...cate, newSerie])

    // } 

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( category => {
                        return <li key={ category }> { category } </li>
                    })
                }
            </ol>
        </>
        
    );
 }

  export default GifExpertApp;