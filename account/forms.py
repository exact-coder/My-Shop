from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import ReadOnlyPasswordHashField


User = get_user_model()

class UserCreationForm(forms.ModelForm):
    password1 = forms.CharField(label = 'Password', widget = forms.PasswordInput)
    password2 = forms.CharField(label = 'Password Confirmation', widget = forms.PasswordInput)

    class Meta:
        model = User
        fields = ('email', 'first_name', 'last_name')

    def clean_password2(self):
        password1 = self.cleaned_data.get('password1')
        password2 = self.cleaned_data.get('password2')

        if password1 and password2 and password1 != password2:
            raise forms.ValidationError("Password don't match")
        return password2
    def save(self, commit = True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data.get('password2'))

        if commit:
            user.save()
        
        return user

class UserChangeForm(forms.ModelForm):
    password = ReadOnlyPasswordHashField()

    class Meta:
        model =User
        fields = (
            'email', 'password', 'first_name', 'last_name', 'is_active', 'is_staff', 'is_admin'
        )
    
    def clean_password(self):
        return self.initial['password']

class userRegisterForm(UserCreationForm):
    email = forms.EmailField(required=True,widget=forms.TextInput(attrs={'class': 'form-control','type': 'email','placeholder': 'Email Address'}))
    first_name = forms.CharField(required=True, widget=forms.TextInput( attrs={'class': 'form-control', 'placeholder': 'First Name'}))
    last_name = forms.CharField(required=True, widget=forms.TextInput( attrs={'class': 'form-control', 'placeholder': 'Last Name'}))
    password1 = forms.CharField(required=True, widget=forms.TextInput( attrs={'class': 'form-control','type': 'Password', 'placeholder': 'Your Password'}))
    password2 = forms.CharField(required=True, widget=forms.TextInput( attrs={'class': 'form-control','type': 'Password', 'placeholder': 'Re-type Password'}))

    class Meta:
        model = User
        fields = ['email','first_name','last_name','password1','password2']
    
    def clean_email(self):
        error_messages = {
            'duplicate_email': 'Email is already taken'
        }
        email = self.cleaned_data.get('email')
        try:
            User.objects.get(email = email)
            raise forms.ValidationError(
                error_messages['duplicate_email'],
                code= 'duplicate_email',
            )
        except User.DoesNotExist:
            return email
    

