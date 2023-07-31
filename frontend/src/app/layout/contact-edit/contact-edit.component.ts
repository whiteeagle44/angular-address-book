import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contact, ContactService} from "../../contacts/contact.service";
import {Observable, Subscription} from "rxjs";
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  id$?: number;
  contact$?: Observable<Contact | undefined>;
  contactForm = this.formBuilder.group({
    firstName: [undefined, Validators.required],
    lastName: [undefined, Validators.required],
    street: [undefined, Validators.required],
    city: [undefined, Validators.required]
  });

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private formBuilder: FormBuilder
  ) {
  }

  submit(e: Event) {
    e.preventDefault();
    if (!this.id$) return;
    const updatedData = this.removeBlankFields(this.contactForm.value);
    const sub = this.contactService.updateContactById(this.id$, updatedData).subscribe();
    this.subs.push(sub);
  }

  ngOnInit(): void {
    const sub = this.route.params.subscribe((params) => {
      this.id$ = +params['contactId']
      this.contact$ = this.contactService.getContactById(this.id$)
    })
    this.subs.push(sub);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

  private removeBlankFields(obj: Object): Object {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));
  }
}
