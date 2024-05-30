import linkModel from "../models/linkModel.js";

//user/links/:id/sources

const sourcesController = {
    postSourceToLink: async (request, response) => {
        const linkId = request.params.id
        const userId = request.userId
        const linkById=await linkModel.findById(linkId)
        if (!linkById) {
            return response.status(404).json({ message: 'Link not found by id:' + linkId });
        }
        //what if there is token and the 
        if (linkById.userId!=userId) {
            return response.status(404).json({ message: `link id: ${linkId} not found for user id: ${userId}` })
        }
        const description=request.body.description
        if(description==undefined){
            return response.status(404).json({ message: `description was not found in body` })
        }
        const newSource={
            description:description,
            value:linkById.sources.length,
            clicksCount:0
        }
        linkById.sources.push(newSource)
        await linkById.save()
        response.status(201).json({
            message: "new source added to link",
            link: linkById,
            source: newSource
        })
       
    }
}



export default sourcesController