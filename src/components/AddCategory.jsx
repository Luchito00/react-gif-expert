import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [ inputValue, setInputValue ] = useState("")

  // Primera manera de usar el event.target.value
  // const onInputChange = (event) => {
  //   console.log(event.target.value)
  //   setInputValue( event.target.value )
  // }

  // Segunda manera de usar el event.target.value
  const onInputChange = ({ target }) => {
    setInputValue( target.value )
  }


  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return; // trim borra los espacios de adelante y de atras

    // setCategories( categories => [ ...categories, inputValue ])
    onNewCategory( inputValue.trim() )
    setInputValue("");
  }


  return (
    // <form onSubmit={ (event) => onSubmit(event) }>
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        // onChange={ (event) => onInputChange(event) } // Primera manera
        onChange={ onInputChange }  // Segunda manera
      />
    </form>
  )
}
