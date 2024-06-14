

import  { useContext } from 'react';
import { CountContext } from './CountContex';
import { useNavigate } from 'react-router-dom';



function Page12() {
   
    const {Count, setCount} = useContext(CountContext);
     const navigate = useNavigate();    
    
    return (
        <div>
            <h1>Welcome to Page 1.2</h1>
            <p>I Have been Clicked : {Count} Times</p>
            <button onClick={()=> (Count>=0 ? setCount(Count+1):null)}>Click me to increase</button>
            <button onClick={()=> (Count>0 ? setCount(Count-1):null)}>Click me to decrease</button>
          
            <button onClick={()=>navigate(-1)}>Go Back</button>
            <button onClick={()=>navigate(-2)}>Go Page 1</button>
            
        </div>
    );
}

export default Page12;