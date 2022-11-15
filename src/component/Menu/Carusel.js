import { useEffect, useState } from "react";

export const Carusel = ({ imgs }) => {
  const [index, setIndex] = useState(0);

  const hadleLeftArrow = () => {
    console.log({ index });
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const hadleRightArrow = () => {
    console.log({ index });
    if (index === imgs.length - 1) {
      setIndex(0);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    setIndex(0);
  }, []);

  useEffect(() => {
    let slideInt = setInterval(() => {
      hadleLeftArrow();
    }, 3000);
    return () => clearInterval(slideInt);
  }, [index]);

  return (
    <div className="slider">
      <i
        className=" fa-solid fa-chevron-left ArrowSlider SliderArLeft"
        onClick={hadleRightArrow}
      ></i>
      <div className="WindowSlider">
        <div className="ItemSlider">
          <img src={imgs[index]} alt="1.png" />
        </div>
      </div>
      <i
        className=" fa-solid fa-chevron-right ArrowSlider SliderArRight"
        onClick={hadleLeftArrow}
      ></i>
    </div>
  );
};
export default Carusel;
