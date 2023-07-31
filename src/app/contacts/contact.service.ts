import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';

export class Contact {
  static nextId: number = 1
  private _id: number;

  constructor(private _firstName: string, private _lastName: string, private _street: string, private _city: string) {
    this._id = Contact.nextId++
  }

  public get id(): number {
    return this._id;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get street(): string {
    return this._street;
  }

  public get city(): string {
    return this._city;
  }
}

const CONTACTS: Contact[] = [
  new Contact("John", "Doe", "Marszałkowska 128/133", "01-234 Warszawa"),
  new Contact("Mariusz", "Paździoch", "Długa 24", "01-234 Miasteczkowo"),
  new Contact("Robocop", "XYZ", "0x1234", "Computer Memory"),
];

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts$: Observable<Contact[]> = of(CONTACTS)

  constructor() { }

  public getContacts(): Observable<Contact[]> {
    return this.contacts$
  }

  public getContactById(id: number): Observable<Contact | undefined> {
    return this.contacts$.pipe(
      map((contacts: Contact[]) => contacts.find(contact => contact.id === id)))
  }

  public addContact(contact: Contact) {
    console.log(`contact: ${contact.firstName} added.`)
  }
}
