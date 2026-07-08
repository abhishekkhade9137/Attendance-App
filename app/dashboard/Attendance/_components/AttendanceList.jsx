"use client";

import React, { useState, useEffect } from 'react';
import { getMembers } from '@/app/actions/memberActions';
import { getAttendanceByDate, markAttendance } from '@/app/actions/attendanceActions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function AttendanceList({ initialMembers }) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [members, setMembers] = useState(initialMembers);
  const [attendanceData, setAttendanceData] = useState({}); // { memberId: true/false }
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const records = await getAttendanceByDate(date);
      const map = {};
      records.forEach(r => {
        map[r.memberId] = r.present;
      });
      setAttendanceData(map);
      setLoading(false);
    }
    fetchData();
  }, [date]);

  const handleToggle = async (memberId, currentStatus) => {
    const newStatus = !currentStatus;
    // Optimistic update
    setAttendanceData(prev => ({ ...prev, [memberId]: newStatus }));
    const res = await markAttendance(memberId, date, newStatus);
    if (!res.success) {
      // Revert on failure
      setAttendanceData(prev => ({ ...prev, [memberId]: currentStatus }));
      alert("Failed to save attendance");
    }
  };

  return (
    <div className='bg-white text-black min-h-screen'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-3xl font-black'>Attendance</h1>
        <div className='flex items-center gap-4'>
          <label className='font-bold'>Date:</label>
          <Input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            className="border-black w-auto"
          />
        </div>
      </div>

      <div className='border border-black overflow-hidden'>
        <table className='w-full text-left border-collapse'>
          <thead>
            <tr className='bg-black text-white'>
              <th className='p-4 border-b border-black font-bold'>Name</th>
              <th className='p-4 border-b border-black font-bold'>ID / Reg Number</th>
              <th className='p-4 border-b border-black font-bold'>Role</th>
              <th className='p-4 border-b border-black font-bold'>Status</th>
            </tr>
          </thead>
          <tbody>
            {members.length === 0 ? (
              <tr>
                <td colSpan="4" className='p-4 text-center text-gray-500'>No members found. Add some in the Members tab.</td>
              </tr>
            ) : (
              members.map((member) => (
                <tr key={member.id} className='hover:bg-gray-100 border-b border-gray-200'>
                  <td className='p-4 font-bold'>{member.name}</td>
                  <td className='p-4'>{member.regNumber}</td>
                  <td className='p-4'>{member.role}</td>
                  <td className='p-4'>
                    <Button 
                      variant="outline"
                      disabled={loading}
                      onClick={() => handleToggle(member.id, attendanceData[member.id] || false)}
                      className={`font-bold border-black ${attendanceData[member.id] ? 'bg-black text-white' : 'bg-white text-black hover:bg-gray-100'}`}
                    >
                      {attendanceData[member.id] ? 'Present' : 'Absent'}
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
