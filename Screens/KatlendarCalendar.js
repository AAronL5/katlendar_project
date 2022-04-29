import React, { useState } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';

//import EventCalendar component
import EventCalendar from 'react-native-events-calendar';

//get the size of device
let { width } = Dimensions.get('window');

const KatlendarCalendar = ({ navigation }) => {
  const [events, setEvents] = useState([
    {
      start: '2022-04-29 06:30:00',
      end: '2022-04-29 09:00:00',
      title: 'SHSU Vs Lamar',
      summary: 'Baseball @ Elliot T. Bowers Stadium',
      
    },
    {
      start: '2022-04-30 09:00:00',
      end: '2022-04-30 11:00:00',
      title: 'TAFE Color Run',
      summary: '5K color run @ Garrett Teacher Education Center',
      
    },
    {
      start: '2022-05-01 01:00:00',
      end: '2022-05-01 03:00:00',
      title: 'SHSU Vs Lamar',
      summary: 'Baseball @ Elliot T. Bowers Stadium',
      
    },
    {
      start: '2022-05-01 03:00:00',
      end: '2022-05-01 04:00:00',
      title: 'Sweat the Stress',
      summary: 'Join the SHSU Rec Sports for a week of activity to de-stress during finals @ Recreation Sports Center.',
    },
    
    {
      start: '2022-05-02 07:30:00',
      end: '2022-05-02 09:30:00',
      title: 'SHSU Harp Ensemble: Harp Impressions',
      summary: 'Each semester, the School of Music hosts recitals to celebrate the work of musicians and provide valuable experience for students to work in excel, @ Gaertner Performing Arts Center',
    },
    {
      start: '2022-05-03 06:45:00',
      end: '2022-05-03 07:50:00',
      title: 'Group Cycle with Rec Sports',
      summary: 'Indoor cycling class, @ Recreational Sports Center (MP2)',
      
    },
    {
      start: '2022-05-04 01:00:00',
      end: '2022-05-04 02:30:00',
      title: 'Waterfall Kayaking with Outdoor Recreation',
      summary: 'Lets go chasing waterfalls! Join us on a journey up Rocky Creek @ Lake Livingston',
     
    },
    {
      start: '2022-05-05 03:00:00',
      end: '2022-05-05 04:30:00',
      title: 'RULE',
      summary: 'Research as an Undergraduate Learning Experience @ Garrett Teacher Education Center, 279',
      
    },
    {
      start: '2022-05-06 06:30:00',
      end: '2022-05-06 09:00:00',
      title: 'SHSU vs SFA',
      summary: 'Baseball @ Elliot T. Bowers Stadium',

    },
    {
      start: '2022-05-07 01:30:00',
      end: '2022-05-07 04:00:00',
      title: 'SHSU Day At The Races',
      summary: 'SHSU Alumni event @ Sam Houston Race Park',

    },
   
  ]);

  const eventClicked = (event) => {
    //On Click oC a event showing alert from here
    alert(JSON.stringify(event));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <EventCalendar
          eventTapped={eventClicked}
          //Function on event press
          events={events}
          //passing the Array of event
          width={width}
          //Container width
          size={60}
          //number of date will render before and after initDate
          //(default is 30 will render 30 day before initDate and 29 day after initDate)
          initDate={'2022-05-01'}
          //show initial date (default is today)
          scrollToFirst
          //scroll to first event of the day (default true)
        />
      </View>
    </SafeAreaView>
  );
};
export default KatlendarCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});