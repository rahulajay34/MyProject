import { Box, Flex,  SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SliderOne from "../components/slider/Slider";
import Slider2 from "../components/slider/Slider2";
import Slider3 from "../components/slider/Slider3";
 
import Slider5 from "../components/slider/Slider5";
// import Slider6 from "../components/slider/Slider6";
import Slider7 from "../components/slider/Slider7";
import Slider8 from "../components/slider/Slider8";
import Videos from "../components/youtubeVideo/Videos";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (<>
      <Navbar/>
    <Box overflowX="hidden">
      
      {/* ---------- */}
      <Box p={1}  >
        {" "}
        <img src="src\components\assets\HP-Web-Day-2.jpeg" alt="" />
      </Box>
      {/* ------------- */}
      <SliderOne />
      {/* ----------- */}
      <Box p={1}>
        <img src="src/components/assets/Bannerforexport.jpeg" alt="Do banner" />
      </Box>
      {/* -------- */}
      <Slider2 />
      {/* ---------------- */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "----PREMIUM EYEWEAR----"
            : "-----------------------------PREMIUM EYEWEAR-----------------------------"}
        </Text>
      </Box>
      <Box p={1}>
        <Link to={'/premiumproduct'}>
        <img src="src/components/assets/As seen on Desk.jpeg" alt="Premium EyeWear" />
        </Link>
      </Box>
      {/* -------------- */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "----AS SEEN ON MOUNI ROY----"
            : "--------------------------AS SEEN ON MOUNI ROY--------------------------"}
        </Text>
      </Box>
      <Box p={1}>
         <Link to={'/mouniroyproduct'}><img src="src/components/assets/web.gif" alt="Mouni Roy" /></Link>
      </Box>
      {/* ---------------- */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "---- AS SEEN ON SHARK TANK----"
            : "--------------------------AS SEEN ON SHARK TANK--------------------------"}
        </Text>
      </Box>
      <Box p={1}>
        <img src="src/components/assets/Homepage-Banner-web.gif" alt="AS SEEN ON SHARK TANK" />
      </Box>
      {/*--------------  */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "----AS SEEN ON KARAN JOHAR----"
            : "--------------------------AS SEEN ON KARAN JOHAR--------------------------"}
        </Text>
      </Box>
      <Box p={1}>
        <Link to={'/karanjoharproduct'}>
        <img src="src/components/assets/Web_banner.gif" alt="AS SEEN ON KARAN JOHAR" />
        </Link>
      </Box>
      {/* ------------- */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "----TRENDING SUNGLASSES----"
            : "--------------------------TRENDING SUNGLASSES--------------------------"}
        </Text>
      </Box>
      <Box p={1}>
        <img src="src/components/assets/sun-Banner-web.gif" alt="TRENDING SUNGLASSES" />
      </Box>
      {/* ------------ */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768 ? "----------OJOS-----------" : "------------------------------ OJOS------------------------------"}
        </Text>
      </Box>
      <Box p={1}>
        <img src="src/components/assets/ojos-web-1199.gif" alt="OJOS" />
      </Box>
      {/* ------------ */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "--AQUACOLOR - GLAM UP WITH COLOR LENSES--"
            : "----------------AQUACOLOR - GLAM UP WITH COLOR LENSES----------------"}
        </Text>
      </Box>
      <Box p={1}>
        <img src="src/components/assets/Refresh-Banner-Web.gif" alt="AQUACOLOR - GLAM UP WITH COLOR LENSES" />
      </Box>
      {/* -------------- */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "--------FIND THE PERFECT FIT--------"
            : "----------------------FIND THE PERFECT FIT----------------------"}
        </Text>
      </Box>
      <Flex gap={5} w={"80%"} margin={"auto"}>
        <SimpleGrid gap={2} w={"50%"}>
          <img src=" src/components/assets/eye-square10.jpeg" alt="left 1st" />
          <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/power-sun-square.jpg" alt="left2nd" />
        </SimpleGrid>

        <SimpleGrid gap={2} w={"50%"}>
          <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/ce-square.jpg" alt="right1st" />
          <img src="https://static1.lenskart.com/media/desktop/img/Aug21/Desktop/sun-square.jpg" alt="right2nd" />
          <img src="https://static1.lenskart.com/media/desktop/img/Nov20/25-Nov/Banner03_TileDesktop.jpg" alt="right3rd" />
        </SimpleGrid>
      </Flex>
      {/* ------------- */}
      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "--- INTRODUCING OJOS WEAR - SUBSCRIBE & SAVE---"
            : "----------------------INTRODUCING OJOS WEAR - SUBSCRIBE & SAVE ----------------------"}
        </Text>
      </Box>
      <Box p={1}>
        <img src="src/components/assets/ojos-web.jpeg" alt=" INTRODUCING OJOS WEAR - SUBSCRIBE & SAVE " />
      </Box>

      {/*-----------  */}

      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768
            ? "--- CONTACT LENSES & MORE---"
            : "----------------------CONTACT LENSES & MORE ----------------------"}
        </Text>
      </Box>

      <SimpleGrid gridTemplateColumns={"repeat(2,1fr)"} w={"70%"} m={"auto"} gap={5}>
        <img src="src/components/assets/contact-lens-more.jpeg" alt="left" />
        <img src="src/components/assets/contact-lens-more-1.jpeg" alt="right" />
      </SimpleGrid>

      {/* ----------------- */}

      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768 ? "--- BUY IT YOUR WAY---" : "----------------------BUY IT YOUR WAY ----------------------"}
        </Text>
      </Box>

      <SimpleGrid gridTemplateColumns={"repeat(2,1fr)"} gap={5} w={"80%"} m={"auto"}>
        <img src="src/components/assets/call.jpeg" alt="Call" />
        <img src="src/components/assets/wts-up.jpeg" alt="Whatapp" />
        <img src="src/components/assets/hto.jpeg" alt="hto" />
        <img src="src/components/assets/stores.jpeg" alt="stores" />
      </SimpleGrid>

      {/* ------------ */}

      <Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768 ? "--- OUR BRANDS---" : "----------------------OUR BRANDS ----------------------"}
        </Text>
      </Box>

      <Box p={1}>
        <img src="src/components/assets/VC-Banner.jpeg" alt="OUR BRANDS" />
      </Box>

{/* ------------------ */}
<Flex w={'80%'} justifyContent={"space-between"} m={'auto'} mb={0}> 

<Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
        <Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768 ? "EYEGLASSES" :
           " EYEGLASSES  "}
        </Text>
      </Box>
      <Box  cursor={'pointer'} >
          <Text as="h3" size="lg" mt={2} fontSize={[11, 9, 14, 19]} color={'darkcyan'}>
            View Range
          </Text>
          
      </Box>
       
       </Flex>
       <Box  mt={0}  textAlign={'center'}> 
       <Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
          {windowWidth <= 768 ? "--------------------------------------------------" :
           "------------------------------------------------------------------------------------------------------- "}
        </Text>
       </Box>

{/* ---------------- */}
       <Slider3/>

 

        

  <Box p={1}>
        <img src="src/components/assets/Updated brand banner jj .jpeg " alt="OUR BRANDS" />
      </Box>

 {/*----------------------  */}

 <Flex w={'80%'} justifyContent={"space-between"} m={'auto'} mb={0}> 

<Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
<Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
  {windowWidth <= 768 ? "EYEGLASSES" :
   " EYEGLASSES "}
</Text>
</Box>
<Box  cursor={'pointer'} >
  <Text as="h3" size="lg" mt={2} fontSize={[11, 9, 14, 19]} color={'darkcyan'}>
    View Range
  </Text>
  
</Box>

</Flex>
<Box  mt={0}  textAlign={'center'}> 
<Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
  {windowWidth <= 768 ? "--------------------------------------------------" :
   "------------------------------------------------------------------------------------------------------- "}
</Text>
</Box>
{/* ----------- */}
<Slider5/>

{/* ---------- */}
{/* <Flex w={'80%'} justifyContent={"space-between"} m={'auto'} mb={0}> 

<Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
<Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
  {windowWidth <= 768 ? "SUNGLASSES" :
   " SUNGLASSES "}
</Text>
</Box>
<Box  cursor={'pointer'} >
  <Text as="h3" size="lg" mt={2} fontSize={[11, 9, 14, 19]} color={'darkcyan'}>
    View Range
  </Text>
  
</Box>

</Flex>
<Box  mt={0}  textAlign={'center'}> 
<Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
  {windowWidth <= 768 ? "--------------------------------------------------" :
   "------------------------------------------------------------------------------------------------------- "}
</Text>
</Box>
 
           <Slider6/> */}

  {/*------------  */}
  <Box p={1}>
        <img src="src/components/assets/Our-Brands-Banner.jpeg " alt="OUR BRANDS" />
      </Box>

 {/* ----------- */}

 <Flex w={'80%'} justifyContent={"space-between"} m={'auto'} mb={0}> 

<Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
<Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
  {windowWidth <= 768 ? "CONTACT LENSES" :
   " CONTACT LENSES "}
</Text>
</Box>
<Box  cursor={'pointer'} >
  <Text as="h3" size="lg" mt={2} fontSize={[11, 9, 14, 19]} color={'darkcyan'}>
    View Range
  </Text>
  
</Box>

</Flex>
<Box  mt={0}  textAlign={'center'}> 
<Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
  {windowWidth <= 768 ? "--------------------------------------------------" :
   "------------------------------------------------------------------------------------------------------- "}
</Text>
</Box>

{/* ----------------- */}
       <Slider7/>

  {/*------------  */}
     
          
  <Flex w={'80%'} justifyContent={"space-between"} m={'auto'} mb={0}> 

<Box textAlign={{ base: "center", md: "center" }} m={2} fontFamily={"sans-serif"}>
<Text mb={-4} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
  {windowWidth <= 768 ? "COLOR CONTACT LENSES" :
   "  COLOR CONTACT LENSES "}
</Text>
</Box>
<Box  cursor={'pointer'} >
  <Text as="h3" size="lg" mt={2} fontSize={[11, 9, 14, 19]} color={'darkcyan'}>
    View Range
  </Text>
  
</Box>

</Flex>
<Box  mt={0}  textAlign={'center'}> 
<Text mt={-2} as="h3" size="lg" fontSize={[15, 15, 20, 25]}>
  {windowWidth <= 768 ? "--------------------------------------------------" :
   "------------------------------------------------------------------------------------------------------- "}
</Text>
</Box>

{/* -------------------- */}
      <Slider8/>
{/* ----------------------- */}
         
     <Box p={1}>
        <img src="src/components/assets/whatsapp-1.jpeg" alt="OUR BRANDS" />
      </Box>
{/* --------------------------------------------------- */}
             
             <Videos/>
  {/*--------------------  */}
  <Footer/>
    </Box>
            </>
  );
};

export default Home;






