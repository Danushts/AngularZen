import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ZenbannerComponent } from './zenbanner/zenbanner.component';
import { ZenMenuComponent } from './zen-menu/zen-menu.component';
import { ZeninformationComponent } from './zeninformation/zeninformation.component';
import { ZenfooterComponent } from './zenfooter/zenfooter.component';
import { TestdeleteComponent } from './testdelete/testdelete.component';
import { ZenLoginComponent } from './zen-login/zen-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ZenbannerComponent,
    ZenMenuComponent,
    ZeninformationComponent,
    ZenfooterComponent,
    TestdeleteComponent,
    ZenLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
