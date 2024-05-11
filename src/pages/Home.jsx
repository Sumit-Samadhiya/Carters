import {
  Box,
  Stack,
  Image,
  Text,
  Heading,
  HStack,
  VStack,
  Button,
  Center,
  Spinner,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../styles/Home.module.css";
import ProductAddToCart from "@/components/cards";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getLatestProducts } from "@/redux/baby/baby.action";
import Home from ".";
import { AlertBox } from "@/components/Alert";
const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.BabyProducts.data);
  let loading = useSelector((store) => store.BabyProducts.loading);
  useEffect(() => {
    dispatch(getLatestProducts());
  }, [dispatch]);
  return (
    <ErrorBoundary fallback={<AlertBox />}>
      {!loading ? (
        <Stack pt={"60px"}>
          {/* for building image portion */}
          <Box position={"relative"} width="100%" zIndex={"1"}>
            <Image
              src={
                "https://images.ctfassets.net/621t91s0mnkp/1vPDFHIG8o3WK4agq9ttBl/d24eec6f32ca80b9d1cfe2e2b3307990/car-050724-summer3-hero-desktop.jpg?fm=webp&w=1366"
              }
              width="100%"
            />
            <HStack
              position={"absolute"}
              width="50%"
              zIndex={"100"}
              top={{ lg: "180px", md: "90px", base: "25px" }}
              right={{ lg: "20px", md: "10px", base: "5px" }}
            >
              <Box>
                <Heading
                  fontSize={{
                    lg: "70px",
                    md: "60px",
                    sm: "40px",
                    base: "20px",
                  }}
                >
                  Diaper's <span style={{ color: "#0EACD8" }}> Sale</span>
                </Heading>
                <Text
                  fontSize={{
                    lg: "70px",
                    md: "60px",
                    sm: "40px",
                    base: "20px",
                  }}
                  fontWeight="bold"
                >
                  is live
                </Text>
                <Text
                  fontFamily={("League Spartan", "sans-serif")}
                  fontWeight="bold"
                  fontSize={{
                    lg: "25px",
                    md: "20px",
                    sm: "10px",
                    base: "10px",
                  }}
                >
                  Up To <span style={{ color: "#0EACD8" }}>50%</span> OFF
                </Text>
              </Box>
            </HStack>
          </Box>
          {/* for buttons */}
          <Stack width={"100%"}>
            <HStack
              bgColor={"#0EACD8"}
              justifyContent="center"
              padding={"20px"}
              gap="20px"
              display={"grid"}
              gridTemplateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(4,1fr)",
                lg: "repeat(6,1fr)",
              }}
            >
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Baby"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                BABY BOY
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Baby"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                BABY GIRL
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Toddlers"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                TODDLER BOY
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Toddlers"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                TODDLER GIRL
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Kids"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                GIRL
              </Button>
              </Link>
              <Link
                color={useColorModeValue("gray.700", "white.700")}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: useColorModeValue("gray.200", "white.700"),
                }}
                href="/Kids"
              >
                <Button fontSize={{ base: "12px", md: "20px", sm: "10px" }} width="100%">
                BOY
              </Button>
              </Link>
            </HStack>
          </Stack>
          {/* for button images */}
          <Stack width={"100%"}>
            <HStack
              justifyContent="center"
              padding={"1px"}
              gap="1px"
              flexWrap="wrap"
            >
              <VStack>
                <Image
                  src="https://images.ctfassets.net/621t91s0mnkp/75AReLJea4BMhvrqb4GOQM/1c9e163ecb3cab6fd8965be954de1ad2/car-011624-CS-faces-bg.png?fm=webp"
                  alt="babyboy"
                  width={'60%'}
                />
                <Text fontWeight={"600"}>BabyGirl</Text>
              </VStack>

              <VStack>
                <Image
                  src="https://images.ctfassets.net/621t91s0mnkp/36TEWbAAn2YjgJxEtOfEtN/b41cea9f0ca093f33ddfff1fc6a2c6b5/car-011624-CS-faces-bb.png?fm=webp"
                  alt="babygirl"
                  width={'60%'}
                />
                <Text fontWeight={"600"}>BabyBoy</Text>
              </VStack>
              <VStack>
                <Image
                  src="https://images.ctfassets.net/621t91s0mnkp/5P918A0lytB7VJQo3di3wb/51cc58926d24bff97b613c7193b44e90/car-011624-CS-faces-tg.png?fm=webp"
                  alt="Toddlerboy"
                  width={'60%'}
                />
                <Text fontWeight={"600"}>ToddlerGirl</Text>
              </VStack>
              <VStack>
                <Image
                  src="https://images.ctfassets.net/621t91s0mnkp/3o9nlGntcVgnNTc7L5lsAD/a7cbe48b3b0edde13f1fdcf5685a0288/car-011624-CS-faces-tb.png?fm=webp"
                  alt="Toddlergirl"
                  width={'60%'}
                />
                <Text fontWeight={"600"}>ToddlerBoy</Text>
              </VStack>
              <VStack>
                <Image
                  src="https://images.ctfassets.net/621t91s0mnkp/6ItHKimGGyibZja3HuYJ89/aa6a162cc4ff2b7cccc22a32d0ab2ce4/car-011624-CS-faces-kg.png?fm=webp"
                  alt="kidgirl"
                  width={'60%'}
                />
                <Text fontWeight={"600"}>KidGirl</Text>
              </VStack>
              <VStack>
                <Image
                  src="https://images.ctfassets.net/621t91s0mnkp/4nlDFe0E1b0hEN389Ci9HW/2e17e5ba1a4db0d750c2e786eebd36b0/car-011624-CS-faces-kb.png?fm=webp"
                  alt="kidboy"
                  width={'60%'}
                />
                <Text fontWeight={"600"}>KidBoy</Text>
              </VStack>
            </HStack>
          </Stack>

          {/* for shop favourites */}
          <Stack width={"100%"} paddingTop="40px" gap={"40px"}>
            <Heading textAlign={"center"} fontSize="50px" color={"#0EACD8"}>
              SHOP OUR FAVES
            </Heading>
            <HStack justifyContent="center" gap={"20px"} flexWrap="wrap">
              <Image
                src="https://images.ctfassets.net/621t91s0mnkp/1zBBigsPRWsxbXJY1zr07T/b1103b6a2e653f64622b4afcb9827257/car-112623-coins-tops-bottoms.png?fm=webp"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://images.ctfassets.net/621t91s0mnkp/7yx11cXNAZLtSkTU3wE0Br/f4771e3f463269d628c95ee1731ad44f/car-021524-CS-coins-shoes.png?fm=webp"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://images.ctfassets.net/621t91s0mnkp/647qVjQkndMnrnLMnVy1pm/6098563ff66b48eb38a750335c1d9b0f/car-031224-coins-dresses.png?fm=webp"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://images.ctfassets.net/621t91s0mnkp/7rv1PampFydiM4qbNTTSue/9857bfcbea2b8cbe29965acfe882780c/car-102623-coins-clearance.png?fm=webp"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://images.ctfassets.net/621t91s0mnkp/3MQ44LleZBCXzFFMcBoIfC/765e6b0b4021c2b81b4d90ed0388c07b/car-022024-CScoins-PJs.png?fm=webp"
                alt="favourites"
                width={"200px"}
              />
              <Image
                src="https://images.ctfassets.net/621t91s0mnkp/6QSz1GyDl14QoeqibvuvNk/8fd3bee868ec5332fb061c10050e6ceb/car-040424-coins-skiphop-bmsm.png?fm=webp"
                alt="favourites"
                width={"200px"}
              />
            </HStack>
          </Stack>

          {/* for features */}
          <HStack
            overflowX={"hidden"}
            pt="40px"
            flexWrap={"wrap"}
            alignItems="center"
            justifyContent={"center"}
          >
            
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/co_tri_brand/2022/q1/service-banner/serviceMat_Q1_2022_1.jpg?yocs=4E_4G_"
              alt="car"
              width={"373px"}
            />
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/co_tri_brand/2022/q1/service-banner/serviceMat_Q1_2022_2.jpg?yocs=4E_4G_"
              alt="car"
              width={"373px"}
            />
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/co_tri_brand/2022/q1/service-banner/serviceMat_Q1_2022_3.jpg?yocs=4E_4G_"
              alt="car"
              width={"373px"}
            />
            <Image
              src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/www.carters.com/v~4b.280/content/dam/ecomm/co_tri_brand/2022/q1/service-banner/serviceMat_Q1_2022_4.jpg?yocs=4E_4G_"
              alt="car"
              width={"373px"}
            />
          </HStack>
          <Stack flexDirection={"column"} pt="50px">
            <Heading textAlign={"center"} fontWeight="600">
              Don't miss these top trends
            </Heading>
            <HomeSlides data={data} />
          </Stack>
          <LoveCarters />
        </Stack>
      ) : (
        <Stack mt="160px" justifyContent={"center"} alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
        </Stack>
      )}
    </ErrorBoundary>
  );
};
export default HomePage;

function HomeSlides({ data }) {
  return (
    <Swiper
      breakpoints={{
        280: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>
        <ProductAddToCart/>
      </SwiperSlide>
      <SwiperSlide>
      <ProductAddToCart/>
        </SwiperSlide>
      <SwiperSlide>
      <ProductAddToCart/>
      </SwiperSlide>
      <SwiperSlide>
      <ProductAddToCart/>
      </SwiperSlide> */}

      {data?.map((el) => (
        <SwiperSlide
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={el.id}
        >
          <Link
            color={useColorModeValue("gray.700", "white.700")}
            _hover={{
              textDecoration: "none",
            }}
            href={`/Baby/${el.id}`}
          >
            <ProductAddToCart key={el.id} data={el} />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function LoveCarters() {
  return (
    <Stack pt={"4rem"} gap="30px">
      <Center flexDirection={"column"}>
        <Heading>Show us how you</Heading>
        <Heading>
          <span style={{ color: "#0EACD8" }}>#lovecarters</span>
        </Heading>
        <Text fontSize={"20px"} textAlign="center">
          And follow our new budding brand @LittlePlanet
        </Text>
      </Center>

      <HStack justifyContent={"center"} flexWrap="wrap">
        <Image
          src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjY5MjEyNzIxLjU2MjgzNjI3MDk3Mi5qcGVn.jpg?w=640&h=640&fit=cover"
          alt="image"
          width={"350px"}
        />
        <Image
          src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjkwODE0NjY2MzkzNC5qcGVn.jpg?w=640&h=640&fit=cover"
          alt="image"
          width={"350px"}
        />
        <Image
          src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjM5MjYzMzIxMDE5LmpwZWc=.jpg?w=640&h=640&fit=cover"
          alt="image"
          width={"350px"}
        />
        <Image
          src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk3LjI0ODUyMDk0ODE5OS5qcGVn.jpg?w=640&h=640&fit=cover"
          alt="image"
          width={"350px"}
        />
      </HStack>
    </Stack>
  );
}
