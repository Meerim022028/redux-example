import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const ColorSliderControls = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const dispatch = useDispatch();

    function changeColor() {
        dispatch({ type: "set_color", color: `rgb(${red}, ${green}, ${blue})` });
    }

    function changeRedCallback({ target }) {
        setRed(+target.value);
        changeColor();
    }

    function changeGreenCallback({ target }) {
        setGreen(+target.value);
        changeColor();
    }

    function changeBlueCallback({ target }) {
        setBlue(+target.value);
        changeColor();
    }

    return (
        <div>
            <div>
                <input type="range" value={red} min={0} max={225} onChange={changeRedCallback} />
            </div>
            <div>
                <input type="range" value={green} min={0} max={225} onChange={changeGreenCallback} />
            </div>
            <div>
                <input type="range" value={blue} min={0} max={225} onChange={changeBlueCallback} />
            </div>
        </div>
    )


}


export default ColorSliderControls;