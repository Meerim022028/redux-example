import { useDispatch } from "react-redux";


const CounterControls = () =>{
    const dispatch = useDispatch();
    
    function incrementBy1Callback(){
        dispatch({type: "increment_by_1"});
    }
    function incrementBy10Callback() {
        dispatch({type: "increment_by_10"});
    }
    
    function decreaseBy1Callback() {
        dispatch({type: "decrease_by_1"});
    }
    function multiplicationBy2Callback() {
        dispatch({type: "multiplication_by_2"});
    }
    function divisionBy2Callback() {
        dispatch({type: "division_by_2"});
    }

    function resetBy2Callback() {
        dispatch({type: "reset_by_2"});
    }
    function randomBy2Callback() {
        dispatch({type: "random_by_2"});
    }
    return(
        <div>
            <button onClick={incrementBy1Callback}>+1</button>
            <button  onClick={incrementBy10Callback}>+10</button>
            <button  onClick={decreaseBy1Callback}>-1</button>
            <button  onClick={multiplicationBy2Callback}>*2</button>
            <button  onClick={divisionBy2Callback}>/2</button>

            <button  onClick={resetBy2Callback}>Reset</button>
            <button  onClick={randomBy2Callback}>Random</button>

        </div>
    );
}
export default CounterControls;