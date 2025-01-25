import { Injectable } from '@angular/core';
import { TODO } from '../todo.model';

export const TODO_LIST : TODO[] = [
  {id:1, title:"Node", isCompleted : false},
  {id:2, title:"Angular", isCompleted : false},
  {id:3, title:"React", isCompleted : false},
  {id:4, title:"Vue", isCompleted : true},
  {id:5, title:"Nest", isCompleted : true},
] 

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  async getAllTodos(){
    await sleep(1200);
    return TODO_LIST;
  }


}

async function sleep(ms: number) {
    return new Promise(res => setTimeout(res, ms))
}