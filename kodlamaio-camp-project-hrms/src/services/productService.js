import axios from "axios";

export default class ProductService {
  
  getProducts() {
    return axios.get("http://localhost:8080/api/products/getall");
  }

  getByProductName(productName) {

    return axios.get(
      "http://localhost:8080/api/products/getByProductName?productName=" +
        productName
    );
  }

  add(product){
    return axios.post("http://localhost:8080/api/products/add",product);
  }

  delete(productId){
    return axios.delete("http://localhost:8080/api/products/deleteByProduct/{id}?id="+productId);
  }
}
