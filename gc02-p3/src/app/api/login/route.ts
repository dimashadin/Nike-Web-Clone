import { errorHandler } from "@/db/helpers/errorHandler";
import UserModel from "@/db/models/UserModel";
import { CustomErrorType } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await UserModel.login(body);

    return Response.json(result);
  } catch (error) {
    return errorHandler(error as CustomErrorType);
  }
}
