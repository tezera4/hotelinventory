import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule
  ],
  //this line of code is very imortant because if the module is imported 
  //in other module then to access the component it should be exported
  exports:[HeaderComponent]
})
export class HeaderModule { }
