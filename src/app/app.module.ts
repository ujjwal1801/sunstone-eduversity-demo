import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { ContentLayoutComponent } from './content-layout/content-layout.component'
import { ApplicationsModule } from './applications/applications.module';
import { OpportunitiesModule } from './opportunities/opportunities.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UserModule,
    ApplicationsModule,
    OpportunitiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
