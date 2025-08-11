import { useEffect, useState } from "react";

 const EffectScreen = () => {
    const [number, setNumber] = useState(0);
    const [renderNumber, setRenderNumber] = useState(0);
    
    useEffect(()=> {
        document.title = 'Little Lemon' + number;
        console.log("i was run");
    }, [number])
    if(renderNumber === 6 ){
        setNumber(number + 1);
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