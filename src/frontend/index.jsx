import React from 'react';
import ForgeReconciler, { Box, Text, Heading } from '@forge/react';
import { holidays } from './data';

const checkUpcomingHolidays = () => {
    let upcomingHolidaysTemp = [];

    /* Use the JavaScript Date object to get the current date and store as 'today'. */
    let t = Date.now();
    let today = new Date(t);
    /* Use the JavaScript Date object to get the date 7 days from now and store it as 'nextTwoWeek'. */
    let n = Date.parse(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14));
    let nextTwoWeek = new Date(n);

    for (let index = 0; index < holidays.length; index++) {
      /* Use the Javascript Date object to convert the date in our holidays object to a Date so it can be compared to the current date and next week. */
      let holidayDate = new Date(holidays[index].date);
      
      if((holidayDate > today)&&(holidayDate < nextTwoWeek) )
      /* if the holiday date is after today, and less than a week away, add it to the array of upcoming holidays */
      {
          upcomingHolidaysTemp.push(holidays[index]);
      }
    }
    return(upcomingHolidaysTemp);
}

const showDateString = (date) => {
  let localisedDate = new Date(date).toDateString();
  return(localisedDate);
}

const App = () => {
  let upcomingHolidays = checkUpcomingHolidays();  

  return (
    <>
        {upcomingHolidays.map((holiday) => (
          <>
            <Box padding="space.050">
              <Heading size="small">{ showDateString(holiday.date) } - {holiday.title}</Heading>
              <Text>{holiday.description}</Text>
            </Box>
          </>
        ))}
        {upcomingHolidays.length == 0 && <Text>There are no upcoming holidays.</Text>}
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
