import React, { useEffect, useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import CategoryService from "../services/categoryService";
import axios from "axios";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { toast } from "react-toastify";

export default function Add() {
  
  const [categoryId, setCategoryId] = useState("");
  const [productName, setProductName] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [unitsInStock, setUnitsInStock] = useState("");
  const [quantityPerUnit, setQuantityPerUnitk] = useState("");
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    let categoryService = new CategoryService();
    categoryService
      .getCategories()
      .then((result) => setCategoryList(result.data.data));
  }, []);

  const categoriesOptionItems = categoryList.map((c) => ({
    label: c.categoryName,
    value: c.categoryId,
  }));

  const submit = () => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: "Token " + token };
    const obj = {
      category: {
        categoryId: categoryId,
        categoryName: "string",
        products: [null],
      },
      id: 0,
      productName: productName,
      quantityPerUnit: quantityPerUnit,
      unitPrice: unitPrice,
      unitsInStock: unitsInStock,
    };

    axios
      .post("http://localhost:8080/api/products/add", obj, { headers: headers })
      .then(() => {
        toast.success(
            obj.productName + " başarılı bir şekilde eklendi.."
          )
      });
  };

  return (
    <div className="p-fluid p-formgrid p-grid">
      <div className="p-field p-col-12 p-md-6">
        <label htmlFor="Ürün Adı">Ürün Adı</label>
        <InputText
          placeholder="Ürün adı giriniz..."
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div className="p-field p-col-12 p-md-6">
        <label htmlFor="Birim fiyatı">Birim fiyatı</label>
        <InputText
          placeholder="Birim fiyatı giriniz..."
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
      </div>
      <div className="p-field p-col-12">
        <label htmlFor="Birim Başına Miktar">Birim Başına Miktar</label>
        <InputText
          placeholder="Birim başına miktar giriniz..."
          value={quantityPerUnit}
          onChange={(e) => setQuantityPerUnitk(e.target.value)}
        />
      </div>
      <div className="p-field p-col-12 p-md-3">
        <label htmlFor="Stok Adedi">Stok adedi</label>
        <InputText
          placeholder="Stok adedini giriniz....."
          value={unitsInStock}
          onChange={(e) => setUnitsInStock(e.target.value)}
        />
      </div>

      <div className="p-field p-col-12 p-md-3">
        <label htmlFor="Stok Adedi">Kategori </label>
        <Dropdown
          options={categoriesOptionItems}
          onChange={(e) => setCategoryId(e.target.value)}
          value={categoryId}
          filter={true}
          showClear={true}
          required={true}
          placeholder="Kategori Türünü Seçiniz"
        />
      </div>
      <Button label="Ekle" onClick={submit} />
    </div>
  );
}
