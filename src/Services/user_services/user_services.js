import UserModel from "../../Models/user_model/user_model";
import ResponseUtils from "../../utils/response/response";

const Create_User_Service = async (req, res) => {
    const user = new UserModel({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
        job_title: req.body.job_title
    })

    // Find if Email Already Exist
    const emailExist = await UserModel.findOne({email: req.body.email})
    if (emailExist) {
        return ResponseUtils.ErrorBadRequest(res, "Email Already taken")
    }

    await user
        .save()
        .then(item => ResponseUtils.CreatedResponse(res, item._doc))
        .catch(err => ResponseUtils.ErrorInternalResponse(res, "Invalid JSON Body"))
}

const Get_Users_Service = async (req, res) => {
    const users = await UserModel.find()
    if (!users) {
        return ResponseUtils.ErrorNotFoundResponse(res, "Users Not Found")
    }
    return ResponseUtils.OkResponse(res, users)
}

const Get_UserById_Service = async (req, res) => {
    const user = await UserModel.findById(req.params.userId)
    if (!user) {
        return ResponseUtils.ErrorNotFoundResponse(res, "User doesnt Exist")
    }
    return ResponseUtils.OkResponse(res, user._doc)
}

//TODO: Update @user
const Update_User_Service = async (req, res) => {

}

//TODO: Delete @user
const Delete_User_Service = async (req, res) => {

}

const Services = {
    GetUsers: Get_Users_Service,
    GetUserById: Get_UserById_Service,
    CreateUser: Create_User_Service,
    UpdateUser: Update_User_Service,
    DeleteUser: Delete_User_Service
}

export default Services