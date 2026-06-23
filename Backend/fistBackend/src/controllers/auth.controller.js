import User from "../models/user.model.js";

export const Register = async(req, res) => {
  try {
    const { fullName, email, password, phone, gender, dob } = req.body;

    if (!fullName || !email || !password || !phone || !gender || !dob) {
      res.status(400).json({ message: "All Feilds Required" });
      return;
    }

    const existingUser=await User.findOne({email})
    if(existingUser){
      res.status(409).json({ message: "User Already Registerd" });
      return;

    }
  } catch (error) {}
};

export const Loginuser = (req, res) => {
  res.json({ massage: "login successfull from controal" });
};
export const Logout = (req, res) => {
  res.json({ massage: "logout successfull" });
};
