

function mp3() {

    var convertbutton = document.getElementById('convert-button');
    
    if (convertbutton.value ==  null | convertbutton.value.length < 11) {
        alert('Please add the url');
    } if(convertbutton.value.match("v=([a-zA-Z0-9\_\-]+)&?")[1]) {
        var id = convertbutton.value.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
        // var loadingInProgress = true;
        var convertBtn = document.querySelector('.convert-button');
        var  URLinput = document.querySelector('.URL-input');
            console.log(id);
            
        if(id.length ===11 ){
            document.getElementById("demo").innerHTML = "Converting to mp3! ⌛";
             window.location.href = `https://downloadyoutubemp3.herokuapp.com/download?URL=${id}`;


             var ctx = document.getElementById('my_canvas').getContext('2d');
    var al = 0;
    var start = 4.72;
    var cw = ctx.canvas.width;
    var ch = ctx.canvas.height;
    var diff;
    function progressSim(){
        diff = ((al/100)*Math.PI*3*10).toFixed(2);
        ctx.clearRect(0,0,cw,ch);
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'red';
        ctx.fillStyle= 'white';
        ctx.strokeRect= '##ff0000';
        ctx.textAling= 'center';
        ctx.fillText(al+'%', cw*.5-12, ch*.50+4,cw);
       ctx.strokeRect= '##ff0000';
        ctx.beginPath();
        ctx.arc(35,35,30, start, diff/14+start, false);
        ctx.stroke();
        if(al >=100){
            clearTimeout(sim);
        }
        al++;

    }
    var sim = setInterval(progressSim, 1000);


           
        }else{
            alert('Please add a valid URL');
        }
        // convertBtn.addEventListener('click', () => {
        // console.log(`URL: ${URLinput.value}`);	
      
        // var = http.get(var = baseUrl + var = URLinput.value).subscribe();
        // var = lala();
        // console.log(window.location.href);
        // });




        // var id = input.value.match("v=([a-zA-Z0-9\_\-]+)&?")[1];
        // var iframe = document.getElementById('iframe');
        // iframe.src = 'https://www.convertmp3.io/widget/button/?video=https://www.youtube.com/watch?v=' + id;
        /*
        iframe.onload = function() {
            console.log(document.getElementById("iframe").contentWindow.document.getElementById("percentageText").value);
        };
        */
    }
}



// https://ctrlq.org/code/19797-regex-youtube-id
function extractVideoID(input){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = input.match(regExp);
    if ( match && match[7].length == 11 ){
        return match[7];
    }else{
        alert("Could not extract video ID.");
    }
}


function keyUp(t){
    if (t.value.match(/\s/g)) {
        t.value=t.value.replace(/\s/g,'');
    }
}







// <script type="text/javascript">
		
// function getSrc() {
//     var input = document.getElementById('input');
    
//     if (input.value == "" | input.value.length < 11) {
//         alert('Input field is either empty or id doesn\'t match with id of any video.');
//     } else {
//         var id = input.value.replace("https://","").replace("http://","").replace("www.","").replace("youtube.com/","").replace("youtu.be/","").replace("watch?v=","").replace("","");
//         var iframe = document.getElementById('iframe');
//         iframe.src = 'https://www.convertmp3.io/widget/button/?video=https://www.youtube.com/watch?v=' + id;
        
//         iframe.onload = function() {
//             console.log(document.getElementById("iframe").contentWindow.document.getElementById("percentageText").value);
//         };
        
//     }
// }

// function keyUp(t){
//     if (t.value.match(/\s/g)) {
//         t.value=t.value.replace(/\s/g,'');
//     }
// }
// </script>