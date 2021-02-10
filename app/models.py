from django.db import models
import json
import datetime
# Create your models here.
class Node(models.Model):
    name = models.TextField(max_length=50,primary_key=True)
    coords = models.JSONField()
    weather = models.JSONField()
    travel = models.JSONField()

    def is_good(self,pref):
        home, max_travel_time, weather_forecast = map(
            pref.__getitem__,
            ('home', 'max_travel_time', 'weather_forecast')
        )
        travel,weather = json.loads(self.travel),json.loads(self.weather)
        max_travel_time = float(max_travel_time)*3600
        # should implement this via overriding JSONField's from_db()
        # in a custom Field, but I'm lazy

        g = ( (travel[home]['go_time'] <= max_travel_time) and
              (travel[home]['back_time'] <= max_travel_time) and
              (weather[weather_forecast]['status'] in ('Clear', 'Clouds')) )
        return g

class Edge(models.Model):
    route_id = models.TextField(max_length=10,primary_key=True)
    start = models.ManyToManyField(Node, related_name='start_of')
    end = models.ManyToManyField(Node, related_name='end_of')
    route_type = models.TextField(max_length=10,
                                  #blank=False, #this just doesn't work
                                  choices=[('Hiking','hiking'),('Mountain','mountain')])
    duration = models.DurationField()
    url = models.TextField(max_length=50)