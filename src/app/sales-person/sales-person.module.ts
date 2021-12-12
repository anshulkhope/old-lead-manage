import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesPersonRoutingModule } from './sales-person-routing.module';
import { AddComponent } from './add/add.component';
import { ManageComponent } from './manage/manage.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AddComponent,
    ManageComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    SalesPersonRoutingModule
  ]
})
export class SalesPersonModule { }
