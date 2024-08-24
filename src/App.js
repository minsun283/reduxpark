
import './App.css';
import { useDispatch , useSelector} from 'react-redux';

function App() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()

  const plus =()=>{
    dispatch({type:"INCREMENT"}) //액션을 던져줌. 액션은 객체

  }

  const plusFive =()=>{
    dispatch({type:"INCREMENTFIVE", payload:{num:5}}) 

  }
  const minus =()=>{
    dispatch({type:"DESCREASE"})
  }

  const minusFive=()=>{
    dispatch({type:"DESCREASEFIVE", payload:{num:-5}})
  }


  return (

    
    <div className='count-box'>
      
      <h1>{count}</h1>
   <button onClick={plus}>클릭하면 1증가</button>
   <button className='button-color' onClick={plusFive}>클릭하면 5증가</button>
   <button onClick={minus}>클릭하면 1감소</button>
   <button className='button-color' onClick={minusFive}>클릭하면 5감소</button>
    </div>
  );
}

export default App;
