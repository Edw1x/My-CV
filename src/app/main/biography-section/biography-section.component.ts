import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-biography-section',
  templateUrl: './biography-section.component.html',
  styleUrls: ['./biography-section.component.scss'],
})
export class BiographySectionComponent implements OnInit {
  constructor() {}

  showGeneralInfo() {
    let uni = document.getElementById('General');
    let hard = document.getElementById('Hard');
    let soft = document.getElementById('Soft');
    let other = document.getElementById('Other');
    uni.style.display = 'block';
    hard.style.display = 'none';
    soft.style.display = 'none';
    other.style.display = 'none';
  }

  showSoftInfo() {
    let uni = document.getElementById('General');
    let hard = document.getElementById('Hard');
    let soft = document.getElementById('Soft');
    let other = document.getElementById('Other');
    uni.style.display = 'none';
    hard.style.display = 'none';
    soft.style.display = 'block';
    other.style.display = 'none';
  }

  showHardInfo() {
    let uni = document.getElementById('General');
    let hard = document.getElementById('Hard');
    let soft = document.getElementById('Soft');
    let other = document.getElementById('Other');
    uni.style.display = 'none';
    hard.style.display = 'block';
    soft.style.display = 'none';
    other.style.display = 'none';
  }

  showOtherInfo() {
    let uni = document.getElementById('General');
    let hard = document.getElementById('Hard');
    let soft = document.getElementById('Soft');
    let other = document.getElementById('Other');
    uni.style.display = 'none';
    hard.style.display = 'none';
    soft.style.display = 'none';
    other.style.display = 'block';
  }

  ngOnInit(): void {}
}
