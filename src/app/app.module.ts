import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { StockHomeComponent } from './stock/stock-home/stock-home.component';
import { StockCreateComponent } from './stock/stock-create/stock-create.component';
import { StockEditComponent } from './stock/stock-edit/stock-edit.component';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    StockHomeComponent,
    StockCreateComponent,
    StockEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
