import { ZenLoginComponent } from './zen-login/zen-login.component';
import { RouterModule,Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator/calculator.component";
import { FeedbackComponent } from './feedback/feedback.component';
import { CommentComponent } from './comment/comment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthorizerGuard } from './_guards/authorizer.guard';
import { LoginComponent } from './login/login.component';
const ZenRoutes:Routes=[
    {
        path:'',
        component:CommentComponent
    },
    {
        path:'login/:msg',
        component:LoginComponent
    },
    {
        path:'calculator/:pass',
        component:CalculatorComponent,
        canActivate:[AuthorizerGuard]
    },
    {
        path:'feedback/:id',
        component:FeedbackComponent
    },
    {
        path:'**',
        component:PagenotfoundComponent
    }
];

export const ZenRouteModule = RouterModule.forRoot(ZenRoutes);