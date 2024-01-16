'use client'

import { getGoals } from '@/app/actions';
import React, { useEffect, useState } from 'react'

const WorkoutSelector = ({searchParams, selectedGoal, setSelectedGoal, goals}) => {
    
    


    const handleGoalChanger = (e) => {
        setSelectedGoal(e.target.value);
    };

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