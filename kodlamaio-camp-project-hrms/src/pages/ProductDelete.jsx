import React, { useEffect, useState } from "react";
import ProductService from "../services/productService";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import axios from "axios";

export default function ProductDelete() {
  const [productId, setProductId] = useState("");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => setProduct(result.data.data));
  }, []);

  const productsOptionItems = product.map((item) => ({
    label: item.productName,
    value: item.id,
  }));

  const submit = () => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: "Token " + token };

    axios
      .delete(
        "http://localhost:8080/api/products/deleteByProduct/{id}?id=" +
          productId,
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div>
        <Dropdown
          options={productsOptionItems}
          onChange={(e) => setProductId(e.target.value)}
          value={productId}
          filter={true}
          showClear={true}
          required={true}
          placeholder="Silinecek Ürünü Seçiniz"
        />
      </div>
      <Button label="Sil" onClick={submit} />
    </div>
  );
}
