import { Course } from './../course-list/course.model';
import { TableCourseService } from './service/table-course.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-course',
  templateUrl: './table-course.component.html',
  styleUrls: ['./table-course.component.css']
})
export class TableCourseComponent implements OnInit {


  courses: Course[];
  displayedColumns = ['id', 'subjectDescription', 'startDate', 'endDate', 'studentQuantity']
  displayedColumns2 = ['categoryId', 'description']

  constructor(private tableCourse: TableCourseService) {}

  ngOnInit(): void {
    this.tableCourse.getCourses()
    .subscribe(res => this.courses = res)
  }

}
