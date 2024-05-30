import linkModel from "../models/linkModel.js"

const redirectController = {
    redirectByLinkId: async (request, response) => {
        try {
            const linkId = request.params.id
            const linkById = await linkModel.findById(linkId)

            if (linkById == undefined) {
                response.status(400).json({ message: 'Link not found by id: ' + linkId })
            }
            else {
                //do some logic, knowing that a click happened 
                const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress || null;
                const source = request.query[linkById.sourceParamKey]
                let newClick = {}
                if (source != undefined) {
                    const sourceDescription=linkById.sources.find(s=>s.value==source).description
                    newClick = {
                        ipAddress: ip,
                        sourceParamValue: sourceDescription
                    }
                    linkById.sources.find(s=>s.value==source).clicksCount++
                }
                else {
                    newClick = {
                        ipAddress: ip,
                    }
                }
               
                linkById.clicks.push(newClick)
                await linkById.save()
                response.redirect(linkById.originalUrl)
            }
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    }
}
export default redirectController

//TODO erro handling, and send proper erro codes in not found