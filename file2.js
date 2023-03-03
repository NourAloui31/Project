
function randInt() { 
    // the function will generate random number less than 20
    return Math.floor(Math.random() * (21)) 
    }

var array=[]
// this array contain the numbers that the player have chosen
var arrayRandomNumb=[]
// this array contain the numbers that the random numbers
var counter=1

function start(){
    var btn = document.getElementById("start")
    // the player will clicks only one time on start
    btn.disabled=true
    getInputNumbers()   

    // generate 10 random numbers
    getRandomNumbers()
    
    var nbCorr= verif(array,arrayRandomNumb)
    if (nbCorr >=3 ){
        // if there is 3 correct number or more the player wins 
        var rslt=$('<div> BINGOO !! </div>')
        rslt.addClass('Bingo')
        $('div#result').append(rslt)
    }
    else{
        // if there is less than 3 correct number the player loses
        var rslt=$('<div> YOU HAVE LOST !! </div>')
        rslt.addClass('Lost')
        $('div#result').append(rslt)
        var btn = $('<a href="http://127.0.0.1:5500/file.html" >TAP HERE TO  PLAY AGAIN</a></div>')
        $('div#btn_replay').append(btn)
    }


}

// to get the numbers that the player displayed
function getInputNumbers(){
    var items=document.querySelectorAll("input.number")
    array=[]
        for (var i=0;i<items.length;i++){
            array.push(items[i].value)
        }    
}

function getRandomNumbers(){
    arrayRandomNumb=[]
    if(counter<11){
        for (var i=0;i<10;i++){
            var rand=randInt()
            arrayRandomNumb.push(rand)
            var box=$('<div>'+rand+'</div>')
            box.addClass('randNumb')
            $('div#randomNumbers').append(box)
            counter++

        }
    }
    
}

// the function verif will loop into the two arrays and count the guessed numbers
function verif(arr1,arr2){
    var count=0

    for (var i=0;i<arr2.length;i++){
        var x=arr2[i]
       
        for (var j=0;j<arr1.length;j++){
            if (x == arr1[j]){
                // creat a div tag that will display the guessed number
                var corr=$('<div>'+x+'</div>')
                corr.addClass('correctNumb')
                 $('div#correctValue').append(corr)
                count++
            }
        }
    }
       return count
    
}

