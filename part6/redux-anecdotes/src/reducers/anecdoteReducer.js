import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const id = action.payload
      const anecdoteChosen = state.find(n => n.id === id)
      const newAnecdote = {
        ...anecdoteChosen,
        votes: anecdoteChosen.votes += 1,
      }
      state = state.map(anecdote => anecdote.id !== id ? anecdote : newAnecdote)
    },
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0,
      })
    },
    sortAnecdotes(state, action) {
      const sortedState = state.sort((a, b) => {
        if (a.votes < b.votes) {
          return 1
        } else if (a.votes > b.votes) {
          return -1
        } else {
          return 0
        }
      })

    return sortedState
    }
  }
})

// const reducer = (state = initialState, action) => {
//   console.log('state now: ', state)
//   console.log('action', action)

//   switch(action.type) {
//     case 'VOTE':
//       const id = action.id.id
//       const anecdoteChosen = state.find(n => n.id === id)
//       const newAnecdote = {
//         ...anecdoteChosen,
//         votes: anecdoteChosen.votes += 1,
//       }
//       const newState = state.map(anecdote => 
//         anecdote.id !== id ? anecdote : newAnecdote)
//       console.log(newState)
//       return newState

//     case 'NEW_ANECDOTE':
//       return [...state, action.data]

//     case 'ORDER_VOTE':
//       // create a descending order -> from the largest to the smallest
//       const sortedState = state.sort((a, b) => {
//         if (a.votes < b.votes) {
//           return 1
//         } else if (a.votes > b.votes) {
//           return -1
//         } else {
//           return 0
//         }
//       })

//     return sortedState
//   }
//   return state
// }

// export const voteAn = (id) => {
//   return {
//     type: 'VOTE',
//     id: { id }
//   }
// }

// export const addAn = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     data: {
//       content: content,
//       id: getId(),
//       votes: 0,
//     }
//   }
// }

// export const orderAn = () => {
//   return {
//     type: 'ORDER_VOTE'
//   }
// }

export const { voteAnecdote, createAnecdote, sortAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer