"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';
import { addMember } from '@/app/actions/memberActions';

function NewMember() {
  const [open, setOpen] = useState(false);

  async function handleAction(formData) {
    const res = await addMember(formData);
    if (res.success) {
      setOpen(false);
    } else {
      alert(res.error || "Failed to add member");
    }
  }

  return (
    <div>
      <Button onClick={() => setOpen(true)} className="bg-black text-white hover:bg-black/80 font-bold">Add new Member</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-white text-black">
          <DialogHeader>
            <DialogTitle>Add new Member</DialogTitle>
            <DialogDescription className="text-black">
              <form action={handleAction} className='flex flex-col gap-4 mt-4'>
                <div>
                  <label className='font-bold'>Full name</label>
                  <Input name="name" placeholder="John Doe" className="border-black mt-1" required />
                </div>
                <div>
                  <label className='font-bold'>ID / Reg Number</label>
                  <Input name="regNumber" placeholder="12345" className="border-black mt-1" required />
                </div>
                <div>
                  <label className='font-bold'>Role</label>
                  <select name="role" className="w-full border border-black p-2 rounded-md mt-1 bg-white" required>
                    <option value="">Select Role</option>
                    <option value="Member">Member</option>
                    <option value="Leader">Leader</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>
                <div className='flex gap-3 justify-end mt-4'>
                  <Button type="button" variant='outline' onClick={() => setOpen(false)} className='bg-white text-black border-black border hover:bg-gray-100 font-bold'>Close</Button>
                  <Button type="submit" className='bg-black text-white hover:bg-black/80 font-bold'>Save</Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default NewMember
