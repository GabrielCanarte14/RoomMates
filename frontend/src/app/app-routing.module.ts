import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyroomsComponent } from './components/room/myrooms/myrooms.component';
import { CreateroomComponent } from './components/room/createroom/createroom.component';
import { EditroomComponent } from './components/room/editroom/editroom.component';

const routes: Routes = [
  {
    path: '', component: MyroomsComponent
  },
  {
    path: 'create/room', component: CreateroomComponent
  },
  {
    path: 'edit/room/:roomID', component: EditroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
