import './App.css';
import Navbar from './Components/Header/Navbar';
import Sidebar from './Components/Sidebar/Sidebar';
import Home from './Pages/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import UserList from './Pages/Userlist/UserList';
import User from './Pages/UserPage/User';
import NewUser from './Pages/CreateUser/NewUser';
import ProductList from './Pages/Productlist/ProductList';
import Product from './Pages/ProductPage/Product';
import NewProduct from './Pages/CreatProduct/NewProduct';
function App() {
  return (
    <BrowserRouter>
   
    <div className="App">
      <Navbar />
      <div className='container'>
        <Sidebar />
        <div className='others'>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/users" element={<UserList />} />
        <Route exact path="/user/:userId" element={<User />} />
        <Route exact path="/newUser" element={<NewUser />} />
        <Route exact path="/products" element={<ProductList />} />
         <Route exact path="/product/:productId" element={<Product />} />
        <Route exact path="/newProduct" element={<NewProduct />} />
        </Routes>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
