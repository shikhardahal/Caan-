import React, { ReactNode } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow: React.FC<{ className?: string, style?: React.CSSProperties, onClick?: () => void }> = props => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, display: "block", background: "red" }} // Change "red" to whatever color or design you prefer
      onClick={props.onClick}
    ></div>
  );
}

interface children {
  children: ReactNode
}

const CardSlider: React.FC<children> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const settings = {
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    }
  };

  return (
    <div>
      <Slider {...settings}>
        {children}
      </Slider>

      {/* You may also want to import slick's CSS for basic styling */}
      <style jsx global>{`
        @import "~slick-carousel/slick/slick.css"; 
        @import "~slick-carousel/slick/slick-theme.css";
        .slick-next {
          /* Custom styles for the next arrow */
          width: 30px;
          height: 30px;
          border-radius: 50%;
          right: 10px; /* adjust as per your requirement */
          z-index: 1; /* ensure the arrow is above other elements */
      }
      `}</style>
    </div>
  );
}

export default CardSlider;