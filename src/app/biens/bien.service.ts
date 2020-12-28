import { Injectable } from '@angular/core';
import { Bien } from './Bien';

@Injectable({
  providedIn: 'root'
})
export class BienService {

  constructor() { }

  private biens: Bien[] = [
    {id: 1, title: 'Call', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?call', price: 10000, sale: true, createAt: new Date(2014, 21, 12), category: 'category', },
    {id: 2, title: 'Home', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?hom', price: 3000, sale: false, createAt: new Date(2007, 4, 12) , category: 'category', },
    {id: 3, title: 'Bicycle', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?bicycle', price: 3000, sale: false, createAt: new Date(1999, 4, 12) , category: 'category', },
    {id: 4, title: 'Shoes', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?shoes', price: 3000, sale: false, createAt: new Date(1999, 4, 12) , category: 'category', },
    {id: 5, title: 'Bag', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?tv', price: 10000, sale: false, createAt: new Date(1999, 4, 12) , category: 'category', },
    {id: 6, title: 'Computer', description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio nihil volupt', image: 'https://source.unsplash.com/1600x900?computer', price: 10000, sale: true, createAt: new Date(1999, 4, 12) , category: 'category', },
  ];

  getAllBiens(): Bien[]{
    return this.biens;
  }

  getBienById(id: number): Bien{
    const bien = this.biens.find( (b: Bien) => {
      return b.id === id;
    });
    return bien;
  }

  addBien(bien: Bien){
    this.biens.push(bien);
  }

  // spread Operator ES6 (A rechercher)
  updateBien(bienUpdate){
    let bienAmodifier = this.biens.find((b: Bien) => {
      return b.id === bienUpdate.id;
    });
    if (bienAmodifier) {
      bienAmodifier = {...bienUpdate};
    }
  }

  getLastId(): number{
    return this.biens[this.biens.length - 1] ? this.biens[this.biens.length - 1].id : 0;
  }


}
