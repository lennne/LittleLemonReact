import { useEffect, useState } from "react";

 const EffectScreen = () => {
    //the whole premise is that something has to cause a rerender for useffect to
    //achieve its purpose  
    const [number, setNumber] = useState(0);
    const [renderNumber, setRenderNumber] = useState(0);
    const version = 0;
    //when nothiing is passed within the array, react has nothiing to track 
    //therefore it is run only once and does not rerender forever
    useEffect(()=> {
        document.title = 'Little Lemon' + number + 1;
    }, []);


    //in a way, you can provide variables to be tracked for specific values
    //something along the lines of execute this useeffect function(show menu) when this
    //variable changes
    useEffect(()=> {
        alert("i run cause i'm default behaviour")
    })

    //checks if renderNumber satisfies this
    if(renderNumber === 6 ){
        setNumber(number + 1);
        //changes the render number to prevent condition from running anymore
        setRenderNumber(renderNumber + 1);
    }
    return(
        <div>
            <button style={{fontSize: "6px"}} onClick={() => setNumber(number + 1)}>
<h1>UseEffect Screen</h1>
</button>
   <button style={{fontSize: "6px"}} onClick={() => setRenderNumber(renderNumber + 1)}>
<h1>Cause simple rerender</h1>
</button>
        </div>
    )
}

export default EffectScreen;