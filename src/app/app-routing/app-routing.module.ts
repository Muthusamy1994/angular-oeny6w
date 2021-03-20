import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorpageComponent } from "../errorpage/errorpage.component";
import { LoginpageComponent } from "../loginpage/loginpage.component";
import { SignupComponent } from "../signup/signup.component";
import { SwitchpageComponent } from "../switchpage/switchpage.component";

const appRoutes: Routes = [
  { path: "login", component: LoginpageComponent },
  { path: "signup", component: SignupComponent },
  { path: "switchpage", component: SwitchpageComponent },
  { path: "errorpage", component: ErrorpageComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
