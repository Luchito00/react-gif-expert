import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

  const [ categories, setCategories ] = useState([ "Warzone" ])

  // const onAddCategory = () => {
  //   // categories.push("Valorant") En react no se usa
  //   setCategories([ ...categories, "Valorant" ])  // primera forma "Basica" de agregar un valor al arreglo
  //   // setCategories( cat => [ ...cat, "valorant" ])  // segunda forma "Basica" de agregar un valor al arreglo

  // }
  
  const onAddCategory = ( newCategory ) => {
    
    if ( categories.includes(newCategory) ) return;
    setCategories([ newCategory, ...categories ]) 

  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>



      {/* Input */}
      <AddCategory 
        // setCategories={ setCategories } 
        onNewCategory={ (value) => onAddCategory(value) }   // el "on" significa que está emitiendo algo "onChange", "onSubmit", "on" es un evento
      />



      {/* Listado de Gif */}

      {/* <button onClick={ onAddCategory }>Agregar</button> YA NO SE USA */}
      
      {
        categories.map( (category) => (
            <GifGrid 
              key={ category } 
              category={ category } />
          )) 
      }
        

      
          {/* Gif Items */}
    </>
  )
}
