import { CustomErrorType } from "@/types";
import { ZodError } from "zod";

export const errorHandler = (error: CustomErrorType) => {
  let message = "Internal Server Error";
  let status = 500;

  if (error instanceof ZodError) {
    message = error.issues[0].message;
    status = 400
  } else if (error.message) {
    message = error.message;
    status = (error as CustomErrorType).status;
  }

  return Response.json(
    {
      message: message,
    },
    {
      status: status,
    }
  );
};
