import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-vehicule',
  templateUrl: './add-vehicule.component.html',
  styleUrls: ['./add-vehicule.component.css']
})
export class AddVehiculeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    console.log(f.value);
  }

}
