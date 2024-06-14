

import { Link } from 'react-router-dom';
import  { useContext } from 'react';
import { CountContext } from './CountContex';
import { useNavigate } from 'react-router-dom';


function Page11() {

    const {Count, setCount} = useContext(CountContext);

        const increase = ()=>{
            if(Count>=0) setCount(Count+1)
        }

        const decrease = ()=>{
            if(Count>0) setCount(Count-1)
        }
    
        const navigate = useNavigate();


    return (


        <div>
               <h1>Welcome to page1.1</h1>
               <p>I Have been Clicked : {Count} Times</p>
               <button onClick={increase}>Click me to increase</button>
               <button onClick={decrease}>Click me to ideccrease</button>

               <button><Link to="/Page12">I am Page12</Link></button>

               <button onClick={()=>navigate(-1)}>Go Back</button>
               <button onClick={()=>navigate(1)}>Go Forward</button>

    
        </div>
    );
}

export default Page11;