import { Injectable } from '@angular/core';
import {BaseModel} from "../models/base-model";
import {Subject, Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  putData(data: BaseModel) {
    this.channel.next(data)
  }

  private channel = new Subject<BaseModel>()

  public channel$ = this.channel.asObservable();

}
