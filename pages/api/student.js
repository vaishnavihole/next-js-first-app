function handler(req, res){
    console.log(req.body)
    res.json({
        status: true,
        message: 'api call recived'
    })
}
export default handler