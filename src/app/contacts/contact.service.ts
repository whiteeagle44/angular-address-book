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
    console.log(`Searching for contact ${id}`)
    return this.contacts$.pipe(
      map((contacts: Contact[]) => contacts.find(contact => contact.id === id)))
  }
}
