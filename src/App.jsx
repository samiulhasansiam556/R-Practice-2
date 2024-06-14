
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Page2/Page2';
import Home from './Components/Home/Home';
import Page11 from './Components/Page1/Page11';
import Page12 from './Components/Page1/Page12';
import { CountProvider } from './Components/Page1/CountContex'; 


function App() {
 
  return (
    <CountProvider>
        <BrowserRouter>
          <Routes>
             <Route path="/" element = {<Home/>}/>
             <Route path="/Page1" element = {<Page1/>}/>
             <Route path="/Page2" element = {<Page2 />}/>
             <Route path="/Page11" element = {<Page11 />}/>
             <Route path="/Page12" element = {<Page12 />}/>
          </Routes>
        </BrowserRouter>
    </CountProvider>
  );
}

export default App;
