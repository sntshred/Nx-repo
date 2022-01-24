import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LsDemoComponent } from './ls-demo/ls-demo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    LsDemoComponent
  ],
  exports: [
    LsDemoComponent
  ],
})
export class SharedUiModule {}
