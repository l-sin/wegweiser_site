from django import template
from django.template.defaultfilters import stringfilter
import json

register = template.Library()

@register.filter
@stringfilter
def str_to_json(value):
    return json.loads(value)