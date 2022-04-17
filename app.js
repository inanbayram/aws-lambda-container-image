exports.handler = async (event, context) => {
    return {
        code: 200,
        message: {
            env: process.env,
            context: context,
            event: event
        }
    }
}