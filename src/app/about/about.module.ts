import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {AboutComponent} from './about.component'

const ROUTES: Routes =[
  {path:'', component:AboutComponent}
]
@NgModule({
  declarations:[AboutComponent],
  imports: [RouterModule.forChild((ROUTES))]
})

export class AboutModule{

}
