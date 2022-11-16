import React from 'react'

function NewTaskForm() {
  return (
    <div className=''>
        <form className="form">
            <div className="form-group">
                <label htmlFor="title" className='form-label'>Task Title</label>
                <input type="text" name="task-title" id="task-title" placeholder='Create new' className='form-control' />
            </div>

            <div className="divider"></div>

            <div className="form-group">
                <label htmlFor="dates" className='form-label'>Time To Complete</label>
                <input type="date" name="start_date" id="start_date" placeholder='Start date' className='form-control' />
                <input type="date" name="end_date" id="end_date" placeholder='End date' className='form-control' />
            </div>

            <div className="divider"></div>

            <div className="form-group">
                <label htmlFor="title" className='form-label'>Hours Budgeted</label>
                <input type="text" name="hours" id="hours" placeholder='Enter Hours' className='form-control' />
            </div>

            <div className="form-group savebtn">
                <button type='submit' className='btn btn-primary' >Save</button>
            </div>

            <div className="divider"></div>
        </form>
    </div>
  )
}
 
export default NewTaskForm