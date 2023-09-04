import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url: string = "http://127.0.0.1:3000"
  constructor(private http: HttpClient) { }

  listRoom() {
    return this.http.get(this.url + '/api/rooms/');
  }

  addRoom() { }

  findRoom() { }

  updateRoom() { }

  deleteRoom() { }
}
