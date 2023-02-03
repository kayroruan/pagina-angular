import { Component } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent {

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'The Batman',
                imageUrl: '/assets/images/1.svg',
                duration: '2h 56min',
                rating: 3.9,
            },
            {
                id: 2,
                name: 'Doctor Strange in the Multiverse of Madness',
                imageUrl: '/assets/images/2.svg',
                duration: '2h 6min',
                rating: 3.4,
            },
            {
                id: 3,
                name: 'Thor: Love and Thunder',
                imageUrl: '/assets/images/3.svg',
                duration: '1h 58min',
                rating: 3.1,
            },
            {
                id: 4,
                name: 'Top Gun: Maverick',
                imageUrl: '/assets/images/4.svg',
                duration: '2h 10min',
                rating: 4.1,
            },
            {
                id: 5,
                name: 'Black Panther: Wakanda Forever',
                imageUrl: '/assets/images/5.svg',
                duration: '2h 41min',
                rating: 3.5,
            },
        ]
    }

}