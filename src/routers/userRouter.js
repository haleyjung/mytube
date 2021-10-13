import express from "express";

const userRouter = express.Router;

const handleEdit = (req, res) => res.send("Edit");

userRouter.get("/edit", handleEdit);

export default userRouter;
