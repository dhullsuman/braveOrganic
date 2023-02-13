import React from "react";
import Styles from "../Styles/footer.module.css";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebookSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { IoLogoPinterest } from "react-icons/io";
import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box className={Styles.fullDiv}>
      <Box className={Styles.mainFooter}>
        <Box>
          <Text as="h4">BEST SELLERS</Text>
          <Text as="p">Dark Circles Removal Cream</Text>
          <Text as="p">Coffee For Face</Text>
          <Text as="p">Lip Scrub At Home</Text>
          <Text as="p">Perfume Gift Set For Men</Text>
          <Text as="p">Perfume Set For Women </Text>
        </Box>
        <Box>
          <Text as="h4">INFORMATION</Text>
          <Text as="p">Blogs</Text>
          <Text as="p">Newsroom</Text>
          <Text as="p">Terms & Conditions</Text>
          <Text as="p">Privacy Policy</Text>
          <Text as="p">Refund and Return</Text>
          <Text as="p">Shipping Policy</Text>
          <Text as="p">Bulk Order Inquiry</Text>
        </Box>
        <Box>
          <Text as="h4">SUPPORT</Text>
          <Text as="p">About Us</Text>
          <Text as="p">Contact Us</Text>
          <Text as="p">Order Tracking</Text>
          <Text as="p">All Products</Text>
          <Text as="p">FAQ</Text>
          <Text as="p">Sitemap</Text>
        </Box>
        <Box className={Styles.contact}>
          <Text as="h4">CONTACT US</Text>
          <Box>
            <FaHome size={50} />
            <Text as="p">
              Office Location: Plot no. 417, Udyog Vihar Phase III,
              Gurgaon,Haryana ,India
            </Text>
          </Box>
          <Box>
            <MdEmail size={20} />
            <Text as="p">shop@bellavitaorganic.com</Text>
          </Box>
          <Box>
            <HiPhone size={20} />
            <Text as="p">+91 9311732440</Text>
          </Box>
          <Text as="p">Timing:9:00 AM To 9:00 PM , Monday To Sunday</Text>
        </Box>
      </Box>
      <Box className={Styles.lastDiv}>
        <Box>
          <img
            src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/payments-stripe-footer_256x256_e_400x.png?v=1650369513"
            alt="icons"
          />
        </Box>
        <Box>
          <RxInstagramLogo />
          <FaFacebookSquare />
          <BsYoutube />
          <BsTwitter />
          <IoLogoPinterest />
        </Box>
        <Box>
          <Text as="p">
            © 2022, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.)
          </Text>
        </Box>
      </Box>
    </Box>
  );
}
