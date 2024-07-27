'use server'

import { cookies } from 'next/headers'

const login = async (email: string, password: string) => {
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

  if (!res.ok) {
    throw new Error('Failed to login')
  }

  const data = await res.json()
  cookies().set('accessToken', data.data.login.accessToken, {
    maxAge: 60 * 60 * 24,
    sameSite: 'lax',
  })
}

export { login }
