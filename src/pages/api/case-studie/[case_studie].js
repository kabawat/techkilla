import caseStudieSchema from '@/models/case-studie'

const handler = async (req, res) => {
    let slag = req?.query?.case_studie;
    try {
        if (req.method !== "GET") {
            throw new Error(`${req?.method} method not allowed`)
        }
        if (slag) {
            const data = await caseStudieSchema.findOne({ slag: slag })
            res.status(200).json({
                status: true,
                data: data,
                BaseUrl: process.env.SERVER_URL
            })
        } else {
            res.status(200).json({
                status: true,
                data: [],
                BaseUrl: process.env.SERVER_URL
            })
        }
    } catch (error) {
        res.status(405).json({
            status: false,
            massage: error?.message
        })
    }
}
export default handler