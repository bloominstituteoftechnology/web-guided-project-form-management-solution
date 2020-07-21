import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  // 🔥 STEP 3 - MAKE SURE THE PARENT IS INJECTING ALL NECESSARY PROPS
  const {
    values,
    update,
    submit,
  } = props

  const onChange = evt => {
    // a) pull the name of the input from the event object
    const name = evt.target.name // either 'username' or 'email'
    // b) pull the value of the input from the event object
    const { value } = evt.target // who knows, the current value
    // c) use the `update` callback coming in through props
    update(name, value)
  }

  const onSubmit = evt => {
    // a) don't allow the browser to reload!
    evt.preventDefault()
    // b) don't allow the submission, if any of the formValues is empty!
    if (!values.username || !values.email || !values.role) return
    // c) use the `submit` callback coming in through props
    submit()
  }

  return (
    // 🔥 STEP 4 - Give the form an `onSubmit` event handler
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>
        <button disabled={!values.username || !values.email || !values.role}>submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username:&nbsp;
          {/* 🔥 STEP 5 - Make an input of type `text` for username.
              Controlled inputs also need `value` and `onChange` props.
              Inputs render what they're told - their current value comes from app state.
              At each keystroke, a change handler should fire to change app state. */}
          <input
            name='username'
            type='text'
            placeholder='Enter a username...'
            maxLength='30'
            value={values.username}
            onChange={onChange}
          />
        </label>

        <label>Email:&nbsp;
          {/* 🔥 STEP 6 - Make an input of type `text` for email. */}
          <input
            name='email'
            type='email'
            placeholder='Enter an email...'
            maxLength='30'
            value={values.email}
            onChange={onChange}
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role:&nbsp;
          {/* 🔥 STEP 7 - Make dropdown for role. */}
          <select value={values.role} name='role' onChange={onChange}>
            <option value=''>-- Select a Role --</option>
            <option value='Student'>Student</option>
            <option value='TL'>Team Lead</option>
            <option value='Instructor'>Instructor</option>
            <option value='Alumni'>Alumni</option>
          </select>
        </label>
      </div>
    </form>
  )
}
