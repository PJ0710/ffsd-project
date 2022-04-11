const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const template=new Schema(
    {
        username:{
            type:String
        
        },
        
        email:{
            type:String
        
        },

        password: {
            type:String
            
        },

        mobile:{
            type:Number

        }

    
    },   { timestamps:true }
);

const details=mongoose.model('details',template);

module.exports=details;