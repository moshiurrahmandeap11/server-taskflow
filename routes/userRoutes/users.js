import { Router } from "express";
import pool from "../../database/db.js";

const router = Router();

// get all users for taskflow from postgres DB
router.get("/", async(req, res) => {
    try {
        const userData = await pool.query("SELECT * FROM users")
        if(userData.rows.length === 0){
            return res.status(400).json({
                success: false,
                message: "no user found on db",
                data: []
            });
        };

        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: userData.rows
        })
    } catch (error) {
        console.error("User fetching error", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        })
    }
});

export default router;