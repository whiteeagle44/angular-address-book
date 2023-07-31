import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {MenuComponent} from './menu/menu.component';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {AddContactComponent} from './add-contact/add-contact.component';
import {ContactEditComponent} from "./contact-edit/contact-edit.component";
import {ContactViewComponent} from "./contact-view/contact-view.component";

@NgModule({
  declarations: [MenuComponent, ContactsListComponent, AddContactComponent, ContactViewComponent, ContactEditComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  exports: [MenuComponent],
})
export class LayoutModule {
}
