import React from 'react';
import { getMembers } from '@/app/actions/memberActions';
import { getAttendanceByDate } from '@/app/actions/attendanceActions';

export default async function Dashboard() {
  const members = await getMembers();
  
  const today = new Date().toISOString().split('T')[0];
  const attendanceToday = await getAttendanceByDate(today);
  
  const totalMembers = members.length;
  const presentCount = attendanceToday.filter(a => a.present).length;
  const attendancePercentage = totalMembers > 0 ? Math.round((presentCount / totalMembers) * 100) : 0;

  return (
    <div className="p-7 bg-white text-black min-h-screen">
      <header className="mb-8 border-b border-black pb-4">
        <h1 className="text-3xl font-black">Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of today's attendance: {today}</p>
      </header>
      
      <main>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <article className="border border-black p-6">
            <h2 className="text-xl font-bold">Total Members</h2>
            <p className="text-4xl font-black mt-4">{totalMembers}</p>
          </article>
          <article className="border border-black p-6 bg-black text-white">
            <h2 className="text-xl font-bold">Present Today</h2>
            <p className="text-4xl font-black mt-4">{presentCount}</p>
          </article>
          <article className="border border-black p-6">
            <h2 className="text-xl font-bold">Attendance Rate</h2>
            <p className="text-4xl font-black mt-4">{attendancePercentage}%</p>
          </article>
        </section>
        
        <section className="border border-black p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="h-40 flex items-center justify-center border border-dashed border-black">
             <p className="font-bold text-gray-500">More charts and activity logs coming soon!</p>
          </div>
        </section>
      </main>
    </div>
  );
}