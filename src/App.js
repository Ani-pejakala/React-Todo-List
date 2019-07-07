import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {increment, decrement} from './action'
function App() {
  const counter = useSelector(state => state.counter);
   const isLogged=useSelector(state=>state.isLogged) 
   const dispatch=useDispatch();
   return (
    <div className="App">
      <h1>Hello {counter}</h1>
      <button onClick={()=>dispatch(increment(5))}>+</button>
      <button onClick={()=>dispatch(decrement())}>-</button>


      {isLogged ? <h3>Valuable info</h3>:''}
    </div>
  );
}

export default App;
