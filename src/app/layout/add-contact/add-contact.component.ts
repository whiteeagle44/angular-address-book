import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Contact, ContactService } from 'src/app/contacts/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  addContactForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
  });

  constructor(private contactService: ContactService) { }

  onSubmit() {
    const formValue = this.addContactForm.value
    if (formValue.firstName && formValue.lastName && formValue.street && formValue.city) {
      let contact: Contact = new Contact(formValue.firstName, formValue.lastName, formValue.street, formValue.city)
      this.contactService.addContact(contact)
    } else {
      console.error("Contact was not added because of missing field values")
    }
  }
}
