import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactsListComponent} from './layout/contacts-list/contacts-list.component';
import {AddContactComponent} from './layout/add-contact/add-contact.component';
import {ContactViewComponent} from "./layout/contact-view/contact-view.component";
import {ContactEditComponent} from "./layout/contact-edit/contact-edit.component";

const routes: Routes = [
  {path: '', component: ContactsListComponent},
  {path: 'contacts/add', component: AddContactComponent},
  {path: 'contacts/:contactId', component: ContactViewComponent},
  {path: 'contacts/:contactId/edit', component: ContactEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
