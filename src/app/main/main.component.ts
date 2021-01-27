import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  config: any;
  fullpage_api: any;

  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {
      menu: '#menu',
      anchors: ['hero','bio','projects','socials'],
      // fullpage options


      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin, destination, direction) => {
        console.log(origin.index);
      }
    };
  }

  ngOnInit(): void {
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

}
