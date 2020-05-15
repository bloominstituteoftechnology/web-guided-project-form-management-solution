import React from 'react'

export default function FriendForm(props) {
  // THESE ARE THE **EXACT PROPS** FriendForm EXPECTS!!!
  // 🔥 STEP 3A - MAKE SURE THE PARENT IS INJECTING THESE PROPS
  const {
    values,
    onInputChange,
    onCheckboxChange,
    onSubmit,
  } = props

  return (
    // 🔥 STEP 3B - THIS FORM WANTS A SUBMIT HANDLER!
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>
        <button>submit</button>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username:&nbsp;
        <input
          // 🔥 STEP 3C - THIS INPUT WANTS VALUE & CHANGE HANDLER!
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
          value={values.email}
          onChange={onInputChange}
          name='email'
          type='text'
        /></label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role:&nbsp;
        <select
            // very similar to inputs of type text
            onChange={onInputChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='Student'>Student</option>
            <option value='Alumni'>Alumni</option>
            <option value='Instructor'>Instructor</option>
            <option value='TL'>Team Lead</option>
          </select></label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Hobbies</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
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

        <label>Coding <input
          checked={values.hobbies.coding}
          onChange={onCheckboxChange}
          name='coding'
          type="checkbox" /></label>
      </div>
    </form>
  )
}
