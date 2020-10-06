// 👉 Importing React libs from node_modules folder
import React, { useState } from 'react'
import { render } from 'react-dom'
// 👉 App contains a more sophisticated form we'll flesh out later
import App from './components/App'

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: 'Fido', petType: 'dog' },
  { petName: 'Tweetie', petType: 'canary' },
  { petName: 'Goldie', petType: 'fish' },
]

const initialFormValues = { petName: '', petType: '' }

function SimpleForm() {
  // THE STATE
  const [pets, setPets] = useState(petsList)
  const [formValues, setFormValues] = useState(initialFormValues)
  // THE EVENT HANDLERS THAT ALTER STATE
  const change = evt => {
    const { name, value } = evt.target
    setFormValues({ ...formValues, [name]: value })
  }
  const submit = evt => {
    /*
    INSTRUCTOR: mention that without `preventDefault` the page would do a reload
    */
    evt.preventDefault()
    const newPet = { petName: formValues.petName.trim(), petType: formValues.petType.trim() }
    setPets(pets.concat(newPet))
    setFormValues(initialFormValues)
  }
  // THE JSX
  return (
    <div className='container'>
      <h1>Simple Form App</h1>
      {
        /*
        INSTRUCTOR: mention that using an index as key defeats the purpose of the key and leads to bugs.
        We do it here because it makes the warning in the console go away for this quick demo.
        Resources from the backend will have unique ids and those should be the keys.
        */
        pets.map((pet, idx) =>
          <div key={idx}>{pet.petName} is a {pet.petType}</div>)
      }
      <form onSubmit={submit}>
        <input value={formValues.petName} onChange={change} name='petName' type="text" />
        <input value={formValues.petType} onChange={change} name='petType' type="text" />
        <button>submit</button>
      </form>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    <App />
  </>
  , document.querySelector('#root')
)
