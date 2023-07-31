import {NextFunction, Request, Response} from "express";
import IContact from "@model/IContact";
import ContactService from "@service/ContactService";
import {port} from "@entrypoint";

class ContactController {
  static create = async (req: Request, res: Response, next: NextFunction) => {
    const {firstName, lastName, street, city} = req.body as IContact;
    try {
      const createdUUID = await ContactService.create(firstName, lastName, street, city);
      const resourcePath = `http://${req.hostname}:${port}/contacts/${createdUUID}`;
      res.status(201).location(resourcePath).send();
    } catch (err) {
      next(err);
    }
  }

  static getOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const contact = await ContactService.getOne(req.params.uuid);
      res.send(contact);
    } catch (err) {
      next(err);
    }
  }

  static getAll = async (req: Request, res: Response) => {
    const contacts = await ContactService.getAll();
    res.send(contacts);
  }

  static update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await ContactService.updateById(req.params.uuid, req.body as Partial<IContact>);
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  }
}

export default ContactController
