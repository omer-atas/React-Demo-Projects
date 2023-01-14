import axios from "axios";

export default class CategoryService{

    getCategories(){
        return axios.get("http://localhost:8080/api/categories/getall")
    }

   
}
