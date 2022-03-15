import React from 'react'
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

function GoalForm() {
    const [text, setText] = useState('')

    const onSubmit = e => {
        e.preventDefault()
    }
  return (
    <section className='form'>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="text">Goal</label>
                <input type="text" name="text" id="text" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-group">
                <button className="btn btn-block">
                    Add goal
                </button>
            </div>
        </form>
    </section>
  )
}

export default GoalForm