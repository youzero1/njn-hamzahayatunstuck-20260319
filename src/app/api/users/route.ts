import { NextResponse } from 'next/server'
import { initializeDatabase } from '@/lib/database'
import { User } from '@/entities/User'

export async function GET() {
  try {
    await initializeDatabase()
    const userRepository = (await import('@/lib/database')).AppDataSource.getRepository(User)
    const users = await userRepository.find()
    
    return NextResponse.json({ users })
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json(
      { error: 'Failed to fetch users' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    await initializeDatabase()
    const userRepository = (await import('@/lib/database')).AppDataSource.getRepository(User)
    const body = await request.json()
    
    const user = new User()
    user.name = body.name
    user.email = body.email
    user.role = body.role || 'user'
    
    const savedUser = await userRepository.save(user)
    
    return NextResponse.json(savedUser, { status: 201 })
  } catch (error) {
    console.error('Error creating user:', error)
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    )
  }
}