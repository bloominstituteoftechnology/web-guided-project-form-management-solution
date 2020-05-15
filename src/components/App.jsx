import React, { useState } from 'react'
import { v4 as uuid } from 'uuid' // GROSS
import Friend from './Friend'
import FriendForm from './FriendForm'

const initialFriendsList = [
  // 👉 the shape of the actual friend object from API
  {
    id: uuid(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
    hobbies: [
      'hiking',
      'reading',
      'coding',
    ]
  },
]

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS (`value` is text-driven) /////
  username: '',
  email: '',
  ///// DROPDOWN (`value` is text-driven) /////
  role: '',
  ///// CHECKBOXES (`checked` is boolean-driven) /////
  hobbies: {
    hiking: false,
    reading: false,
    coding: false,
  },
}

export default function App() {
  const [friends, setFriends] = useState(initialFriendsList)

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues)// fix this using the state hook

  const onInputChange = evt => {
    // 🔥 STEP 4 - IMPLEMENT A CHANGE HANDLER (works for inputs and dropdowns)
    // which can change the state of inputs of type text

    // a) pull the name of the input from the event object
    const name = evt.target.name // either 'username' or 'email'
    // b) pull the value of the input from the event object
    const value = evt.target.value // who knows, the current value
    // c) set a new state for the whole form // ARGH

    setFormValues({
      // copy over all the properties from formValues
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const onCheckboxChange = evt => {
    // a) pull the name of the checkbox from the event
    const { name } = evt.target
    // b) pull whether checked true or false, from the event
    const isChecked = evt.target.checked
    // c) set a new state for the whole form
    setFormValues({
      ...formValues,
      hobbies: {
        ...formValues.hobbies,
        [name]: isChecked,
      }
    })
  }

  const onSubmit = evt => {
    // 🔥 STEP 5 - IMPLEMENT A SUBMIT HANDLER

    // a) don't allow the browser to reload!
    evt.preventDefault()
    // b) make a new friend object with an id, GROSS
    //    set up the new friend with the correct attributes
    //    using the information inside the state of the form
    const newFriend = {
      id: uuid(),
      username: formValues.username,
      email: formValues.email,
      role: formValues.role,
      hobbies: Object.keys(formValues.hobbies)
        .filter(hobby => formValues.hobbies[hobby] === true)
    }
    // c) update the list of friends in state with the new friend
    setFriends([...friends, newFriend])
    // d) optionally clear the form
    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      <header><h1>Friends App</h1></header>

      <FriendForm
        // 🔥 STEP 2 - THE FORM WANTS ITS FOOD!!!!
        // check implementation of FriendForm
        // to see what props it expects
        values={formValues}
        onInputChange={onInputChange}
        onCheckboxChange={onCheckboxChange}
        onSubmit={onSubmit}
      />

      {
        friends.map(friend => {
          return (
            <Friend key={friend.id} details={friend} />
          )
        })
      }
    </div>
  )
}

// 🔥 STEP 6 - DO STEPS 3, 4 & 5 FOR THE DROPDOWN
// 🔥 STEP 7 - DO STEPS 3, 4 & 5 FOR THE CHECKBOXES
