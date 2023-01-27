import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearcherComponent } from './components/searcher/searcher.component';
import { ViewDocumentsComponent } from './components/view-documents/view-documents.component';

const routes: Routes = [
  { path: '', redirectTo: '/searcher', pathMatch: 'full' },
  { path: 'searcher', component: SearcherComponent },
  { path: 'view-documents', component: ViewDocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
