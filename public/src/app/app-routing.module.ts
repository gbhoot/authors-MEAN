import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'new', component: CreateComponent},
    {path: ':id', component: EditComponent},
    {path: 'authors/:aid/quotes', component: QuotesComponent},
    {path: 'authors/:aid/quotes/new', component: NewQuoteComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
