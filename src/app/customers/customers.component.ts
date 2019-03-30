import { Component }   from '@angular/core';

import { CustomersService } from './customers.service';
import { UserService } from '../core/user.service';

@Component({
  template: `
    <h2>Customers of {{userName}}</h2>
    <router-outlet></router-outlet>
  `,
  providers: [ UserService ]
})
export class CustomersComponent {
  userName = '';
  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/