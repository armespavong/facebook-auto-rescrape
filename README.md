# Facebook auto scrape/re-scrape
Forced facebook to scrape/re-scrape meta contents for sharing

Note:
Believe it or not I have tried using pure javascript (without PHP) and it didn't work
So you can just use pure PHP file or call it with AJAX
In this case I used jQuery AJAX

## Requirement
This script needs "jQuery" and PHP environment
```
<script src="https://code.jquery.com/jquery-3.3.1.min.js" 
integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" 
crossorigin="anonymous"></script>
```

## Config
Open script.js to replace your 
1. Facebook app ID (https://developers.facebook.com)
2. Facebook app version
3. Facebook app access token (https://developers.facebook.com/tools/explorer/)

Note:
- Facebook app is necessary
- If your are using pure PHP then open scrape.php to replace these parameters

## Import
You can include script.js, scrape.php to your code or copy/paste my code into yours

## Recommended
Facebook has limitation quotas for using scrape so you should better fire the script when
1. New content page has been created
2. Content page was updated
