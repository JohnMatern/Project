import { useHistory } from "react-router-dom";
import { Context } from '../utils/Store';
import { useEffect, useContext, useState } from 'react';


const Button = () => {
    const [state, dispatch] = useContext(Context);
    const history = useHistory();
    const klick = () => {
        history.push("/login")
      }
    return (
        <div>
        <button onClick= {klick}>Name</button>
        {state.account}
        </div>
    );
}

export default Button;