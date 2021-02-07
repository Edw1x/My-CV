import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  goToSocials(): void {
    window.location.href = '/My-CV/#socials';
  }

  goToProjects(): void {
    window.location.href = '/My-CV/#projects';
  }

  goToBio(): void {
    window.location.href = '/My-CV/#bio';
  }
}
