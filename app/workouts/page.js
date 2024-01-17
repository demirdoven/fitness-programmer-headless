import WorkoutsInner from '@/components/workouts/WorkoutsInner';
import React from 'react'
import { getWorkouts } from '../actions';

export default async function Workouts({params, searchParams}){

    const workoutsInitial = await getWorkouts('');

    return (
           
        <div className="w-full">
        
            <h1 className='text-center'>Workouts</h1>

            <WorkoutsInner workoutsInitial={workoutsInitial} goal={''} searchParams={searchParams} />
            
        </div>

    )
}