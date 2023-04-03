import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();

app.use(express.json());

app.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post("/tasks", async (req: Request, res: Response) => {
  const { title } = req.body;
  const task = await prisma.task.create({
    data: { title },
  });
  res.json(task);
});

app.patch("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, completed },
  });
  res.json(task);
});

app.delete("/tasks/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const task = await prisma.task.delete({
    where: { id: Number(id) },
  });
  res.json(task);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3333");
});
