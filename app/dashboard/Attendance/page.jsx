import React from 'react'
import AttendanceList from './_components/AttendanceList'
import { getMembers } from '@/app/actions/memberActions'

export default async function Attendance() {
  const members = await getMembers();

  return (
    <div className='p-7'>
      <AttendanceList initialMembers={members} />
    </div>
  )
}
