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
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>
        {/* 🔥 STEP 3C - THIS BUTTON WANTS A HANDLER! */}
        <button>submit</button>
      </div>
      <div className='form-group inputs'>
        {/* ////////// TEXT INPUTS ////////// */}
        <h4>General information</h4>
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
        <label>Role:&nbsp;
        <select
            // very similar to inputs of type text
            onChange={onInputChange}
            value={values.civil}
            defaultValue=''
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='Student'>Student</option>
            <option value='Alumni'>Alumni</option>
            <option value='TL'>Team Lead</option>
            <option value='Instructor'>Instructor</option>
          </select></label>
      </div>

      <div className='form-group checkboxes'>
        {/* ////////// CHECKBOXES ////////// */}
        <h4>Hobbies</h4>
        <label>Hiking <input
          // Checkboxes are different!
          // We do NOT set their 'value'
          // We use a 'checked' prop with a bool
          checked={values.hobbies.hiking}
          onChange={onCheckboxChange}
          name='hiking'
          type="checkbox" /></label>
        <label>Reading <input
          checked={values.hobbies.reading}
          onChange={onCheckboxChange}
          name='reading'
          type="checkbox" /></label>
        <label>Coding<input
          checked={values.hobbies.coding}
          onChange={onCheckboxChange}
          name='coding'
          type="checkbox" /></label>
      </div>
    </form>
  )
}

export default FriendForm
