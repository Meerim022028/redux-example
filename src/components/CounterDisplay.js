import { useSelector } from "react-redux";

const CounterDisplay = () => {
    const number = useSelector(store => store.number);
  
    return (
        <div>{number}</div>
    );
}
export default CounterDisplay;