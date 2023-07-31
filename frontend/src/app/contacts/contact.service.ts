import {Injectable} from '@angular/core';
import {map, Observable, of} from 'rxjs';
import {CONTACTS} from './mock-contacts';

export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  street: string,
  city: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts$: Observable<Contact[]> = of(CONTACTS)

  constructor() {
  }

  public getContacts(): Observable<Contact[]> {
    return this.contacts$
  }

  public getContactById(id: number): Observable<Contact | undefined> {
    return this.contacts$.pipe(
      map((contacts: Contact[]) => contacts.find(contact => contact.id === id)))
  }

  // TODO fix bug which overrides non-supplied values with empty fields
  public updateContactById(id: number, updatedData: Partial<Contact>): Observable<void> {
    console.log(updatedData);
    return this.contacts$.pipe(
      map((contacts: Contact[]) => {
        const idx = contacts.findIndex(c => c.id === id);
        if (idx !== -1) {
          const contact = contacts[idx];
          contacts[idx] = {...contact, ...updatedData};
        }
      })
    )
  }
}
