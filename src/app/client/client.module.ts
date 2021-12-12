import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ManageComponent } from './manage/manage.component';
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  declarations: [
    AddComponent,
    ManageComponent,
    ProfileComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
