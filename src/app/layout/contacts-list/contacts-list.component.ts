import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact, ContactService } from 'src/app/contacts/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contacts: Observable<Contact[]> = this.contactService.getContacts()

  constructor(private contactService: ContactService) { }
}
