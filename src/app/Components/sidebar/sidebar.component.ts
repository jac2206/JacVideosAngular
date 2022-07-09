import { Component, OnInit } from '@angular/core';
import { ServicioDeFavoritoService } from 'src/app/Service/servicio-de-favorito.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public listdeVideos:Array<any> = [];
  constructor(private servicioFavorito: ServicioDeFavoritoService) { }

  ngOnInit(): void {
    this.servicioFavorito.disparadorFavoritos.subscribe(dataVideo => {
      console.log("recibiendo data de los videos...", dataVideo);
      this.listdeVideos.push(dataVideo);
    })
    this.servicioFavorito.pokemonLista.subscribe(dataPokemon => {
      console.log("Pokemone list", dataPokemon);
    })
  }

}
