# Generated by Django 3.2.4 on 2021-10-02 23:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('haber', '0005_auto_20211003_0213'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogmodel',
            name='created_date',
            field=models.DateField(blank=True, null=True, verbose_name='oluşturulma tarihi'),
        ),
    ]