import React, { useEffect, useRef, useState } from "react";
import Styles from "../Styles/landing.module.css";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Keyboard, Pagination } from "swiper";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import {  solution, spotlight } from "../Data/Data";
import ProductCardPage from "./ProductCardPage";
import { useDispatch, useSelector } from "react-redux";
import { handleLandingProaductSucessfull, handleProaductFailure, handleProaductRequest } from "../../Redux/Products/action";
import axios from "axios";
import { Box,Text } from "@chakra-ui/react";

const images = {
  img1: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Home-Page-Carousel-Desktop--_-1_-5-Offer_1000x.jpg?v=1671095997",
  img2: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Banner_1200x399_2_1000x.jpg?v=1667308089",
  img3: "https://cdn.shopify.com/s/files/1/0054/6665/2718/files/1200x399_a6b1c804-4492-4b12-87ea-b6887a2f459d_1000x.jpg?v=1667825984",
};

export default function Landing() {
  const [icon, setIcon] = useState({
    image1: true,
    image2: false,
    image3: false,
  });
  const ref = useRef(null);
  function handleImg1() {
    ref.current.src = images.img1;
    setIcon({ ...icon, image1: true, image2: false, image3: false });
  }
  function handleImg2() {
    ref.current.src = images.img2;
    setIcon({ ...icon, image2: true, image1: false, image3: false });
  }
  function handleImg3() {
    ref.current.src = images.img3;
    setIcon({ ...icon, image3: true, image2: false, image1: false });
  }
  const landingProduct = useSelector((a)=>a.ProductReducer.landingProduct)
  const dispatch = useDispatch();
  async function getArrivalData() {
    dispatch(handleProaductRequest())
    try {
      const res = await axios.get(`http://localhost:8080/products?subCat=best&limit=10`);
      dispatch(handleLandingProaductSucessfull(res.data.data))
    } catch (e) {
      dispatch(handleProaductFailure())
    }
  }
  useEffect(() => {
    getArrivalData();
  },[]) 
  return (
    <>
      <Box className={Styles.main}>
        <Box className={Styles.mainDiv1}>
          <img src={images.img1} alt="img1" ref={ref} />
          <Box>
            {icon.image1 ? (
              <RiCheckboxBlankCircleFill onClick={handleImg1} />
            ) : (
              <RiCheckboxBlankCircleLine onClick={handleImg1} />
            )}
            {icon.image2 ? (
              <RiCheckboxBlankCircleFill onClick={handleImg2} />
            ) : (
              <RiCheckboxBlankCircleLine onClick={handleImg2} />
            )}
            {icon.image3 ? (
              <RiCheckboxBlankCircleFill onClick={handleImg3} />
            ) : (
              <RiCheckboxBlankCircleLine onClick={handleImg3} />
            )}
          </Box>
        </Box>
        <Box className={Styles.mainDiv2}>
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO-3-Perfumes-Category-Banner-Desktop_1000x.jpg?v=1671525247"
            alt="pic2"
          />
        </Box>
        <Box className={Styles.mainDiv3}>
          <Box>
            <Box></Box>
            <Text as="h3">BESTSELLERS</Text>
            <Box></Box>
          </Box>
          <Box>
            <Swiper className={Styles.swiper} id="swiper"

              centeredSlides={false}
              slidesPerGroupSkip={10}
              grabCursor={false}
              keyboard={{
                enabled: true,
              }}
              breakpoints={{
                // when window width is >= 640px
                320: {

                  slidesPerView: 0.9,
                  spaceBetween: 0,
                },
                426: {

                  slidesPerView: 1.9,
                  spaceBetween: 10,
                },
                // when window width is >= 770px
                770: {

                  slidesPerView: 3.9,
                  spaceBetween: 3,
                },
              }}

              scrollbar={false}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Pagination]}>
              {landingProduct?.map((elem) => (
                <SwiperSlide key={elem._id} className={Styles.swipers}>
                  <ProductCardPage itemsData={elem} cat="home"  />
                </SwiperSlide>
              ))}
            </Swiper>


          </Box>
        </Box>
        <Box className={Styles.mainDiv4}>
          <Box>
            <Box></Box>
            <h3>LUXURY FRAGRANCES</h3>
            <Box></Box>
          </Box>
          <Box>
            <Box>
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_men_680x680_93ec0e96-b585-41ac-ac9e-1fc6f0da22ac.progressive.jpg?v=1668680468"
                alt=""
              />
            </Box>
            <Box>
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_women_680x680_874eac89-47d7-4ab9-a551-3409bdd297b1.progressive.jpg?v=1668680528"
                alt=""
              />
            </Box>
            <Box>
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_little_luxuries_680x680_d5b66b77-97ea-4a41-9bce-df1c51b8d565.progressive.jpg?v=1668680602"
                alt=""
              />
            </Box>
            <Box>
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_unisex_680x680_48578230-4f27-408b-83f1-532e91205cef.progressive.jpg?v=1668680644"
                alt=""
              />
            </Box>
            <Box>
              <img
                src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_giftsets_680x680_a517f123-9964-4de1-82ce-fe3f135bfe1b.progressive.jpg?v=1668680684"
                alt=""
              />
            </Box>
          </Box>
        </Box>
        <Box className={Styles.mainDiv5}>
          <Box>
            <Box></Box>
            <h3>IN THE SPOTLIGHT</h3>
            <Box></Box>
          </Box>
          <Box>
            {spotlight.map((elem) => (
              <Box key={elem.id}>
                <Box>
                  <img src={elem.img} alt="img" />
                </Box>
                <Box>
                  <p>{elem.title}</p>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={Styles.mainDiv6}>
          <Box>
            <Box></Box>
            <h3>FIND SOLUTIONS FOR</h3>
            <Box></Box>
          </Box>
          <Box>
            {solution.map((elem) => (
              <Box key={elem.id}>
                <img src={elem.img} alt="" />
              </Box>
            ))}
          </Box>
        </Box>
        <Box className={Styles.mainDiv7}>
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brand-Comms-banner-V2_1200x.jpg?v=1660051394"
            alt=""
          />
        </Box>
        <Box className={Styles.mainDiv8}>{/* <Media/> */}</Box>
      </Box>
      <Box className={Styles.mainDiv9}>
        <Box>
          <Box>
            <h1>DOWNLOAD OUR APP</h1>
          </Box>
          <Box>
            <img
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/playstore_460x460_efa998ac-e0d8_460x460_e0d4e530-5eb5-41f2-92b1-eff208e927ca_460x460.png?v=1668758350"
              alt="Google play"
            />
            <img
              src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/app-store-card_460x460_35fc55d1_460x460_aa57d479-db4d-464e-8a98-38d58ef9c047_460x460.png?v=1668758362"
              alt="app store"
            />
          </Box>
        </Box>
        <Box>
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Download_our_App_Section_Image_V_460x460_b4f4ef6d-4148-42d5-8192-7064f7455d30_460x460.png?v=1668758387"
            alt="mobile"
          />
        </Box>
      </Box>
      {/* <Footer/> */}
    </>
  );
}

// const breakPoints = [
//   {
//     width: 1,
//     itemsToShow: 1,
//   },
//   {
//     width: 550,
//     itemsToShow: 2,
//   },
//   {
//     width: 768,
//     itemsToShow: 3,
//   },
//   {
//     width: 900,
//     itemsToShow: 4,
//   },
// ];
