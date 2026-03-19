'use client'

import { useState } from 'react'
import {
  HomeIcon,
  ChartBarIcon,
  UsersIcon,
  CogIcon,
  DocumentTextIcon,
  CalendarIcon,
  CreditCardIcon,
  BellIcon,
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Analytics', icon: ChartBarIcon, href: '#', current: false },
  { name: 'Users', icon: UsersIcon, href: '#', current: false },
  { name: 'Documents', icon: DocumentTextIcon, href: '#', current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Billing', icon: CreditCardIcon, href: '#', current: false },
  { name: 'Notifications', icon: BellIcon, href: '#', current: false },
  { name: 'Settings', icon: CogIcon, href: '#', current: false },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={cn(
      "hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0",
      collapsed ? "md:w-20" : "md:w-64"
    )}>
      <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-lg bg-primary-600 flex items-center justify-center">
              <span className="text-white font-bold">N</span>
            </div>
            {!collapsed && (
              <h1 className="ml-3 text-xl font-bold text-gray-900">NextDash</h1>
            )}
          </div>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            <span className="sr-only">Collapse sidebar</span>
            {collapsed ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            )}
          </button>
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 pb-4 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  item.current
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  collapsed ? 'justify-center' : ''
                )}
              >
                <item.icon
                  className={cn(
                    item.current ? 'text-primary-500' : 'text-gray-400 group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6',
                    collapsed ? 'mr-0' : ''
                  )}
                  aria-hidden="true"
                />
                {!collapsed && item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}