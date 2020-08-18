import { Course } from './../../course-list/course.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableCourseService {

  private baseUrl = "http://localhost:8080/api/cast/v1/courses";

  constructor(private http: HttpClient) { }

  getCourses() {
    return this.http.get<Course[]>(this.baseUrl);
  }
}
