import {useDispatch} from "react-redux";

const ColorSimpleControls = () => {
    const dispatch = useDispatch();

    function changeColorCallback({ target }) {
        dispatch ({ type: "change_color", color: target.value });
    }
    return(
        <div>
            <h2>Simple controls</h2>
            <input type="color" onClick={changeColorCallback} />
        </div>
    );
}
export default ColorSimpleControls;