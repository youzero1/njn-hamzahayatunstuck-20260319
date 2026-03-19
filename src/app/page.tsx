import MetricsCards from '@/components/MetricsCards'
import RecentActivity from '@/components/RecentActivity'
import Chart from '@/components/Chart'
import { Suspense } from 'react'
import { LoadingSpinner } from '@/components/LoadingSpinner'

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
      
      <Suspense fallback={<LoadingSpinner />}>
        <MetricsCards />
      </Suspense>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card h-full">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trends</h2>
            <div className="h-80">
              <Chart />
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <Suspense fallback={<LoadingSpinner />}>
            <RecentActivity />
          </Suspense>
        </div>
      </div>
    </div>
  )
}