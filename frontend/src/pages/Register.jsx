import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password, password2 } = formData

    const onChange = () => { }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaUser />
                </h1>
                <p>Please create an accont</p>
            </section>
            <section className="form">
                <form>
                    <div className="form-group">

                    </div>
                    <input type="text" className="form-control" id="name" name="name" value={name} placeholder="Enter your name" onchange={onChange} />
                </form>

            </section>
        </>
    )
}

export default Register