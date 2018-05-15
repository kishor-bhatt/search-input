import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchInputComponent } from './search-input/search-input.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
    {
        path: 'first',
        component: SearchInputComponent
    },
    {
        path: 'next',
        component: ResultComponent
    },
    {
        path: '**',
        redirectTo: 'first',
        component: SearchInputComponent
    } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
