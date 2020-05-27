import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FooComponent } from './foo.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  {
    path: '',
    component: FooComponent,
    children: [
      {
        path: '',
        component: FirstComponent,
      },
      {
        path: 'second',
        component: SecondComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooRoutingModule {
}
