import { inngest } from "@/config/inngest";
import Product from "@/models/Product";
import User from "@/models/User";
import { getAuth } from "@clerk/nextjs/server";
import { err } from "inngest/types";
import { NextResponse } from "next/server";



export async function POST(request) {
    try{

        const {userId} = getAuth(request);
        const{address, items} = await request.json();

        if( !address || items.lenght === 0){
            return NextResponse.json({success: false, message: 'Invalid data'});

        }

        const amount  =  await items.reduce(async(acc, item)=> {
            const product = await Product.findById(item.product);
            const prev = await acc;
            return prev + product.offerPrice * item.quantity;
        }, 0);

        await inngest.send({
            name: 'order/created',
            data:{
                userId,
                address,
                items,
                amount: amount + Math.floor(amount * 0.02),
                date: Date.now()
            }
        })

        //clear user cart

        const user = await User.findById(userId);
        user.cartItems = {};
        await user.save();

        return NextResponse.json({success: true, message: "Order created successfully"});

    }catch(error){
        console.log(error);
        return NextResponse.json({success: false, message: error.message});
    }
}