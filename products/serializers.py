from rest_framework import serializers
from .models import Newsletter

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Newsletter
        fields = '__all__'


