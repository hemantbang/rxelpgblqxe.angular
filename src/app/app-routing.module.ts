import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'items', loadChildren: './items/items.module#ItemsModule' },
  { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/