import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
     <Router>
     <div className="App">
       <Navbar />
       <div className="content">
        <Home />
         {/* <Switch>
           <Route exact path="/Home">
             <Home />
           </Route>
           <Route path="/create">
             <Create />
           </Route>
           <Route path="/blogs/:id">
             <BlogDetails />
           </Route>
           <Route path="*">
             <NotFound />
           </Route>
         </Switch> */}
       </div>
     </div>
   </Router>
  );
}

export default App;
