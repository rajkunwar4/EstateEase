import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    //hash the password before storing to db
    const hashedPass = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPass,
      },
    });

    console.log(newUser);

    res.status(201).json({
      message: "user created succesfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "failed to create user",
      success: false,
    });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  //we'll validate whether the user exists in the data base
  //check for password by bcrypt compare
  //if it passes the condition, then we let the user login
  //we create a cookie while he logs in
  try {
    const user = await prisma.user.findUnique({
      where: { username },
    });

    console.log(user);

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentails",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        message: "Invalid credentails",
      });
    }
    const age = 1000 * 60 * 60 * 24 * 7;
    const token = jwt.sign(
      { id: user.id, isAdmin: true },
      process.env.JWT_SECRET,
      {
        expiresIn: age,
      }
    );

    const { password: userPass, ...userInfo } = user;

    res
      .cookie("token", token, {
        httpOnly: true,
        maxAge: age,
        // secure: true,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Error loggin in",
    });
  }
};
export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({
    message: "logged out",
  });
};
