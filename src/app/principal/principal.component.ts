import { Component, OnInit } from '@angular/core';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  id = '';
  original_title = '';
  homepage = '';
  overview = '';
  imgSrc = 'https://image.tmdb.org/t/p/w220_and_h330_face/'

  constructor(private principalService: PrincipalService) {}

  ngOnInit(): void {
    this.principalService.listarFilmes().subscribe(data => {
      console.log(data);
      this.id = data.id;
      this.original_title = data.original_title;
      this.homepage = data.homepage;
      this.overview = data.overview;
      this.imgSrc = this.imgSrc + data.results[1].backdrop_path;

      // this.principalService.listarImagens('569094').subscribe(img => {
      //   console.log(img);
      //   this.imgSrc = this.imgSrc + img.posters[0].file_path;
      // });

    });
  }

}
