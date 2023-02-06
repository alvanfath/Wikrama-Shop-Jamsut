@component('mail::message')
# Hi {{$name}}

Your account is registered in the Wikrama shop that we manage, please verify your email via the button below

@component('mail::button', ['url' => route('verif-email', ['token' => $token])])
Confirm Email
@endcomponent

Thanks,<br>
Jamsut Team
@endcomponent
