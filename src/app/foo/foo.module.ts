import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooRoutingModule } from './foo-routing.module';
import { FooComponent } from './foo.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [FooComponent, FirstComponent, SecondComponent],
  imports: [
    CommonModule,
    FooRoutingModule,
  ],
})
export class FooModule {
}
