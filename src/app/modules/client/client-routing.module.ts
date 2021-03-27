import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '../core/components/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'investment-model',
        loadChildren: () => import('./modules/investment-model/investment-model.module').then(m => m.InvestmentModelModule)
      },
      {
        path: 'procedure',
        loadChildren: () => import('./modules/procedure/procedure.module').then(m => m.ProcedureModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
