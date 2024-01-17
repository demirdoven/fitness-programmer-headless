'use client'

import { getGoals } from '@/app/actions';
import { useRouter, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const WorkoutSelector = ({searchParams, selectedGoal, setSelectedGoal, goals}) => {
    
    const router = useRouter()
    const pathname = usePathname()

    const [secilen, setSecilen] = useState('all')

    const handleGoalChanger = (e) => {
        setSecilen(e.target.value);
    };

    useEffect( ()=>{

        let goalParam = '';

        if( secilen !== 'all' ){
            goalParam = secilen;
        }

        // //const updatedUrl = `${pathname}/${goalParam}`;
        const updatedUrl = `http://localhost:3000/workouts/${goalParam}`;

        console.log(updatedUrl)
        router.replace(updatedUrl, undefined, { shallow: true, scroll: false });



    }, [secilen, router])

    return (
        <div className="w-full py-12 bg-slate-100 text-center">
            <select
            value={selectedGoal}
            onChange={(e) => handleGoalChanger(e)}
            >
                <option value={'all'}>Show all</option>
                {
                    goals && goals.map( goal => (
                        <option key={goal.term_id} value={goal.slug}>{goal.name}</option>
                    ))
                }
            </select>
        </div>
    )
}

export default WorkoutSelector