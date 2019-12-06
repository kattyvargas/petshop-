from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required, user_passes_test
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404, redirect, render
from django.template.context_processors import request
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib import messages
from .models import Usuario

def index(request):
    return render(request, 'shop/index.html', {})

def login_view(request):
    status = ''
    if request.method == 'POST':
        username = request.POST.get('txtName')
        password = request.POST.get('txtPassword')
        user = authenticate(request, username = username, password = password)
        if user:
            login(request, user)
            status = 'OK'
            return HttpResponseRedirect(reverse('productos'))
        else:
            status = 'ERROR'
            messages.error(request, 'Error al iniciar sesion :frowning2:')
    variables = {'status':status}
    return render(request, 'shop/login.html', variables)

@login_required(login_url = 'login')
def logout_view(request):
    logout(request)
    return redirect('login')

def productos(request):
    status = ''
    return render(request, 'shop/product.html')