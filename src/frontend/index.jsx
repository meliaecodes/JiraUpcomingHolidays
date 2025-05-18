import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Text, Heading } from '@forge/react';
import { holidays } from './data';

const checkUpcomingHolidays = () => {
    let upcomingHolidaysTemp = [];

    /* Use the JavaScript Date object to get the current date and store as 'today'. */
    let t = Date.now();
    let today = new Date(t);
    /* Use the JavaScript Date object to get the date 7 days from now and store it as 'nextWeek'. */
    let n = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7));
    let nextWeek = new Date(n);

    for (let index = 0; index < holidays.length; index++) {
      /* Use the Javascript Date object to convert the date in our holidays object to a Date so it can be compared to the current date and next week. */
      let holidayDate = new Date(holidays[index].date);
      
      if((holidayDate > today)&&(holidayDate < nextWeek) )
      /* if the holiday date is after today, and less than a week away, add it to the array of upcoming holidays */
      {
          upcomingHolidaysTemp.push(holidays[index]);
      }
    }
    return(upcomingHolidaysTemp);
}

const App = () => {
  let upcomingHolidays = checkUpcomingHolidays();

  return (
    <>
      {upcomingHolidays.map((holiday) => (
        <>
          <Heading size="large">{holiday.title}</Heading>
          <Text>{holiday.description}</Text>
        </>
      ))}
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
