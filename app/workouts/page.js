import WorkoutsInner from '@/components/workouts/WorkoutsInner';
import React from 'react'

export default async function Workouts({params, searchParams}){

    console.log(params)
    return (
           
        <div className="w-full">
        
            <h1 className='text-center'>Workouts</h1>

            <WorkoutsInner goal={''} searchParams={searchParams} />
            
        </div>

    )
}