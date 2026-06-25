import error from "mongoose/lib/error/index.js";
import User from "../models/user.model.js";

export const Register = async (req, res,next) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
     const error = new Error("All Filed Requred")
     error.statusCode=400
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User Already Registerd" });
      return;
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
    res.status(500).json({ message: "Interal Server Error" });
  }
};

export const Loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).data({ message: "Bad Request" });
      return;
    }

    const findUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(401).json({ message: "Not Rigester User" });
      return;
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
