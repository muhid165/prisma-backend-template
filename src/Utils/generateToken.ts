import jwt from "jsonwebtoken";
import { JWTSECRET, REFRESH_TOKEN_SECRET } from "../Config/index";

// if (!JWTSECRET) throw new Error("JWTSECRET is not defined");
// if (!REFRESH_TOKEN_SECRET) throw new Error("REFRESH_TOKEN_SECRET is not defined");

export const generateAccessToken = (email: string): string => {
  return jwt.sign({ email }, JWTSECRET, { expiresIn: "1h" });
};

export const generateRefreshToken = (userId: string): string => {
  return jwt.sign({ userId }, REFRESH_TOKEN_SECRET, { expiresIn: "30d" });
};
