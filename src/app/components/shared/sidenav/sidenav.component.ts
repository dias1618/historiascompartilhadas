import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'side-nav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  callPrincipal($event:any){
    this.router.navigate(['/home']);
  }

  callUsuarios($event:any){
    alert('usuarios')
  }

  callConfiguracoes($event:any){
    alert('configuracoes')
  }

}
