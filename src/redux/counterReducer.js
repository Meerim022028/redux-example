const intialState = {
    number: 0,
    color: "#000000"
}
const counterReducer = (state = intialState, action) => {
    const newState = { ...state };

    switch (action.type) {
        case "change_color":
            newState.color = action.color;
            return newState;
          
        case "set_color":
            newState.color = action.color;    
            return newState;
           
        case "increment_by_1":
            newState.number++;
            return newState;

        case "increment_by_10": 
            newState.number += 10;
            return newState;

        case "decrease_by_1":
            newState.number--;
            return newState;

        case "multiplication_by_2":
            newState.number *= 2;
            return newState;

        case "division_by_2":
            newState.number /= 2;
            return newState;

        case "reset_by_2":
            newState.number = 0;
            return newState;

        case "random_by_2":
            newState.number = Math.floor(Math.random() * 100) + 1;
            return newState;

        default:
            break;
    }
    return state;
}
export default counterReducer;