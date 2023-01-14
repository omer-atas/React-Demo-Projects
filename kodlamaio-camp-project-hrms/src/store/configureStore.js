import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
//  Mağazayı oluşturuyoruz tüm bu işlemlerin olması için..
// devToolsEnhancer ise chrome da redux yönetimi sağlamak amacıyla kullanıldı.
export function configureStore() {
  return createStore(rootReducer, devToolsEnhancer());
}
