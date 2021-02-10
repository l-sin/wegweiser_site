from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from .models import Edge
from .forms import RouteForm
import datetime
import time

def index(request):
    if request.method == 'POST':
        duration_range = eval(request.POST['duration_range'])
        filt = {
            'route_type':request.POST['route_type'],
            'duration__range':(datetime.timedelta(hours=duration_range[0]),
                               datetime.timedelta(hours=duration_range[1]))
        }
        form = RouteForm(request.POST)
        results = Edge.objects.filter(**filt)
        results = [ result for result in results
                        if (result.start.get().is_good(request.POST) and
                            result.end.get().is_good(request.POST)) ]
        prefs={'home':request.POST['home'],
               'weather_forecast':request.POST['weather_forecast'],
               'max_travel_time':request.POST['max_travel_time'],
               'route_type':request.POST['route_type']}

    else:
        defaults = {'route_type':'Mountain', #broken
                    'duration_range':(3,6), #broken
                    'max_travel_time':2}
        form = RouteForm(initial=defaults)
        results = Edge.objects.all()[:10]
        prefs=None
    return render(request, 'app/index.html',
                  {'form': form,'results':results,'prefs':prefs})