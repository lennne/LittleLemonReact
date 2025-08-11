import { useReducer } from "react";

const reducer = (state: {money: number}, action: {type: string} ) => {
    if (action.type === "buy ingredients") return {money: state.money  - 10 }
    if (action.type === "sell_a_meal") return {money: state.money + 10 } 
    if (action.type === "celebrity_visit") return {money: state.money + 5000 }
    return state;
}

const ReducerScreen = () => {
    const initialState = { money: 100 };
    const [state, dispatch] = useReducer(reducer, initialState);
    return ( 
        <div>
            <h1>Wallet: {state.money}</h1>
            <button onClick={() => dispatch({type: "buy ingredients"})}>Shopping for veggies</button>
            <button onClick={() => dispatch({type: "sell_a_meal"})}>Sell a meal to a customer</button>
            <button onClick={() => dispatch({type: "celebrity_visit"})}>Celebrity visit</button>
        </div>
     );
}
 
export default ReducerScreen;