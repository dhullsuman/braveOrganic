import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./addressItem.module.css";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineLockOpen, MdOutlineMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import AddAddress from "./addAddress";
import { useState } from "react";
import AddModal from "./addModal";


export default function AddressItem() {
  const [select, setselect] = useState({ one: true, two: false })
  const [modalShow, setModalShow] = React.useState(false);

  const onChecked1 = () => {
    setselect({ one: true, two: false });
}
  const onChecked2 = () => {
    setselect({ one: false, two: true });
}
  return (
    <Box className={Styles.main}>
      <HStack className={Styles.main1}>
        <HStack>
          <FaUserCircle className={Styles.user} />
          <Text as="h2">Suman</Text>
          <HStack>
            <MdOutlineLockOpen className={Styles.lock} />
            <Text as="p">You are securely logged in</Text>
          </HStack>
        </HStack>
        <HStack>
          <FiPhone className={Styles.phone} />
          <Text as="p">1234354354</Text>
        </HStack>
      </HStack>
      <Box className={Styles.main2}>
        <Text as="p">Your order updates & invoice will be sent to</Text>
        <HStack>
          <MdOutlineMailOutline className={Styles.mail} />
          <Text as="p">suman1997dhull@gmail.com</Text>
          <Button>Change</Button>
        </HStack>
      </Box>
      <Box className={Styles.main3}>
        <HStack>
          <Text as="p">Delivery Address</Text>
          {/* <Text as="p" onClick={() => setModalShow(true)} cursor="pointer">+ Add Address</Text> */}
          <AddModal
        show={modalShow}
        onHide={(e) => setModalShow(e)}
      />
        </HStack>
        <HStack className={Styles.address}>
          <AddAddress check={select.one} onClick={ onChecked1} editForm={() => setModalShow(true)}/>
          <AddAddress check={select.two} onClick={onChecked2} editForm={() => setModalShow(true)}/>
        </HStack>
      </Box>
      <Box className={Styles.main4}>
        <Text as="p">Payment Method</Text>
        <Text as="p">Enter delivery address to access payment options</Text>
      </Box>
    </Box>
  );
}
