import Contact from "@db/Contact";
import IContact, {createContact} from "@model/IContact";
import ResourceNotFoundError from "@error/ResourceNotFoundError";

class ContactService {
  static create = async (firstName: string, lastName: string, street: string, city: string): Promise<string> => {
    const contact = createContact(firstName, lastName, street, city);
    await Contact.create(contact);
    return contact.uuid;
  }

  static getOne = async (uuid: string): Promise<IContact> => {
    const contact = await Contact.findById(uuid);
    if (!contact) {
      throw new ResourceNotFoundError(uuid);
    }
    return contact;
  }

  static getAll = async (): Promise<IContact[]> => await Contact.find();

  static updateById = async (uuid: string, updatedData: Partial<IContact>): Promise<void> => {
    const contact = await Contact.findById(uuid);
    if (!contact) {
      throw new ResourceNotFoundError(uuid);
    }
    Object.assign(contact, updatedData);
    await contact.save()
  }
}

export default ContactService
