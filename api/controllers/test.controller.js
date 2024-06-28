import jwt from "jsonwebtoken";

export const shouldBeLoggedIn = (req, res) => {
  console.log("req id", req.userId);

  res.status(200).json({ message: "u are authenticated" });
};
export const shouldBeAdmin = (req, res) => {
  if (!req.isAdmin) return res.status(403).json({ message: "Not authorized!" });

  res.status(200).json({ message: "u are authenticated" });
};
