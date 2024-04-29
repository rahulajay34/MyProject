
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
 

 export function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      borderRadius="50%"
      width="50px"
      height="50px"
      position="absolute"
      right="20px"
      top="50%"
     zIndex="1"
      cursor="pointer"
    />
  );
}

 
 export function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <Box
      className={className}
      onClick={onClick}
      borderRadius="50%"
      width="50px"
      height="50px"
      position="absolute"
      left="30px"
      top="50%"
     zIndex="1"
      cursor="pointer" 
    />
  );
}

const SliderOne = () => {
  
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    
    // nextArrow: <SampleNextArrow />, 
    // prevArrow: <SamplePrevArrow />,
  };
 
  const arr = [
    "src/components/assets/Slider1/artisinal.jpeg",
    " src/components/assets/Slider1/Desktop.gif",
    "src/components/assets/Slider1/Desktop (2).gif",
    "src/components/assets/Slider1/desktop (3).jpeg",
    "src/components/assets/Slider1/Desktop-GIF.gif ",
    "src/components/assets/Slider1/Desktop.jpeg",
    "src/components/assets/Slider1/Web-Banner.gif",
    "src/components/assets/Slider1/home_banner_jj_gentleman.jpeg",
    "src/components/assets/Slider1/Homepage-Banner-web.jpeg",
    "src/components/assets/Slider1/HP-web-Day-3.jpeg",
    "src/components/assets/Slider1/Hustlr_Ace_Desktop_Banner.jpeg",
    "src/components/assets/Slider1/InBloom-WebBanner.jpeg",
    "src/components/assets/Slider1/neethone-web-banner.jpeg",
    "src/components/assets/Slider1/Option 1 static.jpeg",
    "src/components/assets/Slider1/web (1).jpeg",
    "src/components/assets/Slider1/web (2).jpeg",
    "src/components/assets/Slider1/Web_Banner_Refresh.jpeg",
    "src/components/assets/Slider1/web-1.jpeg",
    "src/components/assets/Slider1/Web-banner (1).jpeg",
    "src/components/assets/Slider1/Web-banner (2).jpeg",
    "src/components/assets/Slider1/Web-banner option 1-min.jpeg",
    "src/components/assets/Slider1/Web-banner option 2.jpeg",
    "src/components/assets/Slider1/Web-banner.jpeg",
    "src/components/assets/Slider1/Web-banner.jpg",
    "src/components/assets/Slider1/Web-bannerTentpole.jpeg",
    "src/components/assets/Slider1/web.jpeg",
    "src/components/assets/Slider1/web02apr.jpeg",
    "src/components/assets/Slider1/WebBanner.jpeg",
    "src/components/assets/Slider1/wedding-desk.jpeg"
     
  ];

  return (
        <Box  w={'99%'} m={"auto"}  pt={[2, 2, 2, 2]} pb={[2, 2,2,2]} position="relative">
    <Slider {...settings}>
        {arr.map((elem, i) => (
          <img src={elem} alt="slider" key={i}   />
        ))}
      </Slider>
    </Box>
  );
}

export default SliderOne;
