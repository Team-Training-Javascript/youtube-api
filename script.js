$(document).ready( function () {
    let api_key = 'AIzaSyCLqAUHV9NVdC60i2Dwsht-QSboaJhsvdA';
    let vid = '';
    let videos = $("#videos");
    
    $("#form-submit").submit(function (event) {
        event.preventDefault();
        let search = $("#search").val();
        console.log(search);

       videoSearch(api_key, search, 16);
    })

    function videoSearch(api_key, search, maxResults){

        videos.empty();

        $.get("https://youtube.googleapis.com/youtube/v3/search?key=" 
        + api_key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, function (data){
            data.items.forEach(element => {
                vid = `<iframe class="frame" src="http://www.youtube.com/embed/${element.id.videoId}" frameborder="0" allowfullscreen></iframe>`
                videos.append(vid);
            });
        });
    }
})