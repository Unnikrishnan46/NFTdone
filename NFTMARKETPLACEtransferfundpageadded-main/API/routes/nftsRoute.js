const express = require("express");
const catchAsync = require("../Utils/catchAsync");
const nftControllers = require("../controllers/nftControllers")
const authController = require("../controllers/authController")


const router = express.Router();

console.log("nft route working")
//TOP 5 NFTs BY PRICE
router.route('/top-5-nfts').get(nftControllers.aliasTopNFTs,nftControllers.getAllNfts)

//STATS ROUTE
router.route("/nfts-stats").get(nftControllers.getNFTsStats)

//GET MONTHLY PLAN
router.route("/monthly-plan/:year").get(nftControllers.getMonthlyPlan)



//ROUTER NFTs
router.route("/").get(authController.protect, nftControllers.getAllNfts).post( nftControllers.createNFT);

// router.route("/").get(nftControllers.getAllNfts).post(nftControllers.checkBody , nftControllers.createNFT);
router.route("/:id")
    .get(nftControllers.getSingleNFT)
    .patch(nftControllers.updateNFT)
    .delete(authController.protect,authController.restrictTo("admin","guide"), nftControllers.deleteNFT)


module.exports = router;