<?php 
//works only when there are post parameters
if (isset($_POST)) {
    $link = $_POST["url"];
    $access_token = $_POST["access_token"];
    $api_verion = $_POST["api_verion"];
    $url = 'https://graph.facebook.com/'.$api_verion.'/?scrape=true&id='.$link.'&access_token='.$access_token.'';
    $json = file_get_contents($url, false, stream_context_create(
        array (
            'http' => array(
                'method'    => 'POST',
                'header'    => 'Content-type: application/x-www-form-urlencoded',
                'content'   =>  $url
            )
        )
    ));
    var_dump($json);
}
?>