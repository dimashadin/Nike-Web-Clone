import { errorHandler } from "@/db/helpers/errorHandler";
import UserModel from "@/db/models/UserModel";
import { CustomErrorType } from "@/types";


export  async function POST(request: Request){

    try {
        const body = await request.json()
        await UserModel.register(body)

        return Response.json({message: "Register Success"})

        
    } catch (error) {
        return errorHandler(error as CustomErrorType)
    }
}