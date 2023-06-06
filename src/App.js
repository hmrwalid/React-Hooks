import './App.css';
import UseState from './Hooks/UseState';
import MapLefleat from './Map/MapLefleat';
import { logIn, logOut } from './Redux/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
const isConnected= useSelector(state=>{
  return state.auth.isConnected
})
console.log("isConnected :" , isConnected)
if(isConnected){
  return (
    <div className="App">
      <h1>React Hooks</h1>
       <button onClick={()=> dispatch(logOut())}>logout</button>
      <UseState/>
      <MapLefleat/>
    </div>
  );
}
  return (
    <div className="App">
    <h1>React Hooks</h1>
     <button onClick={()=> dispatch(logIn())}>login</button>
   
  </div>
  )

}

export default App;
