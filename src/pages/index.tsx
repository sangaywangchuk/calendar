import Image from 'next/image'
import { Inter } from 'next/font/google'
import FullCalendar from '@fullcalendar/react'
import multiMonthPlugin from '@fullcalendar/multimonth'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-white">
      <FullCalendar
        plugins={[ multiMonthPlugin ]}
        dayCellClassNames="text-black"
        headerToolbar= {{
          left: 'prev,next today',
          center: 'title',
          right: ''
        }}
        dayHeaderClassNames="text-black"
        height={'100vh'}
        initialView="multiMonthYear"
      />
    </div>
  )
}
