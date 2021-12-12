import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsRoutingModule } from './leads-routing.module';
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
    LeadsRoutingModule
  ]
})
export class LeadsModule { }
