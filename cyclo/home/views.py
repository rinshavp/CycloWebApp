from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from . models import Product,CartItem
from . forms import UserRegistrationForm
from django.shortcuts import get_object_or_404
# from django.http import HttpResponse 
# Create your views here.

def home(request):
    products = Product.objects.all()
    return render(request, 'index.html',{'products':products})

def login_user(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home')  # Replace 'home' with your desired home page URL
        else:
            error_message = 'Invalid username or password.'
    else:
        error_message = None

    return render(request, 'login.html', {'error_message': error_message})

    
def register_user(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserRegistrationForm()
    return render(request,'registration.html', {'form':form})

def add_to_cart(request, product_id):
    print('hellooo')
    if request.user.is_authenticated:
        print('hai')
        product = Product.objects.get(pk=product_id)
        cart_item, created = CartItem.objects.get_or_create(product=product, user=request.user)
        
        if not created:
            cart_item.quantity += 1
            cart_item.save()
            
        error_message = None
    else:
        error_message = 'Login to continue!!'
        return render(request, 'index.html', {'error_message': error_message})
    
    return redirect('home')

def cart(request):
    if request.user.is_authenticated:
        cart_items = CartItem.objects.filter(user=request.user)
    else:
        cart_items = []
    return render(request, 'cart.html', {'cart_items': cart_items})


def remove_from_cart(request, item_id):
    cart_item = get_object_or_404(CartItem, id=item_id, user=request.user)
    cart_item.delete()
    return redirect('cart')



     