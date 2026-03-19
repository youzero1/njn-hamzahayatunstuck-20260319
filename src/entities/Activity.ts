import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './User'

@Entity('activities')
export class Activity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  action: string

  @Column({ nullable: true })
  details: string

  @Column()
  status: string

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn({ name: 'userId' })
  user: User

  @Column()
  userId: number

  @CreateDateColumn()
  timestamp: Date
}