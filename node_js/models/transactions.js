const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const template=new Schema(
    {
        trans_Date:{
            type:Date
        
        },
        
        Ticker:{
            type:String
        
        },

        Action: {
            type:String
            
        },

        Quantity:{
            type:Number
        },

        Price:{
            type:Number
        },
    
    
    },   { timestamps:true }
);

const transactions=mongoose.model('transactions',template);

module.exports=transactions;