import { getWorkouts } from '@/app/actions';
import WorkoutsInner from '@/components/workouts/WorkoutsInner';
import React from 'react'

export default async function WorkoutsSlug({params, searchParams}){

    const goal = params.slug;

   
    const workoutsInitial = await getWorkouts(goal);
   
    return (
        <div className="w-full">
            
            <h1 className='text-center'>Workouts</h1>

            <WorkoutsInner workoutsInitial={workoutsInitial} goal={goal} searchParams={searchParams} />
            
        </div>
    )
}

