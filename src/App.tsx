import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Counter from './Counter';
import FnCounter from './FnCounter';
import ListProducts from './components/ListProducts';
import 'bootstrap/dist/css/bootstrap.css';
import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EditProduct from './components/EditProduct';
import { appRoutes } from './routes/routes';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <div className='container'>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Awesome App</a>
            {/* <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/fncounter">FnCounter</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product">Product</Link>

              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul> */}
            {appRoutes.filter(items => items.isInMainMenu).map(item => {

              return (
                <li key={item.path} className='nav-item'>
                  <Link className='nav-link' to={item.path}>{item.title}</Link>
                </li>
              )


            })}
          </div>
        </nav>

        <main>
          <Routes>
            {/* <Route path='/' element={<Hello message='Hello React' />} />
            <Route path='/counter' element={<Counter val={15} />} />
            <Route path='/fncounter' element={<FnCounter initValue={15} />} />
            <Route path='/product' element={<ListProducts />} />
            <Route path='/product/:id' element={<EditProduct />} /> */}
            {
              appRoutes.map(items=>{

                if(items.isProtected){
                  return (
                    <Route path={items.path} key ={items.path}
                     element={<ProtectedRoute> <items.component {...items.props} /></ProtectedRoute>} />
                    )
                }
                return (
                  <Route path={items.path} key ={items.path} element={<items.component {...items.props} />} />
                )

              })
            }
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App;
