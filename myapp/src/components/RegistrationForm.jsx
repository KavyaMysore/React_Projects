import React from 'react'

const RegistrationForm = () => {
    function handleSubmit(e){
        let FirstName=e.target.fname.value
        let LasttName=e.target.lname.value
        let UserName=e.target.username.value
        let Password=e.target.pass.value
        console.log(FirstName, LasttName,UserName, Password)

        e.preventDefault()

    }
  return (
    <>
      <br /><br /><br />
 <form onSubmit={handleSubmit} className='reg-form' action="">
    <div className='div'>
        <input name='fname' type="text" placeholder='FirstName' />
    </div>
    <div className='div'>
        <input name='lname' type="text" placeholder='LastName' />
    </div>
    <div className='div'>
        <input name='username' type="text" placeholder='UserName' />
    </div>
    <div className='div'>
        <input name='pass' type="password" placeholder='Password' />
    </div>
    <div className='div'>
        <button className='button' type='submit'>Register</button>
    </div>
 </form>

    </>
  )
}

export default RegistrationForm
