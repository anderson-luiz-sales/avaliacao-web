import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Course } from '../course.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  private baseUrl = "http://localhost:8080/api/cast/v1/courses";

  constructor(private http: HttpClient, private sncackBar: MatSnackBar) { }

  showOnMessage(msg: string): void {
    this.sncackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(course: Course): Observable<Course> {
    return this.http.post<Course>(this.baseUrl, course);
  }

  getById(id: string): Observable<Course> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Course>(url)
  }

  update(course: Course): Observable<Course> {
    return this.http.put<Course>(this.baseUrl, course);
  }
}
