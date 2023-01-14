import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { Button } from "primereact/button";
import ProductService from "../services/productService";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast } from "react-toastify";
import axios from "axios";

export default function ProductList() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const handleAddToCard = (product) => {
    if (product.category?.categoryName == null) {
      toast.error(`Ürünün kategorisi belirtilmemiştir..`);
    } else {
      dispatch(addToCart(product));
      toast.success(
        `Kategorisi ${product.category.categoryName} olan ${product.productName} ürünü sepete eklendi..`
      );
    }
  };

  const submit = async (product) => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: "Token " + token };

    await axios
      .delete(
        "http://localhost:8080/api/products/deleteByProduct/{id}?id=" +
          product.id,
        { headers: headers }
      )
      .then((res) => {
        console.log(res);
      });

    setProducts(products.filter((p) => p.id !== product.id));
    toast.success(`${product.productName} ürün silindi..`);
  };

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Ürün adı</Table.HeaderCell>
            <Table.HeaderCell>Birim Fiyatı</Table.HeaderCell>
            <Table.HeaderCell>Stok Adedi</Table.HeaderCell>
            <Table.HeaderCell>Açıklama</Table.HeaderCell>
            <Table.HeaderCell>Kategori</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((product) => (
            <Table.Row key={product.id}>
              <Table.Cell>
                <Link to={`/products/${product.productName}`}>
                  {product.productName}
                </Link>
              </Table.Cell>
              <Table.Cell>{product.unitPrice}</Table.Cell>
              <Table.Cell>{product.unitsInStock}</Table.Cell>
              <Table.Cell>{product.quantityPerUnit}</Table.Cell>
              <Table.Cell>{product.category?.categoryName}</Table.Cell>
              <Table.Cell>
                <Button onClick={() => handleAddToCard(product)}>
                  Sepete Ekle
                </Button>
              </Table.Cell>
              <Table.Cell>
                <Button
                  label="Ürünü Sil"
                  icon="pi pi-trash"
                  onClick={() => submit(product)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
