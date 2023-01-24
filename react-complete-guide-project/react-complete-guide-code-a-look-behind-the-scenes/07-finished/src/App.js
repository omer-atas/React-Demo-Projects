import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

// usecallback,React işlevi bileşenlerinizin oluşturma davranışını optimize etmek için kullanılırken, useMemo,
// her oluşturmada onları çağırmak zorunda kalmamak için pahalı işlevleri not etmek için kullanılır.
// usememo ise hemen usecallback gibi ayni işlevi tutar.. Fakat işlem sonucu üzerinden kontrol yapar..
const listItems = useMemo(() => [5, 3, 1, 10, 9], []); // Bu arada bileşen her render ettiğinde liste değişmiyorsa kullanılıdğı bileşeni tekrar render etme zorunda kalma
//Bizim uygulama da demolist bileşeni ilk çalıştığında çalışır. Çünkü listTitle özelliği değişiyor. Ondan sonra özellikkeri kontrol eder items özelliğide değişmediği için tekrar render edilmez.

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
    </div>
  );
}

export default App;

// Bu uygulamda ilk olarak tüm bileşenler oluşturulur. daha sonra useCallback
// ve useMemo hookları kullanılarak değişiklik olup olmadığı belirlenir.
// Duruma göre çıktı oluşturulur...
// React.memo ilkel veri tipleri için useCallback referans veri tipleri için kullanılır..
// React.memo() => props olarak değerleri yüzeysel olarak kontrol eder. Değişiklik yoksa son render edilen işlemi gösterir yani yeniden render etmez..
// useMemo() => aldığı işlevin sonucunu saklar. Değişme yoksa son durumu göster..
// useCallback() =>useMemo nun aksine aldığı işlevin sonucunu saklamak yerine işlevin kendisini saklar.
// deps olarak verilen değerleri değişmediği sürece de sakladığı işlevi döndürür.