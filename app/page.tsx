'use client'

import { FormEvent, useState } from 'react'
import { Button, TextField } from '@mui/material'
import { login } from './actions'

export default function Home() {
  const [isDisabled, setIsDisabled] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    const data = new FormData(e.target as HTMLFormElement)
    try {
      await login(data.get('email') as string, data.get('password') as string)
    } catch (err) {
      console.log(err)
    } finally {
      setIsDisabled(false)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <form className="flex flex-col gap-10 bg-white p-12" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-center text-xl font-semibold text-black">Login</h1>
        <div className="flex flex-col gap-5">
          <TextField id="email" label="Email" name="email" variant="outlined" required />
          <TextField
            id="password"
            label="Password"
            name="password"
            placeholder="Password"
            type="password"
            variant="outlined"
            required
          />
        </div>
        <Button disabled={isDisabled} type="submit" size="large" variant="contained">
          Submit
        </Button>
      </form>
    </main>
  )
}
