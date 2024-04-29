import { Box, Flex, Select, SimpleGrid, Switch, Text } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import TopNavbar from "../../components/navbar/TopNavbar";
import MiddleNavbar from "../../components/navbar/MiddleNavbar";
import DropdownNavbar from "../../components/navbar/DropdownNavbar";
import ProductList from "./Leftbox";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

const MouniRoy = () => {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let res = await axios.get("src/Json/MouniRoy.json");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (sortBy === "desc") {
      setSortedData([...data].sort((a, b) =>  (a.price) -  (b.price)));
    } else if (sortBy === "asc") {
      setSortedData([...data].sort((a, b) => ( b.price) -  (a.price)));
    } else {
      setSortedData(data);
    }
  }, [sortBy, data]);

  const handleSorting = (e) => {
    setSortBy(e.target.value);
  };

  useEffect(()=>{
    window.scroll({
      top:0,
      behavior:'instant'
    })
  },[])

  return (
    <>
      <TopNavbar />
      <MiddleNavbar />
      <DropdownNavbar />
      <Box><img src="src/components/assets/mouniroy/web-plp.gif" alt="" /></Box>
      <Flex
        justifyContent="space-around"
        alignItems="center"
        p="5px"
        bg="#e2e8f0"
        border="1px"
        borderColor="gray.400"
        gap={50}
      >
        <Text as={"b"}>EYEGLASSES</Text>
        <Flex alignItems="center">
          <Text fontWeight="bold" mr="5px" color="green">
            VIEW FRAMES
          </Text>
          <Switch colorScheme="green" isChecked size="lg" />
          <Text ml="5px">VIEW 3D TRY ON</Text>
        </Flex>
        <Flex>
          <Flex alignItems="center">
            {sortBy === "asc" && <AiOutlineArrowDown color="green" />}
            {sortBy === "desc" && <AiOutlineArrowUp color="green" />}
            <Text fontWeight="bold" color="green">
              SortBy
            </Text>
          </Flex>
          <Select
            border="2px"
            borderRadius="3px"
            borderColor="black"
            ml="4px"
            p="0px"
            onChange={handleSorting}
          >
            <option value="">Select</option>
            <option value="desc">Price : low to high</option>
            <option value="asc">Price : high to low</option>
          </Select>
        </Flex>
      </Flex>

      <Flex>
        <ProductList />
        <SimpleGrid gridTemplateColumns={"repeat(3,1fr)"} ml={10} gap={5} w={"60%"} mt={6}>
          {sortedData.map((elem) => (
            <SimpleGrid  key={elem.id} cursor={"pointer"} borderRadius={10} w={300} boxShadow="xs" rounded="md">
              <Link to={`/mouniroyproduct/${elem.id}`}> 
              <img src={elem.image} alt="" />
              <Text mt={8} ml={10} fontWeight={700}>
                ₹{elem.price}
              </Text>
              <Text ml={8} mt={2} fontWeight={400} fontSize={"18px"} color={"rgb(0, 96, 169)"} _hover={{ textDecoration: "underline" }}>
                {elem.Header}
              </Text>
              <Text ml={8} mt={2} fontWeight={200} fontSize={"14px"} color={"rgb(0, 96, 169)"} _hover={{ textDecoration: "underline" }}>
                {elem.Text}
              </Text>
              <Text   bgGradient='linear(to-r, #F8F2E0,  white)' mt={2} p={2} fontWeight={400} fontSize={"14px"} color={"#B69C53"} _hover={{ textDecoration: "underline" }}>
                {elem.footer}
              </Text>
              </Link>
            </SimpleGrid>
          ))}
        </SimpleGrid>
      </Flex>
      <Footer/>
    </>
  );
};

export default MouniRoy;
