import User from "../models/user.model.js";

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
    next();
  }
};

export const Loginuser = async (req, res, next) => {
  try {
    
    const { email, password } = req.body;
    if (!email || !password) {
      const error = new Error("All fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    
    
    if (!existingUser) {
      const error = new Error("Not Rigester User");
      error.statusCode=401;
      return next(error);
    }
    
    if (password !== existingUser.password) {
      const error = new error("Invalid password");
      error.status(401);
      return next(error);
    }
    

    res.status(200).json({
      message: "login Succesfull",
      data: existingUser,
    });
    return;

  } 
  catch (error) {
     next();
    res.status(500).json({ message: "Interal Server Error" });
  }
};
export const Logout = (req, res) => {
  res.json({ massage: "logout successfull" });
};
