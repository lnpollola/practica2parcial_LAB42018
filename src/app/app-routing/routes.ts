import {Routes} from '@angular/router';

import { MenuComponent } from '../menu/menu.component';
import { DishdetailComponent } from '../dishdetail/dishdetail.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

import { ServidoresComponent } from '../servidores/servidores.component';
import { BasesComponent } from '../bases/bases.component';
import { AlmacarchivosComponent } from '../almacarchivos/almacarchivos.component';
import { UserFreeComponent } from '../user-free/user-free.component';

export const routes: Routes =[
    {path:'home', component:HomeComponent},
    {path:'menu', component:MenuComponent},
    {path:'aboutus', component:AboutComponent},
    {path:'servidores', component:ServidoresComponent },
    {path:'bases', component:BasesComponent},
    {path:'almacarchivos', component:AlmacarchivosComponent},
    {path:'free', component:UserFreeComponent},    
    {path:'', redirectTo: '/home',pathMatch:'full'}
]
 	