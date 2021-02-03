import UserController from "../../Controllers/user_controller/user_controller";
const express =  require("express")

const UserRoutes = express.Router()

// Create User
UserRoutes.post("/", UserController.CreateUser)

// Get User by Id
UserRoutes.get("/:userId", UserController.GetUser)

// Get All User
UserRoutes.get("/", UserController.GetUsers)

// Update User with PUT
UserRoutes.put("/:userId", UserController.UpdateUser)

//Delete User
UserRoutes.delete("/:userId", UserController.DeleteUser)

export default UserRoutes