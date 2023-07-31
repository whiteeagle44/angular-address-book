import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactViewComponent } from './contact-view/contact-view.component';

@NgModule({
  declarations: [MenuComponent, ContactsListComponent, AddContactComponent, ContactViewComponent],
  imports: [CommonModule, RouterModule],
  exports: [MenuComponent],
})
export class LayoutModule {}
