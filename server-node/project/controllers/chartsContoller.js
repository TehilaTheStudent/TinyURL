import linkModel from "../models/linkModel.js";
import userModel from "../models/userModel.js";

function sameDate(d1, d2) {
    if (d1.getYear() == d2.getYear() &&
        d1.getMonth() == d2.getMonth()) {
        return true
    }
    return false
}
function countClicksForDate(date, clicks) {
    let num=clicks.filter(click => sameDate(click.clickedAt, date)).length
    return num
}
function makeLabels(links) {
    let labels = []
    links.forEach(link => {
        link.clicks.forEach(click => {
            if (labels.findIndex(label => sameDate(click.clickedAt, label)) == -1) {
                labels.push(click.clickedAt)
            }
        })
    })
    return labels
}
function userClicksInDateCount(links, user, date) {
    let num = links.filter(link => link.userId == user.id).
        reduce((summer, currentLink) => {
          return  summer + countClicksForDate(date, currentLink.clicks)
        }, 0)
    return num
}
const chartsController = {
    getChartByLinkId: async (request, response) => {
        try {
            const linkId = request.params.id
            const linkById = await linkModel.findById(linkId)
            if (linkById == undefined) {
                return response.status(404).json({ message: 'Link not found by id:' + linkId });
            }
            if (request.role == 'user') {
                if (request.userId != linkById.userId) {
                    return response.status(404).json({ message: `link id: ${linkId} not found for user id: ${userId}` })
                }
            }
            let data = {
                labels: [],//descriptions
                datasets: [{ data: [] }],//clicksCount

            }
            linkById.sources.forEach(source => {
                data.labels.push(source.description)
                data.datasets[0].data.push(source.clicksCount)
            });
            return response.json({ data: data })
        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    getChartForUsers: async (request, response) => {
        try {
            const links = await linkModel.find()
            const users = await userModel.find()
            let data = {
                labels: [],
                datasets: []
            }
            users.forEach(user => {
                data.datasets.push({
                    label: user.name,
                    data: []
                })
            })
            data.labels = makeLabels(links)
            data.labels.forEach((label) => {
                users.forEach((user, userIndex) => {
                    data.datasets[userIndex].data.push(userClicksInDateCount(links, user, label))
                })
            })
            let shortLabels = data.labels.map(label => label.toISOString().substring(0, 10))
            data.labels = shortLabels
            response.json({ data: data })

        } catch (e) {
            response.status(400).json({ message: e.message })
        }
    },
    getChartByUserId: async (request, response) => {
        try {
            const userId = request.userId
            const links = await linkModel.find({ userId: userId })
            if (links == undefined) {
                response.status(400).json({ message: 'links not found for this user id' })
            }
            let data = {
                labels: [],
                datasets: []
            }
            links.forEach(link => {
                data.datasets.push({
                    label: link.originalUrl,
                    data: []
                })
            })
            data.labels = makeLabels(links)
            data.labels.forEach(label => {
                links.forEach((link, linkIndex) => {
                    data.datasets[linkIndex].data.push(countClicksForDate(label, link.clicks))
                })
            })
            let shortLabels = data.labels.map(label => label.toISOString().substring(0, 10))
            data.labels = shortLabels
            response.json({ data: data })
        } catch (e) {
            response.status(400).json({ message: e.message })
        }

    }
}
export default chartsController