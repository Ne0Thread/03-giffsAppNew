import { Gif } from './../interfaces/git.interfaces';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { SearchResponse} from '../interfaces/git.interfaces';


@Injectable({providedIn: 'root'})
export class GifsService{

  public gifList : Gif[] = [];


  private appiKey:string = 'pjYKYsU7NzC7hvbjMveOaeYbWxYzw7Zw';
  private serviceurl: string = 'http://api.giphy.com/v1/gifs';
  private _tagHistory: string[]=[];
  private searchLimit: string = '10';


  constructor(private http : HttpClient ){}

  get tagsHistory(){
    return [...this._tagHistory];
  }
  private oganizeHistory(tag:string){
    tag.toLowerCase();
    if (this._tagHistory.includes(tag)){
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0,10);

  }

  searchTag(tag:string):void {
    if (tag.length === 0) return;
    this.oganizeHistory(tag);

    const params = new HttpParams()
    .set('api_key',this.appiKey)
    .set('limit', this.searchLimit)
    .set('q',tag);


    this.http.get<SearchResponse>(`${ this.serviceurl }/search`,{params})
    .subscribe( resp => {
      console.log(resp);
      this.gifList = resp.data;
    })
  }
}
