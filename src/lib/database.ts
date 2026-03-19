import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '@/entities/User'
import { Activity } from '@/entities/Activity'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DATABASE_URL || './database.sqlite',
  synchronize: true,
  logging: true,
  entities: [User, Activity],
  migrations: [],
  subscribers: [],
})

// Initialize the database connection
export async function initializeDatabase() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize()
      console.log('Database connection established')
    }
  } catch (error) {
    console.error('Error connecting to the database:', error)
    throw error
  }
}