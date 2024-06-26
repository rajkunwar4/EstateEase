import { useState } from "react";
import "./slider.scss";

const Slider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(null);

  function imageSlider(direction){
    const size=images.length;
    if(direction==='left'){
      // setImageIndex((prev)=>(prev-1+size)%size)
      //additional +size to handle negative remainders
      setImageIndex((imageIndex-1+size) % size)
    }
    else{
      // setImageIndex((prev)=>(prev+1)%size)
      setImageIndex((imageIndex+1) % size)
    }
  }

  function slideImage(direction) {
    if(direction==='left'){
      if(imageIndex===0){
        setImageIndex(images.length-1);
      }
      else{
        setImageIndex(imageIndex-1)
      }
    }
    else if(direction==='right'){
      if(imageIndex===images.length-1){
        setImageIndex(0);
      }
      else{
        setImageIndex(imageIndex+1);
      }
    }
  }

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          {/* left arrow */}
          <div className="arrow">
            <img
              src="./arrow.png"
              alt=""
              onClick={() => {
                imageSlider('left');
              }}
            />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          {/* right arrow */}
          <div className="arrow">
            <img
              src="./arrow.png"
              className="right"
              alt=""
              onClick={() => {
                imageSlider('right');
              }}
            />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            x
          </div>
        </div>
      )}

      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image, i) => (
          <img
            src={image}
            alt=""
            key={i}
            onClick={() => setImageIndex(i + 1)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
