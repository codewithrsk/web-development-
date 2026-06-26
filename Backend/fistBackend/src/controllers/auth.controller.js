import error from "mongoose/lib/error/index.js";
import User from "../models/user.model.js";
import error from "mongoose/lib/error/index.js";

export const Register = async (req, res, next) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registred");
      error.statusCode = 409;
      return next(error);
    }

    const photourl = `https://placehold.co/600x400?text=${fullName.charAt(0).toUpperCase()}`;
    const photo = {
      url: photourl,
      publicId: null,
    };

    const newUser = await User.create({
      fullName,
      email,
      password,
      phone,
      gender,
      dob,
      photo,
    });

    res.status(201).json({ message: "user created Successfully" });
  } catch (error) {
    next(error);
  }
};

export const Loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
     const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const findUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new error("Not Rigester User")
      error.status(401)
      return next(error);
    }

    res.status(200).json({ message: "login Succesfull" });
    return;
  } catch (error) {
    res.status(500).json({ message: "Interal Server Error" });
  }

  // await res.json({ massage: "login successfull from controal" });
};
export const Logout = (req, res) => {
  res.json({ massage: "logout successfull" });
};
