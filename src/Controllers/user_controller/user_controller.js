import UserService from "../../Services/user_services/user_services"

const CreateUser = (req, res, next) => {
    return UserService.CreateUser(req, res)
}

const GetUser = (req, res, next) => {
    return UserService.GetUserById(req, res)
}

const GetUsers = (req, res, next) => {
    return UserService.GetUsers(req, res)
}

const UpdateUser = (req, res, next) => {
    return UserService.UpdateUser(req, res)
}

const DeleteUser = (req, res, next) => {
    return UserService.DeleteUser(req, res)
}

const Controller = {
    CreateUser,
    GetUser,
    GetUsers,
    UpdateUser,
    DeleteUser
}

export default Controller