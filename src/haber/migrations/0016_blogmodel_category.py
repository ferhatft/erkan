# Generated by Django 3.2.4 on 2022-03-06 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('haber', '0015_auto_20220306_2111'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogmodel',
            name='category',
            field=models.CharField(blank=True, max_length=40, verbose_name='Catégorie'),
        ),
    ]
