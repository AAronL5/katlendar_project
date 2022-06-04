from bs4 import BeautifulSoup, BeautifulStoneSoup
import requests
import csv

source = requests.get('https://events.shsu.edu/calendar?order=date').text #sam website

soup = BeautifulSoup(source, 'lxml')

#nested for loop with box_title first


for article2 in soup.find_all('div', class_= 'box_title_small date_divider'):#get dates

    date = article2.h2.text

    print(date)#this currently prints dates
'''
   for article in soup.find_all('div', class_= 'item event_item vevent'):#each individual event

        title = article.h3.text#title of event

        description = article.h4.text#description of event

        print(title)

        print(description)'''





 
