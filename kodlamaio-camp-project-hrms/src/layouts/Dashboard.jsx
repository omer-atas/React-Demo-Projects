import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import ProductDetail from "../pages/ProductDetail";
import CardDetail from "../pages/CardDetail";
import { ToastContainer } from "react-toastify";
import ProductAdd from "../pages/ProductAdd";
import ProductDelete from "../pages/ProductDelete";
import ProductUpdate from "../pages/ProductUpdate";

export default function Dashboard() {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/products" component={ProductList} />
            <Route exact path="/products/:name" component={ProductDetail} />
            <Route path="/cart" component={CardDetail} />
            <Route path="/product/add" component={ProductAdd} />
            <Route path="/product/delete" component={ProductDelete} />
            <Route path="/product/update" component={ProductUpdate} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
