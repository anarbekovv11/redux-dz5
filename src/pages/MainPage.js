import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, clearAction } from "./../redux/action";
import Todo from "../components/Todo";

const MainPage = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const { result, num } = useSelector((state) => state.MainReducer);

    const add = () => {
        dispatch(addAction(input));
        setInput("");
    };
    const clear = () => {
        dispatch(clearAction());
        setInput("");
    };

    return (
        <div>
            <input
                className="main-input"
                placeholder="Введите число"
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <div>
                <button className="add-btn" onClick={add}>ADD</button>
                <button className="clear-btn" onClick={clear}>CLEAR</button>
            </div>
            <ul className="ul-list">
                {result.map((item, index) => (
                    <Todo item={item} key={index} />
                ))}
                <li className="ul-list">{num}</li>
            </ul>
        </div>
    );
};

export default MainPage;

