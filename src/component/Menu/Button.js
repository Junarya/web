import React from "react";
function Button({ value, onClickCategory }) {
  const category = [
    "Все меню",
    "Фруктовые чаи",
    "Молочные чаи",
    "Фраппе",
    "Кофе"
  ];

  return (
    <div className="container2">
      {category.map((name, i) => (
        <button
          key={i}
          onClick={() => onClickCategory(i)}
          className={value === i ? "btnMenuActive" : "btnMenu"}
        >
          {name}
        </button>
      ))}
    </div>
  );
}
export default Button;
