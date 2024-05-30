import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { NotFoundComponent } from '../components/not-found/not-cound.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../components/home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { RoleEnum } from '../models/role.enum';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', loadChildren: () => import('../modules/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard], data: { role: RoleEnum.admin } },
    { path: 'user', loadChildren: () => import('../modules/user.module').then(m => m.UserModule), canActivate: [AuthGuard], data: { role: RoleEnum.user } },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    providers: [],
    exports: [RouterModule]
})
export class AppRoutingModule {

}


