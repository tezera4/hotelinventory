import { AfterContentInit, Component, ContentChild, OnInit } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, AfterContentInit {

  constructor() { }
  @ContentChild(EmployeeComponent)  employeeComponent!:EmployeeComponent;

  ngOnInit(): void {
  }
  ngAfterContentInit(): void{
    console.log(this.employeeComponent);
    this.employeeComponent.employeeName="Tezera Demissie Seifu";
  }

}
