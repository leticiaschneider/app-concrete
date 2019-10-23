import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../service/data.service'

@Component({
  selector: 'con-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  /* Variaveis */
  userLogin: string;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }

  /* Função para navegar para a pagina de resultados */
  searchSubmit(){
    // armazenar o valor 
    this.dataService.setUser(this.userLogin);
    // seguir para a proxima pagina
    this.router.navigate(['/result']);
  }
}
