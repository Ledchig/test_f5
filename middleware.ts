import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}

const authMiddleware = (req: NextRequest) => {
  const { pathname, origin } = req.nextUrl
  console.log(origin)
  const token = cookies().get('accessToken')?.value

  if (pathname === '/dashboard' && !token) {
    return NextResponse.redirect(`${origin}/`)
  }

  if (pathname === '/' && token) {
    return NextResponse.redirect(`${origin}/dashboard`)
  }

  return NextResponse.next()
}

export default authMiddleware
