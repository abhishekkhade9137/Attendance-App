import React from 'react'
import NewMember from './_components/NewMember'
import { getMembers } from '@/app/actions/memberActions'

export default async function Members() {
  const members = await getMembers();

  return (
    <div className='p-7 bg-white text-black min-h-screen'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-black'>Members</h1>
        <NewMember />
      </div>

      <div className='border border-black overflow-hidden'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-black text-white'>
              <th className='p-4 border-b border-black font-bold'>Name</th>
              <th className='p-4 border-b border-black font-bold'>ID / Reg Number</th>
              <th className='p-4 border-b border-black font-bold'>Role</th>
            </tr>
          </thead>
          <tbody>
            {members.length === 0 ? (
              <tr>
                <td colSpan="3" className='p-4 text-center text-gray-500'>No members found.</td>
              </tr>
            ) : (
              members.map((member) => (
                <tr key={member.id} className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='p-4 font-bold'>{member.name}</td>
                  <td className='p-4'>{member.regNumber}</td>
                  <td className='p-4'>{member.role}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}