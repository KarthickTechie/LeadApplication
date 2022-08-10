import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./approuting.module";
import { HeaderComponent } from "./components/header/header.component";
import { LeadComponent } from "./components/lead/lead.component";
import { HomeComponent } from "./pages/home/home.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, LeadComponent, HomeComponent],
  imports: [BrowserModule, FormsModule, RouterModule, AppRoutingModule],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
