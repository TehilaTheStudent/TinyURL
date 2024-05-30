import linkModel from "../models/linkModel.js";
import userModel from "../models/userModel.js";


const notAllowedUpdates = ['email', 'password', 'linksIds']

const userController = {
    post: async (request, response) => {
        try {
            const newUserFromClient = request.body
            const newUserToInsert = new userModel(newUserFromClient)
            await newUserToInsert.save()
            response.status(201).json(newUserToInsert)
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    getByIdFromToken: async (request, response) => {
        try {
            const user = await userModel.findById(request.userId)
            if (!user) {
                return response.status(404).json({ message: 'User not found by id:' + id });
            }
            response.json(user)
        }
        catch (e) {
            response.status(400).json({ message: e.message })
        }
    },

    putByIdFromToken: async (request, response) => {
        try {
            const userId = request.userId
            const userToUpdate = request.body
            const userById =await  userModel.findById(userId)
            if (userById==undefined) {
                return response.status(404).json({ message: 'User not found by id:' + id });
            }
            const allowedUserToUpdate = {}
            for (const key in userToUpdate) {
                if (!notAllowedUpdates.includes(key)) [
                    allowedUserToUpdate[key] = userToUpdate[key]
                ]
            }
            Object.assign(userById, allowedUserToUpdate)
            await userById.save()
            response.json(userById)
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },

    deleteByIdFromToken: async (request, response) => {
        try {
            const id = request.userId
            const deletedUser = await userModel.findByIdAndDelete(id)
            if (!deletedUser) {
                return response.status(404).json({ message: 'User not found  by id:' + id });
            }
            const linksIds = deletedUser.linksIds
            await linkModel.deleteMany({ _id: { $in: linksIds } })
            response.json(deletedUser)
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    }
}
export default userController