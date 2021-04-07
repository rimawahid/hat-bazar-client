import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import AddProduct from '../AddProduct/AddProduct';
import EditProduct from '../EditProduct/EditProduct';
import ManageProduct from '../ManageProduct/ManageProduct';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <Router>
        <div>
            <div className="row ">
                <div className="col-md-3 mt-5">
                <Sidebar/>
                </div>
                <div className="col-md-9">
                    
                <Switch>
          <Route exact path="/manageProduct">
            <ManageProduct/>
          </Route>
          <Route exact path="/addProduct">
            <AddProduct/>
          </Route>
          <Route exact path="/editProduct">
            <EditProduct/>
          </Route>
        </Switch>
        
                </div>
            </div>
        </div>
        </Router>
    );
};

export default Admin;