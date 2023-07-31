import {Component, OnDestroy, OnInit} from '@angular/core';
import {Contact, ContactService} from "../../contacts/contact.service";
import {Observable, Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit, OnDestroy {
  sub?: Subscription;
  contact$?: Observable<Contact | undefined>;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {
  }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe((params) => {
      const id = +params['contactId'];
      this.contact$ = this.contactService.getContactById(id)
    })
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe()
  }
}
