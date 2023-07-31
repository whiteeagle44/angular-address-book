import express from "express";
import ContactController from "@controller/ContactController";
import {body} from "express-validator";
import RequestBodyValidator from "@middleware/RequestBodyValidator";

const ContactRouter = express.Router();

// no elaborate custom regex validators this time :(
const AccountRequestBody = [
  body('firstName').isString(),
  body('lastName').isString(),
  body('street').isString(),
  body('city').isString()
]

ContactRouter.post('/', AccountRequestBody, RequestBodyValidator.validate, ContactController.create)
ContactRouter.get('/', ContactController.getAll)
ContactRouter.get('/:uuid', ContactController.getOne)
ContactRouter.patch('/:uuid', ContactController.update)

export default ContactRouter
