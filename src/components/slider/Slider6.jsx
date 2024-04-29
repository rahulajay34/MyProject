
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
 
function Slider6() {
  const settings = {
    autoplay: false,
    infinite: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          autoplay: true
          

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          autoplay: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
           autoplay: true
        }
      }
    ]
  }
    const arr=[
            'src/components/assets/Slider4/black-green-full-rim-wayfarer-vincent-chase-athleisure-vc-s14525-c2-sunglasses_g_8300.jpeg ',
            'src/components/assets/Slider4/gold-brown-full-rim-round-vincent-chase-the-metal-edit-vc-s13112-c10-polarized-sunglasses_vincent-chase-vcs13112-c10-c10-sunglasses_sunglasses_g_8974_28july.jpeg ',
            'src/components/assets/Slider4/matte-black-grey-full-rim-round-vincent-chase-polarized-the-metal-edit-vc-s13132-c1-polarized-sunglasses_vincent-chase-vc-s13132-c1-sunglasses_sunglasses_j_.jpeg ',
            'src/components/assets/Slider4/matte-black-grey-solid-full-rim-wayfarer-vincent-chase-polarized-air-la-s13164--c1-polarized-sunglasses_vincent-chase-vc-s13164-c1-sunglasses_g_1663_5july23.jpeg',
            'src/components/assets/Slider4/matte-gunmetal-black-blue-gradient-full-rim-rectangle-square-vincent-chase-polarized-the-metal-edit-vc-s12934-c1-polarized-sunglasses_vincent-chase-vc-s1293.jpeg',
            'src/components/assets/Slider4/matte-gunmetal-blue-green-full-rim-round-vincent-chase-polarized-the-metal-edit-vc-s13132-c4-polarized-sunglasses_vincent-chase-vc-s13132-c4-sunglasses_sung.jpeg '
       
 ]
  
 return(
    <Box w={'80%'}   m={"auto"}  pt={[2, 2, 2, 2]} pb={[2, 2,2,2]} position="relative" >
    <Slider {...settings}>
      {arr.map((ele, i) => (
         <img src={ele} alt="slider"  key={i}   />
    
         
      ))}
    </Slider>
  </Box>
)

}
 

export default Slider6;
