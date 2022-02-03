import { useState } from "react";

//====Components
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () =>{

    //const categories = ['one punch', 'Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState(['one punch']);

    /*  const handleAdd = () =>{

        setCategories(cats => ['God Of  War',...categories]);
        console.log(categories);
    } */

    return(

        <>

            <h2>GifExpertApp</h2>

            < AddCategory setCategories={ setCategories } />

            <hr/>

            <ol>

                {
                    categories.map( category => (
                        < GifGrid 
                            key={category}
                            category={ category } 
                        />
                    ))
                }

            </ol>

        </>


    );

}

export default GifExpertApp;