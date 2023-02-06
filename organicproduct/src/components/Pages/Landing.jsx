import React, { useRef, useState } from "react";
import Styles from "../Styles/landing.module.css";
import Carousel from "react-elastic-carousel"
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxBlankCircleFill,
} from "react-icons/ri";
import Items from "./Items";
// import Media from "./media";
// import Footer from "./Footer";
import { bestSeller, solution, spotlight } from "../Data/Data";

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
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.mainDiv1}>
          <img src={images.img1} alt="img1" ref={ref} />
          <div>
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
          </div>
        </div>
        <div className={Styles.mainDiv2}>
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/BVO-3-Perfumes-Category-Banner-Desktop_1000x.jpg?v=1671525247"
            alt="pic2"
          />
        </div>
        <div className={Styles.mainDiv3}>
          <div>
            <div></div>
            <h3>BESTSELLERS</h3>
            <div></div>
          </div>
          <div><Carousel className={Styles.carousl} breakPoints={breakPoints}>
            {bestSeller.map((elem)=><Items itemsData={elem}/>)}
            </Carousel></div>
        </div>
        <div className={Styles.mainDiv4}>
        <div>
            <div></div>
            <h3>LUXURY FRAGRANCES</h3>
            <div></div>
          </div>
          <div>
            <div><img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_men_680x680_93ec0e96-b585-41ac-ac9e-1fc6f0da22ac.progressive.jpg?v=1668680468" alt="" /></div>
            <div> <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_women_680x680_874eac89-47d7-4ab9-a551-3409bdd297b1.progressive.jpg?v=1668680528" alt="" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_little_luxuries_680x680_d5b66b77-97ea-4a41-9bce-df1c51b8d565.progressive.jpg?v=1668680602" alt="" /></div>
            <div><img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_unisex_680x680_48578230-4f27-408b-83f1-532e91205cef.progressive.jpg?v=1668680644" alt="" /></div>
            <div>
           <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/category_tile_giftsets_680x680_a517f123-9964-4de1-82ce-fe3f135bfe1b.progressive.jpg?v=1668680684" alt="" />
            </div>
          </div>
        </div>
        <div className={Styles.mainDiv5}>
        <div>
            <div></div>
            <h3>IN THE SPOTLIGHT</h3>
            <div></div>
          </div>
          <div>
            {spotlight.map((elem)=><div>
              <div>
                <img src={elem.img} alt="img" />
              </div>
              <div>
                <p>{elem.title}</p>
              </div>
            </div>)}
          </div>
        </div>
        <div className={Styles.mainDiv6}>
        <div>
            <div></div>
            <h3>FIND SOLUTIONS FOR</h3>
            <div></div>
          </div>
          <div>
            {solution.map((elem)=><div>
              <img src={elem.img} alt="" />
              
            </div>)}
          </div>
        </div>
        <div className={Styles.mainDiv7}>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Brand-Comms-banner-V2_1200x.jpg?v=1660051394" alt="" />
        </div>
        <div className={Styles.mainDiv8}>
              {/* <Media/> */}
        </div>
      </div>
      <div className={Styles.mainDiv9}>
        <div>
          <div><h1>DOWNLOAD OUR APP</h1></div>
          <div>
            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/playstore_460x460_efa998ac-e0d8_460x460_e0d4e530-5eb5-41f2-92b1-eff208e927ca_460x460.png?v=1668758350" alt="Google play" />
            <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/app-store-card_460x460_35fc55d1_460x460_aa57d479-db4d-464e-8a98-38d58ef9c047_460x460.png?v=1668758362" alt="app store" />
          </div>
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Download_our_App_Section_Image_V_460x460_b4f4ef6d-4148-42d5-8192-7064f7455d30_460x460.png?v=1668758387" alt="mobile" />
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}

const breakPoints=[{
  width:1,
  itemsToShow:1,
},
{
  width:550,
  itemsToShow:2,
},
{
  width:768,
  itemsToShow:3,
},
{
  width:900,
  itemsToShow:4,
}
]

