const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
    const total = parts.reduce((previous, next) => previous + next.exercises, 0)

    return (
        <p style={{
            fontWeight: "bold"
        }}>
            total of {total} exercises
        </p>
    )
}

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part key={part.id} part={part} />)}
        </>
    )
}

const Course = ({ courses }) => {
    const display = courses.map((c) => {
        return (
            <>
                <Header course={c.name} />
                <Content parts={c.parts} />
                <Total parts={c.parts} />
            </>
        )
    })
    return (
        <div>
            {display}
        </div>
    )
}

export default Course;
