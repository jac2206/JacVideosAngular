import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'JacVideosApp';
  public listaVideos: Array<any> = [];
  ngOnInit(): void {
    this.listaVideos = [
      {
        title: 'VIdeo 1',
        subtitle: 'Subtitle 1',
        img: 'https://i.ytimg.com/vi/v3NH6kG-O3s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAjEcK8VfPBnkBFbd1EMQdO565yIw'
      },
      {
        title: 'VIdeo 2',
        subtitle: 'Subtitle 2',
        img: 'https://i.ytimg.com/vi/LVbUNRwpXzw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDYqqClUqpfbBgxSlAdsfRDdYGhiw'
      },
      {
        title: 'VIdeo 3',
        subtitle: 'Subtitle 3',
        img: 'https://i.ytimg.com/vi/SJ0gZJ1XeaA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKb1TtWnOWZQphz7_r57bpiePORQ'
      },
    ]
  }

}
