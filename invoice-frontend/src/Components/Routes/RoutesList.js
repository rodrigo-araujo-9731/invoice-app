import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import User from '../User/User';
import Invoices from '../ListofInvoices/Invoices';
import CreateInvoice from '../CreateInvoice/CreateInvoice';
import SearchInvoice from '../SearchInvoice/SearchInvoice';
import EditUser from '../User/EditUser';
// import { InvoicesData } from '../services/InvoicesData';

export default function RoutesList() {
  return (
    <Switch>
      <Route path='/' exact component={Login}></Route>
      <div>
        <Navbar />
        <Route exact path='/user' component={User}></Route>
        <Route path='/user/edit' component={EditUser}></Route>
        <Route exact path='/list' component={Invoices}></Route>
        <Route path='/list/create' component={CreateInvoice}></Route>
        <Route path='/list/search' component={SearchInvoice}></Route>
        {/* <Route path='/list/data' component={InvoicesData}></Route> */}
        <Footer />
      </div>
      {/* another way to only show a Navbar int these components
       outra maneira para aparecer o Navbar exclusivamente nestas páginas, aqui abaixo indicadas.
     <Navbar> 
      <Route exact path="/user" component={User}></Route>
      <Route path="/user/edit" component={EditUser}></Route>
      <Route path="/list" component={Invoices}></Route>
      <Route path="/list/create" component={CreateInvoice}></Route>
      <Route path="/list/search" component={SearchInvoice}></Route>
       </Navbar>  */}
    </Switch>
  );
}
