import { useEffect, useState } from "react";

 const EffectScreen = () => {
    //the whole premise is that something has to cause a rerender for useffect to
    //achieve its purpose  
    const [number, setNumber] = useState(0);
    const [renderNumber, setRenderNumber] = useState(0);
    const version = 0;
    useEffect(()=> {
        document.title = 'Little Lemon' + version;
        console.log("i was run");
    }, [version])

    //checks if renderNumber satisfies this
    if(renderNumber === 6 ){
        setNumber(number + 1);
        //changes the render number to prevent condition from running anymore
        setRenderNumber(renderNumber + 1);
    }
    return(
        <div>
            <button style={{fontSize: "6px"}} onClick={() => setNumber(version + 1)}>
<h1>UseEffect Screen</h1>
</button>
   <button style={{fontSize: "6px"}} onClick={() => setRenderNumber(renderNumber + 1)}>
<h1>Cause simple rerender</h1>
</button>
        </div>
    )
}

export default EffectScreen;