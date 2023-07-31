import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Contact, ContactService} from "../../contacts/contact.service";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {
  sub?: Subscription;
  contact$?: Observable<Contact | undefined>;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const id = +params['contactId']
      this.contact$ = this.contactService.getContactById(id)
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
