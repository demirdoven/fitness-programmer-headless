'use server'
 
export async function getWorkouts(selectedGoal) {

    let url = `https://fitnessprogramer.com/wp-json/dd/v1/workouts`;
    if( selectedGoal !== undefined && selectedGoal !== 'all' ){
        url = url + '?goal='+selectedGoal;
    }

    const headers   = { 'Content-Type': 'application/json' };
    const res = await fetch( url, {
        headers,
        method: 'GET',
        next: { revalidate: 3600 },
        // cache: 'no-store',
    });
    const workouts = await res.json();
    return workouts;
}

export async function getGoals() {

    const url = `https://fitnessprogramer.com/wp-json/dd/v1/goals`;
    const headers   = { 'Content-Type': 'application/json' };
    const res = await fetch( url, {
        headers,
        method: 'GET',
        next: { revalidate: 10000 },
        // cache: 'no-store',
    });
    const goals = await res.json();
    return goals;
}