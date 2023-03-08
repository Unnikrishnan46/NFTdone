const mongoose = require("mongoose")
const slugify = require("slugify")
const validate = require("validator")




const nftSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"A NFT must have a name"],
        unique:true,
        trim:true,
        maxlength:[40,"nft must have 40 character"],
        minlength:[10,"nft must have 40 character"],
       // validate:[validator.isAlpha , "NFT name must only contain characters"]
    },
    slug:String,
    duration:{
        type:Number,
        required:[true,"must provide duration"],
    },
    maxGroupSize:{
        type:Number,
        required:[true,"must have a group size"]
    },
    difficulty:{
        type:String,
        required:[true,"must have difficulty"],
        enum:{
            values:["easy","medium","difficulty"],
            message:"Difficulty is either : easy , medium and difficulty"
        }
    },
    ratingsAverage:{
        type:Number,
        default:4.5,
        min:[1,"must have 1"],
        max:[5,"must have 5"]
    },
    ratingsQuantity:{
        type:Number,
        default:0
    },
    price:{
        type:Number,
        required:[true,"A NFT must have price"]
    },
    priceDiscount:{
        type:Number,
        validate:{
            validator:function(val){
                return val < this.price //200 > 100
            },
            message:"Discount price should be below regular price"
        }
    },
    summary:{
        type:String,
        trim:true,
        required:[true,"must provide the summary"]
    },
    description:{
        type:String,
        trim:true,
    },
    imageCover:{
        type:String,
        required:[true,"must provide the cover image"]
    },
    images:[String],
    createdAt:{
        type:Date,
        default:Date.now(),
        select:false 
    },
    startDates:[Date],
    secretNfts:{
        type:Boolean,
        default:false
    }
},{
    toJSON:{virtuals : true},
    toObject:{virtuals : true}
});



nftSchema.virtual("durationWeeks").get(function(){
    return this.duration / 7
})

//MONGOOSE MIDDLEWARE


//DOCUMENT MIDDLEWARE 
nftSchema.pre("save",function(next){
   this.slug = slugify(this.name,{lower:true})
   next();
})

// nftSchema.pre("save",function(next){
//     console.log("document will save....");
//     next();
// })

// nftSchema.post("save",function(doc,next){
//     console.log(doc)
//     next();
// });

//QUERY MIDDLEWARE
// nftSchema.pre("find",function(next){
    nftSchema.pre(/^find/,function(next){
    this.find({secretNfts:{$ne:true}})
    this.start = Date.now()
    next()
})


// nftSchema.pre("findOne",function(next){
//     this.find({secretNfts:{$ne:true}})
//     next()
// })


//----post
nftSchema.post(/^find/,function(doc,next){
    // console.log(`Query took time : ${Date.now()-this.start} times`)
    // console.log(doc);
    next()
})

//AGGREGATION MIDDLEWARE
nftSchema.pre("aggregate",function(next){
    this.pipeline().unshift({$match:{secretNfts:{$ne:true}}});
    // console.log(this.pipeline());
    next();
})



const NFT = mongoose.model("NFT",nftSchema);


module.exports = NFT