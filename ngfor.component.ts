import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  // title: string = 'Top 3 Bollywood movies';
   title: string = 'Top Singer Details';
  // movies: Movie[] = [
  //   { title: '3 Idiots', director: 'Rajkumar Hirani', cast: 'Amir khan', releaseDate: '2009'},
  //   { title: 'Lagaan', director: 'Ashutosh', cast: 'Amir khan', releaseDate: '2002'},
  //   { title: 'Tanhaji : The unsung Warrior', director: 'Om raut', cast: 'Ajay Devgan', releaseDate: '2020'}

  // ]
  songs: Song[] = [
    {singerName :'Sonu Nigam', songName:'Aas Pas Khuda', noOfsongs : 45, movieName : 'Anjaana Anjaani'},
    {singerName :'Lata Mangeshkar', songName:'Tuje Dekha To', noOfsongs : 200, movieName : 'DDLJ'},
    {singerName :'Arijit Singh', songName:'Tera Yaar Hoon Main', noOfsongs : 40, movieName : 'Sonu Ke Titu Ki Sweety'},
    {singerName :'Shreya Ghoshal', songName:'Dola Re Dola', noOfsongs : 70, movieName : 'Devdas'},
    {singerName :'Adarsh Shinde', songName:'Morya Morya', noOfsongs : 100, movieName : 'Dagadi chawl'}
  ]
 
  constructor() { }

  ngOnInit() {
  }

}
// class Movie {
//   title: string;
//   director: string;
//   cast : string;
//   releaseDate: string;
// }

class Song {
  singerName : String;
  songName : string;
  noOfsongs : number;
  movieName : string;
}