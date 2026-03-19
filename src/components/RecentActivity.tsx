'use client'

import { CheckCircleIcon, XCircleIcon, ClockIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'

const activities = [
  {
    id: 1,
    user: 'John Doe',
    action: 'Completed purchase',
    target: 'Premium Plan',
    status: 'success',
    time: '2 min ago',
    icon: CheckCircleIcon,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 2,
    user: 'Sarah Smith',
    action: 'Subscription canceled',
    target: 'Business Plan',
    status: 'error',
    time: '15 min ago',
    icon: XCircleIcon,
    iconColor: 'text-red-500',
    bgColor: 'bg-red-50',
  },
  {
    id: 3,
    user: 'Mike Johnson',
    action: 'Account created',
    target: 'New User',
    status: 'info',
    time: '1 hour ago',
    icon: ClockIcon,
    iconColor: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 4,
    user: 'Emma Wilson',
    action: 'Failed login attempt',
    target: 'Security Alert',
    status: 'warning',
    time: '2 hours ago',
    icon: ExclamationTriangleIcon,
    iconColor: 'text-yellow-500',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 5,
    user: 'Alex Turner',
    action: 'Updated profile',
    target: 'User Settings',
    status: 'success',
    time: '5 hours ago',
    icon: CheckCircleIcon,
    iconColor: 'text-green-500',
    bgColor: 'bg-green-50',
  },
]

export default function RecentActivity() {
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
        <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
          View all
        </button>
      </div>
      
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {activities.map((activity, activityIdx) => (
            <li key={activity.id}>
              <div className="relative pb-8">
                {activityIdx !== activities.length - 1 ? (
                  <span
                    className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-start space-x-3">
                  <div className="relative">
                    <div className={`flex items-center justify-center h-10 w-10 rounded-full ${activity.bgColor}`}>
                      <activity.icon className={`h-6 w-6 ${activity.iconColor}`} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div>
                      <div className="text-sm">
                        <span className="font-medium text-gray-900">{activity.user}</span>
                        {' '}{activity.action}{' '}
                        <span className="font-medium text-gray-900">{activity.target}</span>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}