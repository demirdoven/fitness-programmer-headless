'use client'

import React, { useEffect, useState } from 'react'
import WorkoutSelector from './WorkoutSelector'
import { getGoals, getWorkouts } from '@/app/actions'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation';

const WorkoutsInner = ({goal, searchParams}) => {

    const router = useRouter()
    const pathname = usePathname()

    const [selectedGoal, setSelectedGoal] = useState(goal || searchParams?.goal)
    const [goals, setGoals] = useState([])
    const [workouts, setWorkouts] = useState([])

    useEffect(() => {

        const fetchGoals = async () => {
            const goals = await getGoals();
            setGoals(goals) 
        };
        fetchGoals();
            
    }, [] );

    
    useEffect(() => {

        console.log('selectedGoal', selectedGoal)
        const fetchWO = async () => {
            const workoutz = await getWorkouts(selectedGoal);
            setWorkouts(workoutz) 
        };
        fetchWO();

        console.log('pathname', pathname)

        let goalParam = '';

        if( selectedGoal !== undefined && selectedGoal !== 'all' ){
            goalParam = selectedGoal;
        }
        // const updatedUrl = `${pathname}/${goalParam}`;
        // router.replace(updatedUrl, undefined, { shallow: true, scroll: false });
            
    }, [selectedGoal, pathname, router] );



    return (
        <>
            <WorkoutSelector searchParams={searchParams} selectedGoal={selectedGoal} setSelectedGoal={setSelectedGoal} goals={goals} />
            <div className="w-full xs:px-4 lg:container mx-auto lg:max-w-6xl mt-6">
                { workouts.length &&
                    <ul>
                    {
                        workouts.map( workout => (
                            <li key={workout.id}>
                                {workout.title}
                            </li>
                        ))
                    }
                    </ul>
                }
        selam
            </div>
        </>
    )
}

export default WorkoutsInner