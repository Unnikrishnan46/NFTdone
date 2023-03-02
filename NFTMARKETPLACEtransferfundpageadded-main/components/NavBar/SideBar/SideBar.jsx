// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { AiOutlineClose } from "react-icons/ai";
// import {
//   TiSocialFacebook,
//   TiSocialLinkedin,
//   TiSocialTwitter,
//   TiSocialYoutube,
//   TiSocialInstagram,
//   TiArrowSortedDown,
//   TiArrowSortedUp,
// } from "react-icons/ti";
// import { DiJqueryLogo } from "react-icons/di";

// //INTERNAL IMPORT
// import Style from "./SideBar.module.css";
// import images from "../../../img";
// import Button from "../../Button/Button";
// import { Router } from "next/router";

// const SideBar = ({ setOpenSideMenu, currentAccount, connectWallet }) => {
//   //------USESTATE
//   const [openDiscover, setOpenDiscover] = useState(false);
//   const [openHelp, setOpenHelp] = useState(false);

//   const router = useRouter();

//   //--------DISCOVER NAVIGATION MENU
//   const discover = [
//     {
//       name: "Collection",
//       link: "collection",
//     },
//     {
//       name: "Search",
//       link: "searchPage",
//     },
//     {
//       name: "Author Profile",
//       link: "author",
//     },
//     {
//       name: "NFT Details",
//       link: "NFT-details",
//     },
//     {
//       name: "Account Setting",
//       link: "account",
//     },
//     {
//       name: "Upload NFT",
//       link: "uploadNFT",
//     },
//     {
//       name: "Connect Wallet",
//       link: "connectWallet",
//     },
//     {
//       name: "Blog",
//       link: "blog",
//     },
//   ];
//   //------HELP CNTEER
//   const helpCenter = [
//     {
//       name: "About",
//       link: "aboutus",
//     },
//     {
//       name: "Contact Us",
//       link: "contactus",
//     },
//     {
//       name: "Sign Up",
//       link: "signUp",
//     },
//     {
//       name: "LogIn",
//       link: "login",
//     },
//     {
//       name: "Subscription",
//       link: "subscription",
//     },
//   ];

//   const openDiscoverMenu = () => {
//     if (!openDiscover) {
//       setOpenDiscover(true);
//     } else {
//       setOpenDiscover(false);
//     }
//   };

//   const openHelpMenu = () => {
//     if (!openHelp) {
//       setOpenHelp(true);
//     } else {
//       setOpenHelp(false);
//     }
//   };

//   const closeSideBar = () => {
//     setOpenSideMenu(false);
//   };


//   return (
    
//     <div className={Style.sideBar}>
      
//       <AiOutlineClose 
//         className={Style.sideBar_closeBtn}
//         onClick={() => closeSideBar()}
//       />

//       <div className={Style.sideBar_box}>
//         {/* <Image src={images.logo} alt="logo" width={150} height={150} /> */}
//         <p>
//           <a href="/">
//             <DiJqueryLogo className={Style.sideBar_box_logo} />
//           </a>
//         </p>
//         <p>
//           Discover the most outstanding articles on all topices of NFT & write
//           your own stories and share them
//         </p>
//         <div className={Style.sideBar_social}>
//           <a href="https://www.facebook.com/profile.php?id=100090633064523&mibextid=ZbWKwL">
//             <TiSocialFacebook />
//           </a>
//           <a href="https://www.linkedin.com/in/aoggle-business-595b14266/">
//             <TiSocialLinkedin />
//           </a>
//           <a href="https://twitter.com/Aoggle1">
//             <TiSocialTwitter />
//           </a>
//           <a href="https://www.youtube.com/@aoggle">
//             <TiSocialYoutube />
//           </a>
//           <a href="https://www.instagram.com/aoggle/">
//             <TiSocialInstagram />
//           </a>
//         </div>
//       </div>

//       <div className={Style.sideBar_menu}>
//         <div>
//           <div
//             className={Style.sideBar_menu_box}
//             onClick={() => openDiscoverMenu()}
//           >
//             <p>Discover</p>
//             <TiArrowSortedDown />
//           </div>

//           {openDiscover && (
//             <div className={Style.sideBar_discover}>
//               {discover.map((el, i) => (
//                 <p key={i + 1}>
//                   <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
//                 </p>
//               ))} 
//             </div>
//           )}
//         </div>

//         <div>
//           <div
//             className={Style.sideBar_menu_box}
//             onClick={() => openHelpMenu()}
//           >
//             <p>Help Center</p>
//             <TiArrowSortedDown />
//           </div>

//           {openHelp && (
//             <div className={Style.sideBar_discover}>
//               {helpCenter.map((el, i) => (
//                 <p key={i + 1}>
//                   <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
//                 </p>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>

//       <div className={Style.sideBar_button}>
//         {currentAccount == "" ? (
//           <Button btnName="Connect" handleClick={() => connectWallet()} />
//         ) : (
//           <Button
//             btnName="Create"
//             handleClick={() => router.push("/uploadNFT")}
//           />
//         )}

//         <Button btnName="Connect Wallet" handleClick={() => {}} />
//       </div>
//     </div>
//   );
// };

// export default SideBar;
