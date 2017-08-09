import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Screenster';
  results: string[];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    const body = 'email=daniel.kucherenko%40agileengine.com&password=qwe123&remember=on';
    const options ={
      headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
    };

    // Make the HTTP request:
    this.http.post('http://demo.screenster.io/authenticate/dosignin', body, options)
    .subscribe(data => {
      console.log(data);
      // Read the result field from the JSON response.
      this.results = data['results'];
    });
  }

}
