import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokemonModel } from '../Models/pokemon-model';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  constructor(private httpClient: HttpClient) { }

  public get(url: string){
    return this.httpClient.get(url);
  }
  public getTipado(url: string){
    return this.httpClient.get<PokemonModel>(url);
  }

  public getTipadoPipe(url: string){
    return this.httpClient.get<PokemonModel>(url)
      .pipe(
        map( respuesta =>{
          return respuesta
        }
        )
      );
  }

  public getObservablePokemon(url: string): Observable<any>{
    return this.httpClient.get(url);
  }

}
