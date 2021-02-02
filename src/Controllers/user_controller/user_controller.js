import UserService from "../../Services/user_services/user_services"

//TODO: CREATE @User
const CreateUser = (req, res, next) => {
    return UserService.CreateUser(req, res)
}

//TODO: GET @User By Id
const GetUser = (req, res, next) => {
    return UserService.GetUserById(req, res)
}

//TODO: Get All @User
const GetUsers = (req, res, next) => {
    return UserService.GetUsers(req, res)
}

//TODO: Update @User
const UpdateUser = (req, res, next) => {
    return UserService.UpdateUser(req, res)
}

//TODO: Delete @User By Id
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