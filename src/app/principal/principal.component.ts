import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './principal.service';
import { IMovie } from '../model/IMovie';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  filmes: IMovie[] = [];

  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    
    this.principalService.listarFilmesFavoritos().subscribe(data => {
      this.filmes = data.results;
    });

  }

}







// this.principalService.listarFilmes().subscribe(data => {
    //   this.id = data.id;
    //   this.original_title = data.original_title;
    //   this.homepage = data.homepage;
    //   this.overview = data.overview;

    //   this.principalService.listarImagens('615656').subscribe(img => {
    //     console.log(img);
    //     this.imgSrc = this.imgSrc + img.posters[0].file_path;
    //   });

    // });