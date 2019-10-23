import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserResponse } from './result.model'
import { USER_API } from '../app.api'
import { DataService } from '../service/data.service'

@Component({
  selector: 'con-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  /* VARIVEIS */
  user: any
  repos: any
  totalStars: number

  userLogin: string = '';
  error: boolean = false;

  constructor(private http: HttpClient, private dataService: DataService) {
  }

  /* função de inicialização do component */
  ngOnInit(): void {
    // recuperar o usuário da tela de search
    this.userLogin = this.dataService.getUser()

    // chamar a função para carregar os dados do usuário
    this.searchSubmit();
  }

  /* Função para retornar os dados do usuário e do repositório*/
  searchSubmit() {
    // chamada da api passando o usuário para obter os dados do mesmo
    this.http.get<UserResponse>(`${USER_API}/${this.userLogin}`)
      .subscribe((data: {}) => { this.user = data; this.error = false; }, (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          this.error = true;
          console.log("Client-side error occured.");
        } else {
          this.error = true;
          console.log("Server-side error occured.");
        }
      });

    // chamada da api passando o usuário para obter os repositórios do usuário
    this.http.get<UserResponse>(`${USER_API}/${this.userLogin}/repos`)
      .subscribe((data: {}) => { this.repos = data; this.totalStars = this.countStart(this.repos);});
  }

  /* Função para fazer a contagem das estrelas do repositório */
  countStart(repos: Array<any>) {
    if (repos !== undefined) {
      let stars = 0;
      repos.forEach((repo) => {
        stars += repo.stargazers_count;
      });
      return stars;
    }
  }

}
