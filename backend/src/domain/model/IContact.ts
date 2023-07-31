import {v4} from "uuid";

interface IContact {
  uuid: string,
  firstName: string,
  lastName: string,
  street: string,
  city: string
}

export const createContact = (firstName: string, lastName: string, street: string, city: string): IContact => {
  const uuid = v4();
  return {uuid, firstName, lastName, street, city}
}

export default IContact
