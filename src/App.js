



import React from 'react';

import './App.css';

import Homepage from './pages/homepage/homepage.component';


import {Switch, Route} from 'react-router-dom';

import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-and-sign-up.component';



function App() {
  return (
    <div >
        <Header/>

      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route  path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>

    </div>
  );
}

export default App;
