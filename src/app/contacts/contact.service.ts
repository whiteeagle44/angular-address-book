import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';

let idCounter = 1

export interface Contact {
  id: number,
  firstName: string,
  lastName: string,
  street: string,
  city: string
}

export const createContact = (firstName: string, lastName: string, street: string, city: string): Contact => {
  const id = idCounter++;
  return { id, firstName, lastName, street, city };
}

const CONTACTS: Contact[] = [
  createContact("John", "Doe", "Marszałkowska 128/133", "01-234 Warszawa"),
  createContact("Mariusz", "Paździoch", "Długa 24", "01-234 Miasteczkowo"),
  createContact("Robocop", "XYZ", "0x1234", "Computer Memory"),
];

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

  public addContact(contact: Contact) {
    console.log(`contact: ${contact.firstName} added.`)
    this.contacts$
      .pipe(
        switchMap((contacts) => {
          const updatedContacts = [...contacts, contact];
          return of(updatedContacts);
        })
      )
      .subscribe((updatedContacts) => {
        this.contacts$ = of(updatedContacts);
      });
  }

  public updateContactById(id: number, updatedData: Partial<Contact>): Observable<void> {
    console.log(updatedData);
    return this.contacts$.pipe(
      map((contacts: Contact[]) => {
        const idx = contacts.findIndex(c => c.id === id);
        if (idx !== -1) {
          const contact = contacts[idx];
          contacts[idx] = { ...contact, ...updatedData };
        }
      })
    )
  }
}
