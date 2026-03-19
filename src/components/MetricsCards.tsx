'use client'

import {
  UsersIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'

const metrics = [
  {
    id: 1,
    name: 'Total Users',
    value: '12,584',
    change: '+12.5%',
    changeType: 'positive',
    icon: UsersIcon,
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    changeType: 'positive',
    icon: CurrencyDollarIcon,
    color: 'bg-green-500',
  },
  {
    id: 3,
    name: 'Active Sessions',
    value: '1,234',
    change: '-3.4%',
    changeType: 'negative',
    icon: ChartBarIcon,
    color: 'bg-purple-500',
  },
  {
    id: 4,
    name: 'Conversion Rate',
    value: '4.75%',
    change: '+2.1%',
    changeType: 'positive',
    icon: ArrowTrendingUpIcon,
    color: 'bg-orange-500',
  },
]

export default function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <div key={metric.id} className="card">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${metric.color} bg-opacity-10`}>
                <metric.icon className={`h-6 w-6 ${metric.color.replace('bg-', 'text-')}`} />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{metric.value}</p>
              </div>
            </div>
            <div className={`text-sm font-medium ${metric.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              {metric.change}
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className={`h-2 rounded-full ${metric.changeType === 'positive' ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: metric.id === 1 ? '75%' : metric.id === 2 ? '85%' : metric.id === 3 ? '60%' : '70%' }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}