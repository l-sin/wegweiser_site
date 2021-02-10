# Generated by Django 3.1.5 on 2021-01-28 13:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_auto_20210126_1758'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='edge',
            name='end_name',
        ),
        migrations.RemoveField(
            model_name='edge',
            name='start_name',
        ),
        migrations.AddField(
            model_name='edge',
            name='end',
            field=models.ManyToManyField(related_name='end_of', to='app.Node'),
        ),
        migrations.AddField(
            model_name='edge',
            name='start',
            field=models.ManyToManyField(related_name='start_of', to='app.Node'),
        ),
    ]