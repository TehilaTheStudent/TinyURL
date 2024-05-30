import userModel from '../models/userModel.js'
import linkModel from '../models/linkModel.js'

const linksController = {
    getAll: async (request, response) => {
        try {
            // let links = await linkModel.find();
            // links = links.map(link => {
            //     let obj = 
            //     obj.newUrl = 'http://localhost:5000/smallUrl/' + element._id;
            //     return obj;
            // });
            //method 2
            let links = await linkModel.find()
            const customLinks=links.map(link=>{
                return {
                    id:link.id,
                    originalUrl:link.originalUrl,
                    userId:link.userId,
                    clicks:link.clicks,
                    sourceParamKey:link.sourceParamKey,
                    sources:link.sources,
                    newUrl:'http://localhost:5000/smallUrl/'+link.id
                }
            })
            response.send(customLinks)
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    getLinksByUserIdFromUserId: async (request, response) => {
        try {
            const userId = request.userId
            let links = await linkModel.find({ userId: userId })
            const customLinks=links.map(link=>{
                return {
                    id:link.id,
                    originalUrl:link.originalUrl,
                    userId:link.userId,
                    clicks:link.clicks,
                    sourceParamKey:link.sourceParamKey,
                    sources:link.sources,
                    newUrl:'http://localhost:5000/smallUrl/'+link.id
                }
            })
            // links.forEach(element => {
            //     element.newUrl='http://localhost:5000/smallUrl/'+element._id
            //     element.id=element._id
            //     element._id=undefined
            // });
            // response.json(links)
            // const transformedLinks = links.map(link => {
            //     const transformedLink = {
            //       ...link, // Spread the original link properties
            //       newUrl: `http://localhost:5000/smallUrl/${link._id}`, // Add custom field
            //       id: link._id // Add id field
            //     };
            //     delete transformedLink._id; // Remove _id field
            //     return transformedLink;
            //   });
            //   response.json(transformedLinks);
          
            response.send(customLinks);

        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    getLinkByLinkId: async (request, response) => {
        //for admin only
        try {
            const linkId = request.params.id
            const linkById = await linkModel.findById(linkId)
            if (linkById == undefined) {
                return response.json({ message: 'Link not found by id:' + linkId })
            }
            response.json(linkById)
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    getLinkByLinkIdFromUserId: async (request, response) => {
        //for user only
        try {
            const linkId = request.params.id
            const userId = request.userId
            const userById = await userModel.findById(userId)
            if (userById == undefined) {
                return response.status(404).json({ message: 'User not found by userId:' + userId });
            }
            const linkIndex = userById.linksIds.indexOf(linkId)
            if (linkIndex == -1) {
                return response.status(404).json({ message: `link id: ${linkId} not found for user id: ${userId}` })
            }
            const linkById = await linkModel.findById(linkId)
            if (!linkById) {
                return response.status(404).json({ message: 'Link not found by id:' + linkId });
            }
            response.json(linkById)
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    postToIdByUserId: async (request, response) => {
        try {
            const newLinkFromClient = request.body
            const userId = request.userId
            // console.log(userId)
            //TODO check if id is a specific length
            const userById = await userModel.findById(userId)
            // console.log(userById)
            if (userById == undefined) {
                return response.status(404).json({ message: 'User not found by userId:' + userId });
            }
            const newLinkToInsert = new linkModel({ ...newLinkFromClient, userId: userId })
            await newLinkToInsert.save()
            const user = await userModel.findByIdAndUpdate(
                userId,
                { $push: { linksIds: newLinkToInsert._id } },
                { new: true }
            )
            response.status(201).json({
                message: "new link added to user",
                link: newLinkToInsert,
                user: user
            })
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    putToIdByUserId: async (request, response) => {
        try {
            const linkId = request.params.id
            const linkToUpdate = request.body
            const { userId } = request
            const userById = await userModel.findById(userId)
            if (userById == undefined) {
                return response.status(404).json({ message: 'User not found by userId:' + userId });
            }
            const linkIndex = userById.linksIds.indexOf(linkId)
            if (linkIndex == -1) {
                return response.status(404).json({ message: `link id: ${linkId} not found for user id: ${userId}` })
            }
            linkToUpdate.userId = userId
            const updatedLink = await linkModel.findByIdAndUpdate(linkId, linkToUpdate, { new: true })
            if (!updatedLink) {
                return response.status(404).json({ message: 'Link not found by id:' + linkId });
            }
            response.json({
                message: "link updated for user",
                link: updatedLink,
                user: userById
            })
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    deleteToIdByUserId: async (request, response) => {
        try {
            const linkId = request.params.id
            const { userId } = request
            const userById = await userModel.findById(userId)
            // console.log(userById)
            if (userById == undefined) {
                return response.status(404).json({ message: 'User not found by userId:' + userId });
            }
            const linkIndex = userById.linksIds.indexOf(linkId)
            if (linkIndex == -1) {
                return response.status(404).json({ message: `link id: ${linkId} not found for user id: ${userId}` })
            }
            userById.linksIds.splice(linkIndex, 1);
            await userById.save();
            const deletedLink = await linkModel.findByIdAndDelete(linkId)
            if (!deletedLink) {
                return response.status(404).json({ message: 'Link not found  by id:' + linkId });
            }
            response.json({
                message: "link deleted for user",
                link: deletedLink,
                user: userById
            })
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    }
}

export default linksController