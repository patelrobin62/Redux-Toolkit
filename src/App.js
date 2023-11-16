import { useEffect } from "react";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import {useDispatch,useSelector} from 'react-redux'
import { calculateTotal } from "./features/cartslice";

function App() {
  const dispatch=useDispatch();
  const {cartItems,amount}=useSelector((store)=>store.cart)
  useEffect(() => {
     dispatch(calculateTotal())
  }, [cartItems,amount]);
  return <>
    <Navbar/>
    <CartContainer/>
  </>;
}
export default App;
