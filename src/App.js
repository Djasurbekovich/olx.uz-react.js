import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Message from './Pages/Message/Message';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import SearchProducts from './Pages/SearchProducts/SearchProducts';
import Category from './Pages/Category/Category';
import Auth from './Pages/Auth/Auth';
import Login from './Pages/Auth/Login/Login';
import Create from './Pages/Auth/Create/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='auth' element={<Auth/>}>
          <Route path='login' element={<Login/>} />
          <Route path='create' element={<Create/>} />
        </Route>
        <Route path='/message' element={<Message/>} />
        <Route path='/singleproduct/:id' element={<SingleProduct/>} />
        <Route path='/search/:searchtitle' element={<SearchProducts/>} />
        <Route path='/category/:categoryId' element={<Category/>} />
      </Routes>
    </div>
  );
}

export default App;