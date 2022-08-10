import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HomeComponent } from "./pages/home/home.component";
import { LeaddetailsComponent } from "./pages/leaddetails/leaddetails.component";
import { LeadsComponent } from "./pages/leads/leads.component";
import { PagenotfoundComponent } from "./pages/pagenotfound/pagenotfound.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { SignupComponent } from "./pages/signup/signup.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "leads/:leadid", component: LeaddetailsComponent },
  { path: "leads", component: LeadsComponent },
  { path: "signup", component: SignupComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
