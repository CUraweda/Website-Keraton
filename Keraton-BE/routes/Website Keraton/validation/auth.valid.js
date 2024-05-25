const { z } = require('zod');
const validate = require('../../middlewares/validation');

const validateCreateReservation = validate({
    email: z.string({
        required_error: "Please send Email"
    }),
    password: z.string({
        required_error: "Please send password"
    }),
})

module.exports = { validateCreateReservation }