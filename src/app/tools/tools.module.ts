import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { MatButtonModule } from "@angular/material/button";
import { CardComponent } from './card/card.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [ButtonComponent, CardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  exports: [ButtonComponent, CardComponent]
})
export class ToolsModule { }
