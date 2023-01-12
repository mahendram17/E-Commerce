import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import NotFound from './containers/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Routes>
      
      <Route path='/' exact element={<ProductListing/>}/>
      <Route path='product/:productId' exact element={<ProductDetail/>}/>
     <Route path='*' element={<NotFound/>}/>
     </Routes>
      </Router>

    
    </div>
  );
}

export default App;
