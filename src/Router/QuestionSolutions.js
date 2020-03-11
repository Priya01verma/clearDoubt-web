import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Applications } from 'Constants';

const AllSubjectQuestions = React.lazy(() => import('Screens/Weekly-Tech/WeeklyTechPosts'));
const WeeklyTechPostDetails = React.lazy(() => import('Screens/Weekly-Tech/WeeklyTechPosts/WeeklyTechPostDetails'));


const WeeklyTechRouter = () => {

    return (
        <Suspense fallback={<div>Loading...</div>} >
            <Switch>
                <Route exact path={`/${Applications.WEEKLY_TECH}`} component={WeeklyTechPosts} />
                <Route exact path={`/${Applications.WEEKLY_TECH}/:slug`} component={WeeklyTechPostDetails} />
            </Switch>
        </Suspense>
    )
}

export default WeeklyTechRouter;