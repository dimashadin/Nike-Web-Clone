import { LoginType, UserType } from "@/types";
import { database } from "../config/mongodb";
import { comparePass, hashPass } from "../helpers/bcrypt";
import { z } from "zod";
import { signToken } from "../helpers/jwt";
import { cookies } from "next/headers";

const UserSchema = z.object({
  name: z.string(),
  username: z.string().nonempty({ message: "Username is required" }),
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid Email Format" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(5, { message: "Password min 5 character" }),
});

const LoginSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Invalid Email Format" }),
  password: z
    .string()
    .nonempty({ message: "Password is required" })
    .min(5, { message: "Password min 5 character" }),
});

class UserModel {
  static collection() {
    return database.collection("user");
  }

  static async register(newUser: UserType) {
    UserSchema.parse(newUser);

    const userByUsername = await this.collection().findOne({
      username: newUser.username,
    });
    if (userByUsername) throw { message: "Username already exist", status: 400 };
    const userByEmail = await this.collection().findOne({
      email: newUser.email,
    });
    if (userByEmail) throw { message: "Email already exist", status: 400 };

    newUser.password = hashPass(newUser.password);
    await this.collection().insertOne(newUser);
  }

  static async login(userLogin: LoginType) {
    LoginSchema.parse(userLogin);

    const user = await this.collection().findOne({
      email: userLogin.email,
    });
    // console.log(user, "ini user findONe di login");

    if (!user) throw { message: "Invalid Email / Password", status: 401 };

    const compared = comparePass(userLogin.password, user.password);

    if (!compared) throw { message: "Invalid Email / Password", status: 401 };

    const access_token = signToken({ _id: user._id.toString() });

    const cookieStore = await cookies();

    cookieStore.set("Authorization", `Bearer ${access_token}`);

    return { access_token };
  }
}

export default UserModel;
