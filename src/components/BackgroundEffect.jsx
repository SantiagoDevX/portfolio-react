import { useEffect } from "react";

function BackgroundEffect (){

  const handlemouseMove = (event) => {
    const mouseX = event.x
    const mouseY = event.y

    document.body.style.background= `radial-gradient(circle at ${mouseX}px ${mouseY}px, var(--secondary-color-hover), var(--primary-color) 100%)`

  }

useEffect(()=>{
  document.body.addEventListener("mousemove", handlemouseMove)

}, [])
}


export default BackgroundEffect
































/*
*/