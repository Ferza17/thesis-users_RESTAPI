// Success Response

const OkResponse = (res, data) => {
    res.status(200).json({
        ...data
    })
}

const CreatedResponse = (res, data) => {
    res.status(201).json({
        ...data
    })
}

// Error 400 Bad Request
const ErrorBadRequest = (res, message) => {
    return res.status(400).json({
        message: message,
        status: 400
    })

}

// Error 404 Not Found
const ErrorNotFoundResponse = (res, message) => {
    return res.status(404).json({
        message: message,
        status: 404
    })
}

// Error 500
const ErrorInternalResponse = (res, message) => {
    return res.status(500).json({
        message: message,
        status: 500
    })
}

const ResponseUtils = {
    OkResponse, CreatedResponse, ErrorNotFoundResponse, ErrorInternalResponse, ErrorBadRequest
}

export default ResponseUtils
