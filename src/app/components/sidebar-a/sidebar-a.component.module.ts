import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { IconsComponent } from "src/app/pages/icons/icons.component";
import { SidebarARoutes } from "./sidebar-a-routing";


@NgModule({
  imports: [
    BrowserAnimationsModule,
    NgbModule,
    RouterModule,
    SidebarARoutes,
    ToastrModule.forRoot()
  ],
  declarations: [IconsComponent],
  providers: [],
})
export class SidebarAModule {}
