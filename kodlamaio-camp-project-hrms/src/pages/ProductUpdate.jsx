import React, { useState, useEffect } from "react";
import CategoryService from "../services/categoryService";
import ProductService from "../services/productService";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import axios from "axios";

export default function ProductUpdate() {
  const [categoryId, setCategoryId] = useState("");
  const [categoryList, setCategoryList] = useState([]);
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((result) => setCategoryList(result.data.data));

    let productService = new ProductService();
    productService.getProducts().then((result) => setProduct(result.data.data));
  }, []);

  const categoriesOptionItems = categoryList.map((item) => ({
    label: item.categoryName,
    value: item.categoryId,
  }));

  const productsOptionItems = product.map((item) => ({
    label: item.productName,
    value: item.id,
  }));

  const submit = () => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: "Token " + token };

    axios
      .put(
        "http://localhost:8080/api/products/updateByCategory?categoryId=" +
          categoryId +
          "&productId=" +
          productId,
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="p-fluid p-formgrid p-grid">
      <div className="p-field p-col-12 p-md-3">
        <label htmlFor="Ürün"> Ürün </label>
        <Dropdown
          options={productsOptionItems}
          onChange={(e) => setProductId(e.target.value)}
          value={productId}
          filter={true}
          showClear={true}
          required={true}
          placeholder="Güncelleme yapılacak ürünü seçiniz"
        />
      </div>
      <div className="p-field p-col-12 p-md-3">
        <label htmlFor="Kategori">Kategori </label>
        <Dropdown
          options={categoriesOptionItems}
          onChange={(e) => setCategoryId(e.target.value)}
          value={categoryId}
          filter={true}
          showClear={true}
          required={true}
          placeholder="Güncelleme yapılacak kategoriyi seçiniz"
        />
      </div>
      <Button label="Güncelle" onClick={submit} />
    </div>
  );
}
