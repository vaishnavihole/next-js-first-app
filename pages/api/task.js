function handler(req, res) {
    if (req.method === "GET") {
        res.json({
            status: true,
            message: 'read task api called',
        })
    }
    else if (req.method === "POST") {
        res.json({
            status: true,
            message: 'create task api',
        })
    }
    else {
        res.json({
            status: false,
            message: 'invalid api request',
        })
    }

}

export default handler