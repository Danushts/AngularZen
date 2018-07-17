import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { ZenbannerComponent } from "./zenbanner/zenbanner.component";
import { ZenmenuComponent } from "./zenmenu/zenmenu.component";
import { ZeninformationComponent } from "./zeninformation/zeninformation.component";
import { ZenfooterComponent } from "./zenfooter/zenfooter.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ZenbannerComponent,
    ZenmenuComponent,
    ZeninformationComponent,
    ZenfooterComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
