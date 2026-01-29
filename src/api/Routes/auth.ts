import { Router } from "express";
import { changePassword, viewLogin, viewProfile, viewRefreshToken, viewRegister } from "../Controllers/auth";
import { isAuthenticated } from "../Middlewares/authMiddleware";
// import { hasPermission } from "../Middlewares/permission";
import { validate } from "../Middlewares/validate";
import { userSchema } from "../../Validations/general";

const router = Router();

router.post("/register", isAuthenticated, viewRegister);
router.post("/login", viewLogin);
router.get("/profile", isAuthenticated, viewProfile);
router.put("/change-password", isAuthenticated, changePassword);
router.post("/refresh-token", viewRefreshToken);

export default router;