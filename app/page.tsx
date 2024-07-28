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
    await login(data.get('email') as string, data.get('password') as string)
    setIsDisabled(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <form
        className="border- flex flex-col gap-10 border p-12 shadow-2xl"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h1 className="text-center text-xl font-semibold">Авторизация</h1>
        <div className="flex flex-col gap-5">
          <TextField
            id="email"
            color="primary"
            label="Email"
            name="email"
            variant="outlined"
            required
          />
          <TextField
            id="password"
            color="primary"
            label="Пароль"
            name="password"
            placeholder="Password"
            type="password"
            variant="outlined"
            required
          />
        </div>
        <Button disabled={isDisabled} type="submit" size="large" variant="contained">
          Войти
        </Button>
      </form>
    </main>
  )
}
