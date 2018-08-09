import { RouterModule,Routes } from "@angular/router";
import { CalculatorComponent } from "./calculator/calculator.component";
import { FeedbackComponent } from './feedback/feedback.component';
import { CommentComponent } from './comment/comment.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const ZenRoutes:Routes=[
    {
        path:'',
        component:CommentComponent
    },
    {
        path:'calculator',
        component:CalculatorComponent
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