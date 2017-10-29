### _start application_
```
>  npm start
```

### _Cloud9 Config for URL access_
```
customize package.json "start" (0.0.0.0:8080)
and then
https://docs.c9.io/docs/run-an-application
```

### _Proxy API call examples_
* Cloud9
```
search:         https://arch-search-proxy-mikhailbro.c9users.io/v1/get-search?search=       . . . KOWIN&scoringProfile=arch-score&$count=true
autocompletion: https://arch-search-proxy-mikhailbro.c9users.io/v1/get-autocomplete?search= . . . KOW
```
* Public Azure Cloud
```
search:          https://arch-search-proxy.azurewebsites.net/v1/get-search?search=       . . . KOWIN&scoringProfile=arch-score&$count=true
autocompletion:  https://arch-search-proxy.azurewebsites.net/v1/get-autocomplete?search= . . . KOW
```