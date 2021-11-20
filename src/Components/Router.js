import{ BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import Resume from './Resume';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

 
function Router(){
    return(
        <BrowserRouter>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Resume" component={Resume}/>
        <Route exact path="/Skills" component={Skills}/>
        <Route exact path="/Contact" component={Contact}/>
        <Footer/>
        
        
        </BrowserRouter>
    )
}
export default Router;