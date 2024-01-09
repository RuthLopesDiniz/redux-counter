//componente responsável por exibir o contador na tela
import { useSelector, useDispatch } from "react-redux";
import { incrementCounter } from "../store/actions";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    return(
        <div>
            <p>{counter}</p>

            <button onClick={()=> dispatch(incrementCounter())}>
                Add one</button>
        </div>
    )
}

export default Counter;