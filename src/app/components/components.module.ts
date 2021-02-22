import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { SidebarAComponent } from './sidebar-a/sidebar-a.component';
import { SidebarBComponent } from './sidebar-b/sidebar-b.component';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule],
  declarations: [FooterComponent, NavbarComponent, SidebarComponent, SidebarAComponent, SidebarBComponent],
  exports: [FooterComponent, NavbarComponent, SidebarComponent, SidebarAComponent]
})
export class ComponentsModule {}
