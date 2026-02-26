import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { UserDetail } from './pages/user-detail/user-detail';
import { Registro } from './components/registro/registro';

export const routes: Routes = [
    {path:'home', component:Home},
    {path:'registro', component:Registro},
    {path: 'about', component:About},
    {path: 'contact', component:Contact},
     {path: 'users/:id', component:UserDetail},
     {path: '', pathMatch:'full', redirectTo:'home' },
     {path:'**', component: Home}

   

];
