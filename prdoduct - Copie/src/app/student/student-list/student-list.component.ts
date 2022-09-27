import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    students=[
      {lastname:"ibranim",firstname:"Ahamadz",age:28,img:'assets/img/img1.jfif'},
      {lastname:"ibranim2",firstname:"Ahamadz",age:85,img:'assets/img/img2.jfif'},
      {lastname:"ibranim3",firstname:"Ahamadz",age:108,img:'assets/img/img3.jfif'},
      {lastname:"ibranim4",firstname:"Ahamadz",age:866,img:'assets/img/img4.jfif'},
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
