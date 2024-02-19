import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = ( category ) => {
 
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState( true );

  const getImages = async() => {
    const newImages = await getGifs( category );
    setImages(newImages)
    setIsLoading(false)
  }
  
  useEffect(() => {
    getImages();
  }, [])
  
 
  // useEffect( () => {
  //   getGifs(category)
  //     .then( newImages => setImages(newImages) );

  // }, [ ] ) // Si se dejan las dependencias "[ ]" vacias, significa que este hook solo se va a deisparar la primera vez que se crea y se construye este componente.


  return {
    // images: images,
    images,
    // isLoading: false,
    isLoading
  }

}
