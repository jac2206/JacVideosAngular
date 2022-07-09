import { Component, OnInit, Input } from '@angular/core';
import { PokemonModel } from '../../Models/pokemon-model';
import { RestServiceService } from 'src/app/Service/rest-service.service';
import { ServicioDeFavoritoService } from 'src/app/Service/servicio-de-favorito.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})


export class CardComponent implements OnInit {
  @Input() dataEntranteCard:any;
  public image!: string;
  public listaPokemon:any = [];
  public pokemonList: any = null;
  constructor(
    private servicioFavorito: ServicioDeFavoritoService,
    private restService:RestServiceService
    ) { }

  ngOnInit(): void {
    this.image = "https://picsum.photos/536/354";
    console.log('data entrada', this.dataEntranteCard)
    // console.log(this.llamarRestPokemon2());
    // this.llamarRestPokemon2('mew');
  }

  agregarFavorito(){
    // var pokemon!:string;
    // if(this.dataEntranteCard.title === 'VIdeo 1'){
    //   pokemon = 'ditto'
    // }
    // if(this.dataEntranteCard.title === 'VIdeo 2'){
    //   pokemon = 'pikachu'
    // }
    // if(this.dataEntranteCard.title === 'VIdeo 3'){
    //   pokemon = 'groudon'
    // }
    // console.log(this.dataEntranteCard.title);
    this.servicioFavorito.disparadorFavoritos.emit({
      dataVideo:this.dataEntranteCard
    });
    // this.servicioFavorito.pokemonLista.emit({
    //   dataPokemon:this.llamarRestPokemon2(pokemon)
    // });
    // console.log(this.llamarRestPokemon2());
    console.log(this.llamarRestPokemon3());
  }

  private llamarRestPokemon(){
    // this.restService.get('https://pokeapi.co/api/v2/pokemon/ditto').subscribe((respuesta:any) => {
    //   console.log(respuesta['name'])
    //   console.log(respuesta)
    // });
    var listaPokemon
    this.restService.getTipado('https://pokeapi.co/api/v2/pokemon/ditto').subscribe((respuesta) => {
      console.log(respuesta.name)
      console.log(respuesta.sprites.back_default)
      console.log(respuesta)
      return respuesta;
    });
    // console.log(this.listaPokemon)
    return this.listaPokemon;
  }
  private llamarRestPokemon2(pokemon:string): any{
     this.restService.getTipadoPipe('https://pokeapi.co/api/v2/pokemon/' + pokemon).subscribe((respuesta) => {
      // console.log(respuesta.name)
      // console.log(respuesta.sprites.back_default)
      // console.log(respuesta)
      // return respuesta;
      this.listaPokemon = respuesta;
    });
    return this.listaPokemon;
  }
  private llamarRestPokemon3(){
    this.restService.getTipadoPipe('https://pokeapi.co/api/v2/pokemon/ditto').subscribe((respuesta) => {
      this.pokemonList = respuesta;
    });
    return this.pokemonList;
  }

}
