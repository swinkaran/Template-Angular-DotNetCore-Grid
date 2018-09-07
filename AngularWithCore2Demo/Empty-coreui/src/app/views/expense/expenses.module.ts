import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { ExpensesComponent } from './expenses.component';
import { ExpensesRoutingModule } from './expenses-routing.module';

@NgModule({
  imports: [
    ExpensesRoutingModule,
    ChartsModule
  ],
  declarations: [ExpensesComponent ]
})
export class ExpensesModule { }
