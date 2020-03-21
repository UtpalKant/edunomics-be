module.exports = {
    // use these route names wherever you require, it'll be easy to rename if required.
    routeNames:{
        // module wise route names.
        baseController: {
            bounceDetail: '/bounceDetails',
            getSavedData: '/getSavedData'
        }
    },

    // common HttpStatus Codes.
    httpStatusCodes:{
        OK: 200,
        InternalServerError: 500,
        BadRequest: 400,
        NotFound: 404,
        UnAuthorzed: 401
    }
}
