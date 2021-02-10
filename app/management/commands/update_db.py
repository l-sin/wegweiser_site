from django.core.management.base import BaseCommand
from app.models import Node,Edge
from joblib import load
from django.conf import settings
import os

data_dir = settings.DATA_DIR

class Command(BaseCommand):
    def handle(self, *args, **options):
        edges = load(os.path.join(data_dir,'data/edges'))
        nodes = load(os.path.join(data_dir, 'data/nodes'))

        variable_fields = ('weather','travel')

        for node in nodes:
            Node.objects.filter(pk=node['name']).update(
                **{k:v for k,v in node.items() if k in variable_fields}
            )