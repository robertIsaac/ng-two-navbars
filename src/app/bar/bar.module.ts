import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BarRoutingModule } from './bar-routing.module';
import { BarComponent } from './bar.component';
import { ThirdComponent } from './third/third.component';
import { ForthComponent } from './forth/forth.component';


@NgModule({
  declarations: [BarComponent, ThirdComponent, ForthComponent],
  imports: [
    CommonModule,
    BarRoutingModule,
  ],
})
export class BarModule {
}
