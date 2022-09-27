import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-vehicule',
  templateUrl: './list-vehicule.component.html',
  styleUrls: ['./list-vehicule.component.css']
})
export class ListVehiculeComponent implements OnInit {
  cars=[
    {name:"Mercedes",marque:"XSM7-8",prix:28,img:'assets/img/v1.jfif'},
    {name:"Ferrar",marque:"TOJ78",prix:28,img:'assets/img/v2.jpg'},
    {name:"Peugeo",marque:"TOJ78",prix:28,img:'assets/img/v3.jpg'},
    {name:"Renault",marque:"TOJ78",prix:28,img:'assets/img/v4.jpg'},
    {name:"Citroen",marque:"TOJ78",prix:28,img:'assets/img/v5.jpg'},
    {name:"Peugeot",marque:"TOJ78",prix:28,img:'assets/img/v6.jpg'},
    {name:"Ford",marque:"TOJ78",prix:28,img:'assets/img/v7.jpg'},
    {name:"Audi",marque:"TOJ78",prix:28,img:'assets/img/v8.jpg'},
    {name:"BMW",marque:"TOJ78",prix:28,img:'assets/img/v9.jpg'},
    {name:"Mini",marque:"TOJ78",prix:28,img:'assets/img/v10.jpg'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
