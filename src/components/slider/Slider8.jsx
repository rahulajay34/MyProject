
import { Box, Flex } from "@chakra-ui/react";
import Slider from "react-slick";

 

 export function SampleNextArrow(props) {
     const { className , onClick } = props;
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
 
function Slider8() {
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
            'src/components/assets/Slider8/aquacolor-brown-premium-zero-power-monthly_brown_kiara.jpeg',
            'src/components/assets/Slider8/aquacolor-dusk-blue-premium-zero-power-monthly_dusk_blue_kiara_01_09_2023.jpeg',
            'src/components/assets/Slider8/aquacolor-emerald-premium-zero-power-monthly_emerald_kiara_01_09_2023.jpeg',
            'src/components/assets/Slider8/aquacolor-gray-premium-zero-power-monthly_gray_kiara_01_09_2023.jpeg',
            'src/components/assets/Slider8/aquacolor-silver-gray-premium-zero-power-monthly_silver_grey_kiara_01_09_2023.jpeg',
            'src/components/assets/Slider8/aquacolor-tricky-turquoise-powered-monthly---1lp_tricky_turquoise_kiara_01_09_2023.jpeg'
       
 ]
  
 return(
    <Box w={'80%'}   m={"auto"}  pt={[2, 2, 2, 2]} pb={[2, 2,2,2]} position="relative" >
    <Slider {...settings}>
      {arr.map((ele, i) => (
         <Flex key={i} gap={10}  p={15} >
             <img src={ele} alt="slider"     />
         </Flex>
    
         
      ))}
    </Slider>
  </Box>
)

}
 

export default Slider8;
