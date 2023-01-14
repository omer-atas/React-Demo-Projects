import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";
// React.forwardRef((props, ref) => {});
// -> React'te forwardRef kullanılması, alt bileşene, üst bileşeni tarafından oluşturulan bir DOM öğesine referans verir.
//Bu daha sonra çocuğun o öğeyi kullanıldığı her yerde okumasına ve değiştirmesine izin verir.
const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const active = () => {
    inputRef.current.focus();
  };
//  React'te bir DOM öğesini kontrol etmek amacıyla kullanılır.
// 2. Tanım : useImperativeHandle size oluşturulmuş bir referansı değiştirme yeteneği verir .
  useImperativeHandle(ref, () => {
    return { focus: active };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
});

export default Input;
