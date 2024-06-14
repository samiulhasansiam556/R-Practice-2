
import Nav from '../Navbar/Nav';
import { Link } from 'react-router-dom';
import { useContext} from 'react';
import { CountContext } from './CountContex';


function Page1() {

         const {Count, setCount} = useContext(CountContext);
   
    return (
        <div>

            <Nav/>
            
            <h1>Welcome to page1</h1>
            <p>I Have been Clicked : {Count} Times</p>
            
             <button onClick={()=>{if(Count>=0) setCount(Count+1)}}> Click Me for increase</button>
             <button onClick={()=>{if(Count>0) setCount(Count-1)}}> Click Me for decrease</button>

             <button><Link to="/Page11">I am Page11</Link></button>
            


        </div>
    );
}

export default Page1;