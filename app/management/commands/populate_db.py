from django.core.management.base import BaseCommand
from app.models import Node,Edge
from joblib import load
from django.conf import settings
import os
import numpy as np

data_dir = settings.DATA_DIR

class Command(BaseCommand):
    def handle(self, *args, **options):
        edges = load(os.path.join(data_dir,'data/edges'))
        nodes = load(os.path.join(data_dir, 'data/nodes'))

        for node in nodes:
            Node(**node).save()

        for e in edges:
            edge = Edge(**{k:v for k,v in e.items() if k!='start' and k!='end'})
            start,end = Node.objects.filter(pk=e['start']),Node.objects.filter(pk=e['end'])
            edge.save()
            edge.start.set(start)
            edge.end.set(end)