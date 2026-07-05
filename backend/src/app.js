import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "QA AI Assistant API is running 🚀"
    });
});

export default app;