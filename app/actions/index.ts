'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const login = async (email: string, password: string) => {
  try {
    const query = `
    mutation {
      login(password: "${password}", login: "${email}") {
        accessToken
        }
    }
    `
    const url = 'https://proplan.work/graphql'

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    const data = await res.json()
    cookies().set('accessToken', data.data.login.accessToken, {
      maxAge: 60 * 60 * 24,
      sameSite: 'lax',
    })

    redirect('/dashboard')
  } catch (err) {
    console.log(err)
    return { error: 'Failed to login' }
  }
}
