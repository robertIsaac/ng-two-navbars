import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarComponent } from './bar.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';

const routes: Routes = [
  {
    path: '',
    component: BarComponent,
    children: [
      {
        path: '',
        component: ThirdComponent,
      },
      {
        path: 'forth',
        component: ForthComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarRoutingModule {
}
