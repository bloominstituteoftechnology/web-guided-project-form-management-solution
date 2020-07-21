import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Friend from './Friend'
import FriendForm from './FriendForm'

// 👉 the shape of the list of friends from API
const initialFriendsList = [
  {
    id: uuid(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
  },
]

// 👉 the shape of the state that drives the form
const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

// 👉 something to simulate async data fetching
const fakeAxios = () => {
  return Promise.resolve({ status: 200, success: true, data: initialFriendsList})
}

export default function App() {
  const [friends, setFriends] = useState([])

  // 🔥 STEP 1 - WE NEED STATE TO HOLD ALL VALUES OF THE FORM!
  const [formValues, setFormValues] = useState(initialFormValues) // fix this using the state hook

  useEffect(() => {
    fakeAxios().then(res => setFriends(res.data))
  }, [])

  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT A "FORM STATE CHANGER" which will be used inside inputs' `onChange`
    // It takes in the name of an input and its value, and updates `formValues`
    setFormValues({
      ...formValues,
      [inputName]: inputValue,
    })
  }

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT A SUBMIT HANDLER which will be used inside the form's `onSubmit`
    //    - make a new friend object
    //    - set up the new friend with the correct attributes
    //    using the information inside the state of the form
    const newFriend = {
      id: uuid(),
      username: formValues.username,
      email: formValues.email,
      role: formValues.role,
    }
    // d) update the list of friends in state with the new friend
    setFriends([ newFriend, ...friends])
    // e) clear the form
    setFormValues(initialFormValues)
  }

  return (
    <div className='container'>
      <header><h1>Friends App</h1></header>

      <FriendForm
        // 🔥 STEP 2 - The form component needs its props.
        //    Check implementation of FriendForm
        //    to see what props it expects.
        update={updateForm}
        submit={submitForm}
        values={formValues}
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
