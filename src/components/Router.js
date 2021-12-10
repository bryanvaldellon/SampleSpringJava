import Home from './Home';
import  {Routes, Route, BrowserRouter} from 'react-router-dom';
import PageNotFound from './PageNotFound';
import Employees from './Employees';
import AddEmployee from './AddEmployee';

const Router = () =>{
    return(
        <div>
            <BrowserRouter>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/employees" element={<Employees/>}/>
                <Route exact path="/add" element={<AddEmployee/>}/>
                <Route exact path="/employees/edit/:id" element={<AddEmployee/>}/>
                <Route exact path="*" element={<PageNotFound/>}/>
                </Routes>
            </BrowserRouter>
        </div>
        
    )
}
export default Router;