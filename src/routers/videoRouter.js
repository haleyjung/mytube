import express from "express";

const videoRouter = express.Router();

const handleWatch = (req, res) => res.send("Watch");

videoRouter.get("/watch", handleWatch);

export default videoRouter;
