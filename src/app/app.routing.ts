import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { JeopardyComponent } from "./jeopardy/jeopardy.component";
import { AuthService } from "./services/auth.service";

const appRoutes: Routes = [
    { path: '', redirectTo: 'jeopardy', pathMatch: 'full' },
    { path: 'jeopardy', component: JeopardyComponent, canActivate: [AuthService] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);