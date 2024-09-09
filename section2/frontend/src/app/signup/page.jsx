import Button from '@/components/Button'
import Input from '@/components/input'

import React from 'react'


const signup = () => {
  return (
    <div>signup
        
        <Button>my button </Button>
        <Button> submit</Button>
        <Button>know more </Button>

        <Input id = 'name' label= 'Name' type='text' placeholder='enter yr name'/>
        <Input id = 'email' label= 'Email' type='email' placeholder='enter yr email'/>
        <Input id = 'password' label= 'Password' type='password' placeholder='enter yr password'/>
    </div>
  )
}

export default signup





