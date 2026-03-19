import { NextResponse } from 'next/server'
import { initializeDatabase } from '@/lib/database'
import { Activity } from '@/entities/Activity'

export async function GET() {
  try {
    await initializeDatabase()
    const activityRepository = (await import('@/lib/database')).AppDataSource.getRepository(Activity)
    const activities = await activityRepository.find({
      relations: ['user'],
      order: { timestamp: 'DESC' },
      take: 10,
    })
    
    return NextResponse.json({ activities })
  } catch (error) {
    console.error('Error fetching activities:', error)
    return NextResponse.json(
      { error: 'Failed to fetch activities' },
      { status: 500 }
    )
  }
}

export async function POST(request: Request) {
  try {
    await initializeDatabase()
    const activityRepository = (await import('@/lib/database')).AppDataSource.getRepository(Activity)
    const body = await request.json()
    
    const activity = new Activity()
    activity.action = body.action
    activity.details = body.details
    activity.status = body.status || 'info'
    activity.userId = body.userId
    
    const savedActivity = await activityRepository.save(activity)
    
    return NextResponse.json(savedActivity, { status: 201 })
  } catch (error) {
    console.error('Error creating activity:', error)
    return NextResponse.json(
      { error: 'Failed to create activity' },
      { status: 500 }
    )
  }
}