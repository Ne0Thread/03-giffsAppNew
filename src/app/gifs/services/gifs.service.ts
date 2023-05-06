import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class GifsService{

  private _tagHistory: string[]=[];


  constructor(){}

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

  searchTag(tag:string){
    if (tag.length === 0) return;
    this.oganizeHistory(tag);
    console.log(this._tagHistory);
  }
}
