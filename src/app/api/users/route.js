import { student } from "@/app/util/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = student
    return NextResponse.json(data,{status:200})
}

export async function POST(request){
    let payload = await request.json();
    console.log(payload.name)
    if(!payload.name || !payload.age){
        return NextResponse.json({reult:'Result Not Found'},{status:'400'})    
    }
    return NextResponse.json({reult:'New User Created'},{status:201})

}