'use client'

import React, { useEffect, useState } from 'react'
import WorkoutSelector from './WorkoutSelector'
import { getGoals, getWorkouts } from '@/app/actions'


const WorkoutsInner = ({searchParams, goal, workoutsInitial}) => {

    

    const [selectedGoal, setSelectedGoal] = useState(goal)
    const [goals, setGoals] = useState([])
    const [workouts, setWorkouts] = useState(workoutsInitial)

    useEffect(() => {

        const fetchGoals = async () => {
            const goals = await getGoals();
            setGoals(goals) 
        };
        fetchGoals();
            
    }, [] );

    
    
    // useEffect(() => {

    //     // const fetchWO = async () => {
    //     //     const workoutz = await getWorkouts(selectedGoal);
    //     //     setWorkouts(workoutz) 
    //     // };
    //     // fetchWO();

    //     let goalParam = '';

    //     if( selectedGoal !== undefined && selectedGoal !== 'all' ){
    //         goalParam = selectedGoal;
    //     }
    //     //const updatedUrl = `${pathname}/${goalParam}`;
    //     const updatedUrl = `http://localhost:3000/workouts/${goalParam}`;
    //     router.replace(updatedUrl, undefined, { shallow: true, scroll: false });
            
    //     console.log(selectedGoal)
        
    // }, [selectedGoal] );



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