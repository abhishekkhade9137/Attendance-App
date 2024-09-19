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

function newcadet() {
  const [Open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  return (
    <div>
      <Button onClick={()=>setOpen(true)}>Add new Cadets</Button>
      <Dialog open={Open}>
  
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add new Cadet</DialogTitle>
      <DialogDescription>
        <div className='py-3'>
          <label>Full name</label>
          <Input placeholder="John Doe" {...register('name',{required:true})} />
          </div>
          <div className='py-3'>
          <label>Regd number</label>
          <Input placeholder="2#S#A6084##"/>
          </div>
          <div className='py-3'>
          <label>Rank</label>
          <Select>
            <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Rank" />
          </SelectTrigger>
            <SelectContent {...register('grade',{required:true})}>
              <SelectItem value={"Cadet"}>Cadet</SelectItem>
              <SelectItem value={"LCPL"}>LCPL</SelectItem>
              <SelectItem value={"CPL"}>CPL</SelectItem>
              <SelectItem value={"SGT"}>SGT</SelectItem>
              <SelectItem value={"CQMS"}>CQMS</SelectItem>
              <SelectItem value={"CSM"}>CSM</SelectItem>
              <SelectItem value={"CUO"}>CUO</SelectItem>
              <SelectItem value={"SUO"}>SUO</SelectItem>
              </SelectContent>
              </Select>
          </div>
          <div className='flex gap-3 justify-end'><Button variant='ghost' onClick={()=>setOpen(false)} className='bg-red-600 bold p-4 text-center'>Close</Button>
            <Button onClick={()=>console.log(save)} className='bg-green-600 bold p-4 text-center'>Save</Button>
          </div>
          
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

      
    </div>
  )
}

export default newcadet
