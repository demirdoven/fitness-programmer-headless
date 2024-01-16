import WorkoutsInner from '@/components/workouts/WorkoutsInner';
import React from 'react'

const page = ({params, searchParams}) => {

    const goal = params.slug;


    return (
        <div className="w-full">
            
            <h1 className='text-center'>Workouts</h1>

            <WorkoutsInner goal={goal} searchParams={searchParams} />
            
        </div>
    )
}

export default page