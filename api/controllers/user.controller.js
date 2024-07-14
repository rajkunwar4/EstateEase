import prisma from "../lib/prisma.js";
import bcrypt from "bcrypt";

// get all the users
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json({
      message: users,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Failed to get all users",
    });
  }
};

//get single user
export const getUser = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    res.status(200).json({
      message: user,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Failed to get user",
    });
  }
};

//update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  const tokenId = req.userId;
  let { password, ...otherInput } = req.body;
  if (id != tokenId) {
    return res.status(403).json({ message: "Not authorized" });
  }

  try {
    const updatedData = { ...otherInput };
    console.log("updated data:", updatedData);

    if (password) {
      updatedData.password = await bcrypt.hash(password, 10);
    }
    console.log(updatedData);
    const updatedUser = await prisma.user.update({
      where: { id },
      data: updatedData,
    });
    const { password: userPassword, ...allInfo } = updatedUser;
    return res.status(200).json({
      message: allInfo,
    });
    console.log(updatedUser);
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Failed to update user",
    });
  }
};

//delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  const tokenId = req.userId;
  try {
    if (id != tokenId) {
      return res.json({ message: "Not authorized" });
    }
    await prisma.user.delete({
      where: { id },
    });
    res.status(200).send({
      message: "Deleted user ",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Failed to delete user",
    });
  }
};
