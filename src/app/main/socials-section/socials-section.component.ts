import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socials-section',
  templateUrl: './socials-section.component.html',
  styleUrls: ['./socials-section.component.scss'],
})
export class SocialsSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  myGmail() {
    window.location.href =
      'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&to=edw1xandco@gmail.com&subject=MISSED%20CALL%20EZTRADER&body=Hi,%20its%20my%20business%20gmail%20%2C%0A%0A%20You%20can%20send%20me%20any%20kind%20of%20questions%20or%20messages%20%0A%0AI%27m%20looking%20forward%20to%20hearing%20from%20you%0A%0A%0APavlo%20Zinko%2C%0A%0A%0A%0A';
  }

  myTelegram() {
    window.location.href = 'https://t.me/SendMessagesHere';
  }

  myGit() {
    window.location.href = 'https://github.com/Edw1x';
  }
}
