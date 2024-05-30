import userModel from '../models/userModel.js'
//for admin only
const usersController = {
    getAll: async (request, response) => {
        try {
            const users = await userModel.find()
            response.json(users)
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    getByIdFromRoute: async (request, response) => {
        try {
            const id = request.params.id
            const user = await userModel.findById(id)
            if (!user) {
                return response.status(404).json({ message: 'User not found by id:' + id });
            }
            response.json(user)
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
}

export default usersController