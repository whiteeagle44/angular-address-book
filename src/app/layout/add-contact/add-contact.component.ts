import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact, ContactService, createContact } from 'src/app/contacts/contact.service';
import { contactEmailValidator, contactNoSpacesValidator } from '../contact-validator';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contactForm = this.formBuilder.group({
    email: ['', [Validators.required, contactEmailValidator]],
    firstName: ['', [Validators.required, Validators.minLength(3), contactNoSpacesValidator]],
    lastName: ['', [Validators.required, Validators.minLength(3), contactNoSpacesValidator]],
    street: ['', Validators.required],
    city: ['', Validators.required]
  });

  constructor(private contactService: ContactService, private formBuilder: FormBuilder) {
  }

  onSubmit() {
    const formValue = this.contactForm.value
    if (formValue.email && formValue.firstName && formValue.lastName && formValue.street && formValue.city) {
      let contact: Contact = createContact(formValue.email, formValue.firstName, formValue.lastName, formValue.street, formValue.city)
      this.contactService.addContact(contact)
    } else {
      console.error("Contact was not added because of missing field values")
    }
  }
}
