import { useState } from 'react'
import "./app.css" 

const Button = ({onClick, text}) => {
    return <button onClick={onClick}>{text}</button>
}

const StatisticLine = ({text, value}) => {
    return (
        <>
            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>
        </>
    )
}

const Statistics = ({good, neutral, bad}) => {
    const totalScore = good + neutral + bad
    const averageScore = (good - bad) / totalScore
    const positivePercent = `${(good / totalScore) * 100}%`
    
    if (good !== 0 || neutral !== 0 || bad !== 0) {
        return (
            <>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <StatisticLine text="good" value={good}/>
                        <StatisticLine text="neutral" value={neutral}/>
                        <StatisticLine text="bad" value={bad}/>
                        <StatisticLine text="all" value={totalScore}/>
                        <StatisticLine text="average" value={averageScore}/>
                        <StatisticLine text="positive" value={positivePercent}/>
                    </tbody>
                </table>
            </>
        )
    } else {
        return (
            <div>No feedback given</div>
        )
    }
}

function App() {
    const [numGoodFeedback, setNumGoodFeedback] = useState(0)
    const [numNeutralFeedback, setNumNeutralFeedback] = useState(0)
    const [numBadFeedback, setNumBadFeedback] = useState(0)

    const incrementGood = () => setNumGoodFeedback(numGoodFeedback + 1)
    const incrementNeutral = () => setNumNeutralFeedback(numNeutralFeedback + 1)
    const incrementBad = () => setNumBadFeedback(numBadFeedback + 1)

    return (
        <>
            <h2>give feedback</h2>
            <Button onClick={incrementGood} text="good" />
            <Button onClick={incrementNeutral} text="neutral" />
            <Button onClick={incrementBad} text="bad" />

            <Statistics good={numGoodFeedback} neutral={numNeutralFeedback} bad={numBadFeedback} />
        </>
    );
}

export default App
