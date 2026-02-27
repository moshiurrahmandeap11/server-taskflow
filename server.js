import cors from "cors";
import dotenv from "dotenv";
import express from "express";
dotenv.config();
const port = process.env.PORT;
const app = express();

// middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.send("taskflow server 1 is running")
});

app.listen(port, () => {
    console.log(`taskflow server running on port http://localhost:${port}`);
})