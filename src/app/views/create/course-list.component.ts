import { Course, Category } from './course.model';
import { CourseListService } from './service/course-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  

  course: Course = {
    id: '',
    subjectDescription: '',
    startDate: null,
    endDate: null,
    studentQuantity: 0,
    category: {categoryId: '', description: ''}
  }

  constructor(private courseListService: CourseListService) { }

  ngOnInit(): void {
  }

  createCourse(): void {
    this.courseListService.create(this.course).subscribe(() => {
    this.courseListService.showOnMessage('Curso salvo com sucesso');
    })
  }

  updateCourse(): void {
    this.courseListService.update(this.course).subscribe(() => {
      this.courseListService.showOnMessage('Atualizado com sucesso')
    })
  }
}
