import React from "react";
import Styles from "../Styles/footer.module.css";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
import {RxInstagramLogo} from "react-icons/rx"
import {FaFacebookSquare} from "react-icons/fa"
import {BsYoutube} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {IoLogoPinterest} from "react-icons/io"

export default function Footer() {
  return (
    <footer className={Styles.fullDiv}>
      <div className={Styles.mainFooter}>
      <div>
        <h4>BEST SELLERS</h4>
        <p>Dark Circles Removal Cream</p>
        <p>Coffee For Face</p>
        <p>Lip Scrub At Home</p>
        <p>Perfume Gift Set For Men</p>
        <p>Perfume Set For Women </p>
      </div>
      <div>
        <h4>INFORMATION</h4>
        <p>Blogs</p>
        <p>Newsroom</p>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Refund and Return</p>
        <p>Shipping Policy</p>
        <p>Bulk Order Inquiry</p>
      </div>
      <div>
        <h4>SUPPORT</h4>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Order Tracking</p>
        <p>All Products</p>
        <p>FAQ</p>
        <p>Sitemap</p>
      </div>
      <div className={Styles.contact}>
        <h4>CONTACT US</h4>
        <div>
          <FaHome size={50}/>
          <p>
            Office Location: Plot no. 417, Udyog Vihar Phase III,
            Gurgaon,Haryana ,India
          </p>
        </div>
        <div>
          <MdEmail size={20}/>
          <p>shop@bellavitaorganic.com</p>
        </div>
        <div>
          <HiPhone size={20}/>
          <p>+91 9311732440</p>
        </div>
        <p>Timing:9:00 AM To 9:00 PM , Monday To Sunday</p>
      </div>
      </div>
      <div className={Styles.lastDiv}>
        <div>
        <img src="https://cdn.shopify.com/s/files/1/0054/6665/2718/files/payments-stripe-footer_256x256_e_400x.png?v=1650369513" alt="icons" />
        </div>
        <div>
          <RxInstagramLogo/>
          <FaFacebookSquare/>
          <BsYoutube/>
          <BsTwitter/>
          <IoLogoPinterest/>
        </div>
        <div>
          <p>© 2022, Bella Vita Organic (IDAM Natural Wellness Pvt. Ltd.)</p>
        </div>
      </div>
    </footer>
  );
}
