import React from 'react'

function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
  } = props

  return (
    <form className='friend container'>
      <h2>Friend Form</h2>
      {/* ////////// TEXT INPUTS ////////// */}
      <label>Username:&nbsp;
      <input
          // 🔥 STEP 3A - THIS INPUT WANTS VALUE & CHANGE HANDLER!
          // Inputs render what they're told
          // Their current value ultimately comes from app state
          // At each keystroke, a change handler should fire
          value={values.username}
          onChange={onInputChange}
          name='username'
          type='text'
        /></label>
      <label>Email:&nbsp;
      <input
          // 🔥 STEP 3B - THIS INPUT WANTS VALUE & CHANGE HANDLER!
          value={values.email}
          onChange={onInputChange}
          name='email'
          type='text'
        /></label>

      {/* ////////// DROPDOWN ////////// */}
      <label>Lambda Role:&nbsp;
      <select
          // very similar to inputs of type text
          onChange={onInputChange}
          value={values.civil}
          defaultValue=''
          name='role'
        >
          <option value=''>Select an option</option>
          <option value='Student'>Student</option>
          <option value='Alumni'>Alumni</option>
          <option value='TL'>Team Lead</option>
          <option value='Instructor'>Instructor</option>
        </select></label>

      {/* ////////// CHECKBOXES ////////// */}
      <label><input
        // Checkboxes are different!
        // We do NOT set their 'value'
        // We use a 'checked' prop with a bool
        checked={values.hobbies.hiking}
        onChange={onCheckboxChange}
        name='hiking'
        type="checkbox" /> Hiking</label>
      <label><input
        checked={values.hobbies.reading}
        onChange={onCheckboxChange}
        name='reading'
        type="checkbox" /> Reading</label>
      <label><input
        checked={values.hobbies.coding}
        onChange={onCheckboxChange}
        name='coding'
        type="checkbox" /> Coding</label>

      {/* 🔥 STEP 3C - THIS BUTTON WANTS A HANDLER! */}
      <button onClick={onSubmit}>submit</button>
    </form>
  )
}

export default FriendForm
