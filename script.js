//add this on top of your code (*recommended <head></head>)
//*this is not neccessary if you already declare Facebook script in your web
window.fbAsyncInit = function() {
    FB.init({
        appId            : '{* Facebook app ID *}', //replace this with your Facebook app ID
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.2' //replace this with your Facebook app version
    });
};
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/th_TH/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



//add this somewhere in your code
$.ajax({
    url: 'https://graph.facebook.com/?id=' + window.location + '&scrape=true', //you can change 'windows.location' into your URL
    success: function(data){
        var currentDate  = new Date();
        var updatedDate = new Date(data.og_object.updated_time);
        if (updatedDate < currentDate) {
            
            console.log('FB: Will update', data);
            var form_data = new FormData();
                form_data.append("url", window.location);
                form_data.append("access_token", '{* Facebook access token *}'); //replace this with your Facebook app access token
                form_data.append("api_verion", 'v3.2'); //replace this with your Facebook app version

            $.ajax({
                url: "static/js/facebook/scrape.php",
                type: "POST",
                cache: false,
                dataType: "html",
                data: form_data,
                processData: false,
                contentType: false,
                success: function(response) {
                    FB.api('https://graph.facebook.com/', 'post', {
                        id: '{* Facebook app ID *}', //replace this with your Facebook app ID
                        scrape: true,
                        access_token:'{* Facebook access token *}' //replace this with your Facebook app access token
                    }, function(response) {
                        console.log('FB: Update response', response);
                    });
				},
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    console.log('FB: Unable to scrape', XMLHttpRequest, textStatus, errorThrown);
                }
            });
        }
        
    }
});