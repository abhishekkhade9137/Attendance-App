"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Save } from 'lucide-react';
import { useForm } from 'react-hook-form';

function NewMember() {
  const [Open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <div>
      <Button onClick={()=>setOpen(true)} className="bg-black text-white hover:bg-black/80">Add new Member</Button>
      <Dialog open={Open}>
  
  <DialogContent className="bg-white text-black">
    <DialogHeader>
      <DialogTitle>Add new Member</DialogTitle>
      <DialogDescription className="text-black">
        <div className='py-3'>
          <label>Full name</label>
          <Input placeholder="John Doe" className="border-black" {...register('name',{required:true})} />
          </div>
          <div className='py-3'>
          <label>ID / Reg Number</label>
          <Input placeholder="12345" className="border-black" />
          </div>
          <div className='py-3'>
          <label>Role</label>
          <Select>
            <SelectTrigger className="w-[180px] border-black">
            <SelectValue placeholder="Role" />
          </SelectTrigger>
            <SelectContent className="bg-white border-black" {...register('grade',{required:true})}>
              <SelectItem value={"Member"}>Member</SelectItem>
              <SelectItem value={"Leader"}>Leader</SelectItem>
              <SelectItem value={"Admin"}>Admin</SelectItem>
              </SelectContent>
              </Select>
          </div>
          <div className='flex gap-3 justify-end'>
            <Button variant='outline' onClick={()=>setOpen(false)} className='bg-white text-black border-black border hover:bg-gray-100 font-bold'>Close</Button>
            <Button onClick={()=>console.log("save")} className='bg-black text-white hover:bg-black/80 font-bold'>Save</Button>
          </div>
          
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      
    </div>
  )
}

export default NewMember
