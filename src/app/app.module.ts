import { ZenRouteModule } from "./app.route";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";

import { ZenbannerComponent } from "./zenbanner/zenbanner.component";
import { ZenmenuComponent } from "./zenmenu/zenmenu.component";
import { ZeninformationComponent } from "./zeninformation/zeninformation.component";
import { ZenfooterComponent } from "./zenfooter/zenfooter.component";
import { ProductComponent } from "./product/product.component";
import { ProductContainerComponent } from "./product-container/product-container.component";
import { CommentComponent } from "./comment/comment.component";
import { CommentContainerComponent } from "./comment-container/comment-container.component";
import { ZencolorDirective } from "./zencolor.directive";
import { CalculatorComponent } from "./calculator/calculator.component";
import { CalService } from "./cal.service";
import { FeedbackComponent } from "./feedback/feedback.component";
import { ZenIfDirective } from "./zen-if.directive";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { AuthorizerGuard } from "./_guards/authorizer.guard";
import { ZenLoginComponent } from "./zen-login/zen-login.component";
import { TformComponent } from "./tform/tform.component";
import { RformComponent } from "./rform/rform.component";
import { RgerrorsComponent } from './rgerrors/rgerrors.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ZenbannerComponent,
    ZenLoginComponent,
    ZenmenuComponent,
    ZeninformationComponent,
    ZenfooterComponent,
    ProductComponent,
    ProductContainerComponent,
    CommentComponent,
    CommentContainerComponent,
    ZencolorDirective,
    CalculatorComponent,
    FeedbackComponent,
    ZenIfDirective,
    PagenotfoundComponent,
    TformComponent,
    RformComponent,
    RgerrorsComponent
  ],
  imports: [BrowserModule, FormsModule, ZenRouteModule, ReactiveFormsModule],
  providers: [CalService, AuthorizerGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
