from django import forms
from .models import Edge,Node
import json
from datetime import datetime

class EdgeForm(forms.ModelForm):
    class Meta:
        model = Edge
        fields = ('route_type',)

def choice_format(value,label,label_format=None):
    if label_format is not None:
        label = map(label_format,label)
    return list(zip(value,label))

def date_label(datestring):
        date = datetime.fromisoformat(datestring)
        return date.strftime('%d/%m (%a)')

class RouteForm(EdgeForm):

    duration_range = forms.ChoiceField(
                    choices=choice_format([(0,3),(3,6),(6,12)],
                                            ['less than 3','3 to 6','more than 6'])
    )
    max_travel_time = forms.ChoiceField(
                    choices=choice_format([0.5,1,1.5,2,2.5,3,3.5,4],
                                            [0.5,1,1.5,2,2.5,3,3.5,4])
    )

    sample_node = Node.objects.all().first()
    homes = list(dict(json.loads(sample_node.travel)).keys())
    weathers = list(dict(json.loads(sample_node.weather)).keys())

    home = forms.ChoiceField(
                    choices=choice_format(homes,homes,lambda x: x.replace('_','. '))
    )

    weather_forecast = forms.ChoiceField(
                    choices=choice_format(weathers,weathers,date_label)
    )

    class Meta(EdgeForm.Meta):
        fields = EdgeForm.Meta.fields + (
            'duration_range','max_travel_time','home','weather_forecast'
        )

