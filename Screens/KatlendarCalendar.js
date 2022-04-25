import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const KatlendarCalendar = ({ navigation }) => {
  return (
    <Calendar
      style={{
        borderWidth: 1,
        borderColor: "gray",
        height: 350
      }}
      theme={{
        backgroundColor: "#ffffff",
        calendarBackground: "#ffffff",
        textSectionTitleColor: "#b6c1cd",
        selectedDayBackgroundColor: "#00adf5",
        selectedDayTextColor: "#ffffff",
        todayTextColor: "#00adf5",
        dayTextColor: "#2d4150",
        textDisabledColor: "#d9e1e8",
        dotColor: "#00adf5",
        selectedDotColor: "#ffffff",
        arrowColor: "orange",
        monthTextColor: "blue",
        indicatorColor: "blue",
        textDayFontFamily: "Arial",
        textMonthFontFamily: "Arial",
        textDayHeaderFontFamily: "Arial",
        textDayFontWeight: "300",
        textMonthFontWeight: "bold",
        textDayHeaderFontWeight: "300",
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
      }}
      minDate={"2019-05-01"}
      maxDate={"2021-05-01"}
      onDayPress={day => {
        console.log("selected day", day);
      }}
      markedDates={{
        "2022-10-16": { selected: true, selectedColor: "red" },
        "2022-10-17": { selected: true, selectedColor: "blue" },
        "2022-10-18": { marked: true, dotColor: "red", activeOpacity: 5 }
      }}
    />
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default KatlendarCalendar;