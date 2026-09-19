import './App.css';

const coursesAndDurationArray:{title: string, monthDuration: number } [] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const App = () => {
    return (
        <>
            {coursesAndDurationArray.map((value, index) => (
                <p key={index}>
                    {value.title} — {value.monthDuration} месяцев
                </p>
            ))};

        </>
    );
}

export default App;

