import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  constructor(private formBuilder: FormBuilder) { }

  userForm = this.formBuilder.group({
    username: ['Username', Validators.required],
    password: ['', Validators.required],
  })
}
