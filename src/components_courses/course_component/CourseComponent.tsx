import type { ICourses } from '../../models/ICourses';

interface CourseComponentProps {
    item: ICourses;
}

export const CourseComponent = ({ item }: CourseComponentProps) => {
    return (
        <div className="border rounded p-4 mb-4">
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p>Месяцев: {item.monthDuration}</p>
            <p>Часов: {item.hourDuration}</p>

            <ul className="list-disc pl-5">
                {item.modules.map((module) => (
                    <li key={module}>{module}</li>
                ))}
            </ul>
        </div>
    );
};
