import { useState } from 'react'

function App() {
    const [selected, setSelected] = useState(0)

    const anecdotes = [
        'If it hurts, do it more often.',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
        'The only way to go fast, is to go well.'
    ]
    
    const [votesPerAnectote, setVotesPerAnecdote] = useState(Array(8).fill(0))

    const randomRangeInt = (low, high) => Math.floor(Math.random() * (high - low) + low)

    const nextAnecdote = () => setSelected(randomRangeInt(0, anecdotes.length) % anecdotes.length)

    const addVote = () => {
        let newArray = [...votesPerAnectote]
        newArray[selected] += 1;
        setVotesPerAnecdote(newArray)
    }

    const anecdoteWithMostVotesIndex = () => {
        let voteIndexMax = 0
        for (let voteIndex = 1; voteIndex < votesPerAnectote.length; voteIndex += 1) {
            if (votesPerAnectote[voteIndex] > votesPerAnectote[voteIndexMax]) {
                voteIndexMax = voteIndex
            }
        }
        return voteIndexMax
    } 

    return (
        <>
            <h1>Anecdote of The Day</h1>
            <div>{anecdotes[selected]}</div>
            <div>has {votesPerAnectote[selected]} votes</div>
            <button onClick={addVote}>vote</button>
            <button onClick={nextAnecdote}>Next anecdote</button>

            <h1>Anecdote with most votes</h1>
            <div>{anecdotes[anecdoteWithMostVotesIndex()]}</div>
        </>
    )
}

export default App
