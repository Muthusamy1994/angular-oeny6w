import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { SignupComponent } from "./signup/signup.component";
import { LoginpageComponent } from "./loginpage/loginpage.component";
import { ErrorpageComponent } from "./errorpage/errorpage.component";
import { DummypageComponent } from "./dummypage/dummypage.component";
import { SwitchpageComponent } from "./switchpage/switchpage.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HorizandalnavbarComponent } from './horizandalnavbar/horizandalnavbar.component';
import { ApplicationComponent } from './application/application.component';
import { ConductusComponent } from './conductus/conductus.component';
import { LanguagePipe } from './language.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    SignupComponent,
    LoginpageComponent,
    ErrorpageComponent,
    DummypageComponent,
    SwitchpageComponent,
    NavbarComponent,
    HorizandalnavbarComponent,
    ApplicationComponent,
    ConductusComponent,
    LanguagePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
