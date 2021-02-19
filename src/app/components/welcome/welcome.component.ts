import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  images = [
    {
      src:
        'https://cdn.pixabay.com/photo/2017/12/23/15/20/instrument-3035398_960_720.jpg',
      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2018/01/06/23/25/snow-3066167_960_720.jp',
      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2016/01/19/18/01/food-1150029_960_720.jpg',

      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2016/10/26/10/05/book-1771073_960_720.jpg',
      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2016/08/10/01/24/toolboxes-1582315_960_720.jpg',
      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2016/10/22/21/44/white-wine-1761771_960_720.jpg',
      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_960_720.jpg',
      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2018/01/18/19/06/time-3091031_960_720.jpg',

      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2014/12/31/11/41/shoes-584850_960_720.jpg',
      width: '100%',
    },
    {
      src:
        'https://cdn.pixabay.com/photo/2016/11/29/09/08/headphone-1868612_960_720.jpg',
      width: '100%',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
