import { coursesArray } from '../../data_courses/data_courses';
import { CourseComponent } from '../course_component/CourseComponent';

export const ModuleComponent = () => {
    return (
        <div>
            {coursesArray.map((course) => (
                <CourseComponent
                    key={course.title}
                    item={course}
                />
            ))}
        </div>
    );
};
