import error from "mongoose/lib/error/index.js";
import User from "../models/user.model.js";

export const Register = async (req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All Feilds Required" });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.status(409).json({ message: "User Already Registerd" });
      return;
    }
    db.createUser(req.body)

    // const newuser =  User.create(
    //   fullName,
    //   email,
    //   password,
    //   phone,
    //   gender,
    //   dob,
    // );
  } catch (error) {}
};

export const Loginuser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).data({ message: "Bad Request" });
      return;
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json({ message: "login Succesfull" });
      return;
    }
  } catch (error) {}

  // await res.json({ massage: "login successfull from controal" });
};
export const Logout = (req, res) => {
  res.json({ massage: "logout successfull" });
};
