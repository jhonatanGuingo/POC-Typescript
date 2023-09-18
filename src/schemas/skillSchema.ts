import Joi from "joi";


const skillSchema = Joi.object({
    lv: Joi.number().required(),
    name: Joi.string().required(),
    class: Joi.string().required()
})

export default skillSchema;