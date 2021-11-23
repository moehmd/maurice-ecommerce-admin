import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-asidenavbar',
  templateUrl: './asidenavbar.component.html',
  styleUrls: ['./asidenavbar.component.css']
})
export class AsidenavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

  }
  viewNavigation(){
    this.router.navigate(["/Views"]);
  }
}
