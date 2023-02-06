import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react'

export default function Media() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <div style={{display:"flex"}}>
      <marquee width="60%" direction="left" height="100px" display="flex">
    <div>Item 2</div>
</marquee>
      <marquee width="60%" direction="left" height="100px" display="flex">
    <div>Item 3</div>
</marquee>
      <marquee width="60%" direction="left" height="100px" display="flex">
    <div>Item 4</div>
</marquee>
      <marquee width="60%" direction="left" height="100px" display="flex">
    <div>Item 5</div>
</marquee>
      <marquee width="60%" direction="left" height="100px" display="flex">
    <div>Item 6</div>
</marquee>
      <marquee width="60%" direction="left" height="100px" display="flex">
    <div>Item 7</div>
</marquee>
    </div>
  )
}



const comment=[
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Elle_480x_db18e8ef-2f25-4299-9c39-73af4c300969_480x.jpg?v=1668756887",
      title:"Self-care is for everyone, and inspires people across age and gender. BVO as a brand understands this and has...."
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/HT_480x_b545adb6-c1eb-4124-95a7-caaf966d7290_480x.jpg?v=1668756900",
      title:"Bella Vita Oorganic has brought high quality yet affordable skincare, natural wellness and beauty products under.."
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Ani_480x_14446b4e-c91a-46df-a133-a95092fe484e_480x.jpg?v=1668756922",
      title:"Most Trusted Brand for Natural & Ayurvedic Products- Golden Glory Awards 2021"
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/TOI_480x_054031dd-5225-4f71-acad-9b9f4b404116_480x.jpg?v=1668756933",
      title:"Tied to the niche concerns of its customers in the beauty and skincare segments, Bella Vita's progress has..."
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Business-World_480x_675fdc77-c57e-4e1b-972b-2f9610e70985_480x.jpg?v=1668756945",
      title:"IDAM House of Brands' business model is about creating ayurvedic, and effective products for new-age.."
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/Pinkvilla_480x_a664ac7e-bd4f-45ae-b43a-b5ce25e0b530_480x.jpg?v=1668756957",
      title:"This pore-cleansing face wash with green tea extract helps in controlling sebum production making your skin.."
    },
    {
      img:"https://cdn.shopify.com/s/files/1/0054/6665/2718/files/IDiva_480x_1617c636-c0ed-4ed2-bb06-36e1906728ff_480x.jpg?v=1668756968",
      title:"Suitable for all skin types, Bvo's GrowBrow Hair Growth & Volume Oil strengthens hair follicles and roots o.."
    }
  ]