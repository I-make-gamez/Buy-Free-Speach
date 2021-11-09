const b = document.getElementById('b');
const o = document.getElementById('o')

b.addEventListener('click', fire, false);

var no = 1

function fire(){
    if(no === 1){
        o.innerHTML = 'Why buy free Speech? You get to talk!<br>You get to talk about other people<br>You get to talk on social media!'
        no += 1
    }else if(no === 2){
        o.innerHTML = 'In WW1, Free speech was limited.<br>If there were any spies in the ares they could<br>easedrop on you.<br><br>Did you know?<br>It is illegal to make death treats on the president.<br>So much so that you could go to jail.'
        no += 1
    }else if(no === 3){
        o.innerHTML = 'In conclusion, Free speech is important to Us.<br>And we aim to keep it free for all!'
        no += 1
    }else if(no === 4){
        o.innerHTML = "Want to buy A voice? Well have I got a deal for you!<br>Right now, we're selling Speech for only $99.99!<br>Come on down to Bill's Other Right's and get your<br>speech today!"
        no = 1
    }
}
