import {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {
  
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        
        e.preventDefault();
        
        if(inputValue.trim().length > 2){
            setCategories(categorias => [inputValue,...categorias] );
            setInputValue('');
        }

    }

    return(

        <form onSubmit={ (e) => handleSubmit(e)}>
            <input
                type='text'
                value={inputValue}
                placeholder='Inserta busqueda'
                onChange={ (e)=> handleInputChange(e)  }
            />
        </form>

  );
};

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired

}
