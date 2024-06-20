const test = (req, res, next) => {
    try{
        res.status(200).json({
            "status": "success",
            "message": "OK!"
        })
    }
    catch(e){
        next(e);
    }
}

export default {test}