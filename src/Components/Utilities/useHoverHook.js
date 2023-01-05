import { useState } from "react";


const useHoverHook = (element) =>{
    const [hoveredState, setHoveredState] = useState(false);

    const updateHoverIn = ()=>{
        setHoveredState(true)
    }
    const updateHoverOut = ()=>{
        setHoveredState(false)
    }
    if(element){
        element.addEventListener('mouseover', updateHoverIn)
        element.addEventListener('mouseout', updateHoverOut)
    }

    return hoveredState;
}

export default useHoverHook;