import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import  './Sidebar.css'
const Sidebar = () => {
    return (
        <div className="sidebar-container">
          {/* <Router> */}
      <div className="side-menu">
        <ul>
          <li>
            <Link to="/manageProduct">Manage Product</Link>
          </li>
          <li>
            <Link to="/addProduct">Add Product</Link>
          </li>
          <li>
            <Link to="/editProduct">Edit Product</Link>
          </li>
        </ul>

        <hr />
        {/* <Switch>
          <Route  path="/manageProduct">
            <ManageProduct/>
          </Route>
          <Route path="/addProduct">
            <AddProduct/>
          </Route>
          <Route path="/editProduct">
            <EditProduct/>
          </Route>
        </Switch> */}
      </div>
    {/* </Router> */}
        </div>
    );
};

export default Sidebar;