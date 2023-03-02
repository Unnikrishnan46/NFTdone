import React, {useState, useEffect, useContext} from 'react';
import Image from "next/image";
import {FaEthereum, FaUserAlt} from 'react-icons/fa';


//INTERNAL IMPORT 
import Style from "../styles/transferFunds.module.css";
import formStyle from "../AccountPage/Form/Form.module.css";
import images from '../img';
import {Button, Loader} from '../components/componentsindex';


//IMPORT FROM CONTRACT DATA 
import { NFTMarketplaceContext } from '../Context/NFTMarketplaceContext';


const transferFunds = () => {
  const { currentAccount, transferEther } = useContext(NFTMarketplaceContext)
  const [ transferAmount, setTransferAmount ] = useState("");
  const [transferAccount, setTransferAccount ] = useState("");
  const [message, setMessage] = useState("");
  const [readMessage, setReadMessage] = useState("");
  const [openBox, setOpenBox] = useState(false)

  return (
    <div className={Style.transfer}>
      <div className={Style.transfer_box}>
        <h1>Transfer Ether</h1>
        <p>Lorem Ipsum dolar sit amt, consecutor amila false become arouse feel good
          ipsum dolar sit amt, consecutor amila.
        </p>
        <div className={Style.transfer_box_box}>
          <div className={Style.transfer_box_box_left}></div>
          <Image 
            src={images.transfer} 
            alt="images" 
            width={400} 
            height={400}
          />
          <div className={Style.transfer_box_box_right}>
            <h2>Now you can transfer ether</h2>\
            <div className={Style.transfer_box_box_right_info}>
              <p className={Style.transfer_box_box_right_info_deskTop}>
                Account
              </p>
              <p className={Style.transfer_box_box_right_info_mobile}>
                Account
              </p>
              <p>Balance: 353 ETH</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default transferFunds