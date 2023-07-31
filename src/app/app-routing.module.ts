import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsListComponent } from './layout/contacts-list/contacts-list.component';
import { AddContactComponent } from './layout/add-contact/add-contact.component';

const routes: Routes = [
  { path: '', component: ContactsListComponent },
  { path: 'contacts/add', component: AddContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
