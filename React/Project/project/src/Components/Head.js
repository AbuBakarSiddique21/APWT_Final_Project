import React from "react";
import { Link } from "react-router-dom";
const Head = () =>{
    return(
        <div class="jumbotron jumbotron-fluid btn btn-outline-light text-dark">
            <div class="">
                <Link className="button  button5 " to="/home">Employer Home</Link>
                <Link className="button  button2" to="/add/deliveryMan">Create DeliveryMan</Link>
                <Link className="button  button2" to="/deliveryMan/list">DliveryMan List</Link>
                <Link className="button  button2" to="/add/category">Add Category</Link>
                <Link className="button  button2" to="/category/list">Category List</Link>
                <Link className="button  button2" to="/add/product">Add Product</Link>
                <Link className="button  button2" to="/product/list">Product List</Link>

                {/* <Link className="button  button2" to="#">Manage Order</Link>
                <Link className="button  button2" to="#">Order History</Link> */}
                <Link className="button  button2" to="/customer/list">Manage Customer</Link>

                <Link className="button  button1" to="/logout">Logout</Link>
            </div>
        </div>
    )
}
export default Head; 