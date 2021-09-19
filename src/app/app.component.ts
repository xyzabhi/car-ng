import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts=[
    {
      username:'Johnsmith',
      title:'Clever Dog!',
      imageUrl:"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      content:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
      hastag1:"dog",
      hastag2:'loveanimal',

    },
    {
      username:'toddsnuk',
      title:'lol Dog!',
      imageUrl:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F10%2F13%2Fcorgi-dog-POPDOGNAME1020.jpg",
      content:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it',
      hastag1:"dogtheboss",
      hastag2:'german',

    },
    {
      username:'steven',
      title:'baklol Dog!',
      imageUrl:"https://cdn.britannica.com/s:690x388,c:crop/60/8160-050-08CCEABC/German-shepherd.jpg",
      hastag1:"doglikeno",
      hastag2:'pusdian',
      content:'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text'
    }
  ]
}
