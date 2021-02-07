import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.scss']
})
export class ProjectsSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToWeddingDress(): void {
    window.location.href = 'http://roxolanastudio.com/';
  }
  goToWanderlance(): void {
    window.location.href = 'https://github.com/Edw1x/Wanderlance-Front-end';
  }
}
