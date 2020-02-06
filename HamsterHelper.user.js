// ==UserScript==
// @name              HamsterHelper
// @namespace         http://discord.gg/G3PTYPy
// @version           6
// @require           http://code.jquery.com/jquery-3.4.1.min.js
// @UpdateUrl         https://github.com/ArghKevin/CritterScripts/raw/master/HamsterHelper.user.js
// @description       This script will put your BoxCritters client on adderall, with some acid sprinkled in for good measure
// @author            Kinju/slaggo/Blackout03
// @creativeaid       Penguin Giraffe
// @match             https://boxcritters.com/play/*
// @match             http://boxcritters.com/play/*
// @icon              https://cdn.discordapp.com/attachments/673345692697231413/673346230394421249/unknown.png
// @run-at            document-start
// ==/UserScript==

var favicon_link_html = document.createElement('link');
favicon_link_html.rel = 'icon';
favicon_link_html.href = 'https://cdn.discordapp.com/attachments/395187780600201217/570214992100720640/CustomBeaverTwitter.png';
favicon_link_html.type = 'image/x-icon';
try {
  document.getElementsByTagName('head')[0].appendChild( favicon_link_html );
}
catch(e) { }

var jokes = [
    {"j":"Whats 9+10?","p":"21"},
    {"j":"What do you call a hamster that can't run in a wheel?","p":"fat"},
    {"j":"What happens when two snails get into a fight?","p":"They pull out their shotguns and their slugs"},
    {"j":"*Knock Knock*","p":"Joe Mama"},
    {"j":"What do you call a Hamster in space?","p":"lost"},
    {"j":"What is a hamster's favorite food?","p":"animal crackers"},
    {"j":"Hotel?","p":"Trivago."}
]

var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();


window.addEventListener('load', function() {

//button style = "color:blue;background-color:red
    var x=document.getElementById("myAudio");
    var chatBar = document.getElementsByClassName("input-group")[0];
    var chatBox = document.getElementsByClassName("row justify-content-center")[1];
    var jokeBtnHTML = `<span class="input-group-btn"><button id="jokebtn" class="btn btn-primary">Joke</button></span>`;
    var clapBtnHTML = `<span class="input-group-btn"><button id="clapbtn" class="btn" for="clapBtn" style="background-color:black; border-color:#71e643; color:#71e643">Items</button></span>`;
    var balloonoffBtnHTML = `<span class="input-group-btn"><button id="balloonoffbtn" class="btn btn-primary">Chat Balloons On/Off</button></span>`;
    var nametagsonoffBtnHTML = `<span class="input-group-btn"><button id="nametagsonoffbtn" class="btn btn-primary">Name Tags On/Off</button></span>`;
    var freeitemBtnHTML = `<span class="input-group-btn"><button id="freeitembtn" class="btn btn-primary">new items</button></span>`;
    var JoinTavernBtnHTML = `<span class="input-group-btn"><button id="JoinTavernbtn" class="btn btn-primary">Join Tavern</button></span>`;
    var JoinSnowmanVillageBtnHTML = `<span class="input-group-btn"><button id="JoinSnowmanVillagebtn" class="btn btn-primary">Join Snowman Village</button></span>`;
    var JoinForestBtnHTML = `<span class="input-group-btn"><button id="JoinForestbtn" class="btn btn-primary">Join Forest</button></span>`;
    var JoinCrashSiteBtnHTML = `<span class="input-group-btn"><button id="JoinCrashSitebtn" class="btn btn-primary">Join Crash Site</button></span>`;
    var JoinChristmasTavernBtnHTML = `<span class="input-group-btn"><button id="JoinChristmasTavernbtn" class="btn btn-primary">Join Christmas Tavern</button></span>`;
    var PopBtnHTML = `<span class="input-group-btn"><button id="Popbtn" class="btn btn-primary">room pop</button></span>`;
    var ExtraBtnHTML = `<span class="input-group-btn"><button id="Extrabtn" class="btn btn-primary">hey</button></span>`;
    var BEEPBtnHTML = `<span class="input-group-btn"><button id="BEEPbtn" class="btn btn-primary">BEEP!</button></span>`;
    var InvisibleBtnHTML = `<span class="input-group-btn"><button id=InvisibleBtn" class="btn btn-lg" for="Invisible" style="color: transparent; background-color: transparent; border-color: transparent; cursor: default;" onClick="FontChange">fontchange</button></span>`
    var SecondInvisibleBtnHTML = `<span class="input-group-btn"><button id=SecondInvisibleBtn" class="btn btn-lg" for="SecondInvisible" style="color: transparent; background-color: transparent; border-color: transparent; cursor: default; onclick="alert('hey')";>c u s t o m    a l e r t</button></span>`
    var LogoutBtnHTML = `<span class="input-group-btn"><button id="Logoutbtn" class="btn btn-primary" onclick="world.logout()">ez Logout</button></span>`;
    var xxtraBtnHTML = `<span class="input-group-btn"><button id="xxtrabtn" class="btn btn-primary" onclick="world.login(myPlayer.sessionTicket)">relog</button></span>`;
    var BluesGradientHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="BluesGradient"><label class="form-check-label" for="BluesGradient" style="color:#000000;">Gradient(blues)</label></span></div>`;
    var RainbowHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="Rainbow"><label class="form-check-label" for="Rainbow" style="color:#000000;">Rainbow</label></span></div>`;
    var radgradHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="radgrad"><label class="form-check-label" for="radgrad" style="color:#000000;">radgrad(trippy)</label></span></div>`;
    var kevinHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="kevin"><label class="form-check-label" for="kevin" style="color:#000000;">kevin.exe</label></span></div>`;
     var spacemodeHTML = `<div id="smDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="spacemode"><label class="form-check-label" for="spacemode" style="color:#000000;">WIndows</label></span></div>`;
    var darkmodeHTML = `<div id="dmDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="darkmode"><label class="form-check-label" for="darkmode" style="color:#000000;">Dark Mode</label></span></div>`;
    var PurpleHTML = `<div id="pDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="Purple"><label class="form-check-label" for="Purple" style="color:rgb(76, 0, 164);">PURPLE</label></span></div>`;
    var BlueHTML = `<div id="bDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="Blue"><label class="form-check-label" for="Blue" style="color:#2A2D99;">Blue</label></span></div>`;
    var LightBlueHTML = `<div id="lbDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="LightBlue"><label class="form-check-label" for="LightBlue" style="color:#007CFF;">LightBlue</label></span></div>`;
    var RedHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="Red"><label class="form-check-label" for="Red" style="color:#D1111B;">Red</label></span></div>`;
    var OGHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="OG"><label class="form-check-label" for="OG" style="color:#2897BD;">OG</label></span></div>`;
    var GreenHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="Green"><label class="form-check-label" for="Green" style="color:#14A40B;">Green</label></span></div>`;
    var YellowHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="Yellow"><label class="form-check-label" for="Yellow" style="color:#E1B100;">Yellow</label></span></div>`;
    var GradientHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="Gradient"><label class="form-check-label" for="Gradient" style="color:#000000;">purpleorange Gradient</label></span></div>`;
    var lightmodeHTML = `<div id="lmDiv" class="row justify-content-center"><span><input class="form-radio-input" type="radio" name="tangerine" value="" id="lightmode"><label class="form-check-label" for="lightmode" style="color:#000000;">Light Mode</label></span></div>`;
   var audioplayer = '<audio controls> <source src="http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3" type="audio/mpeg">'
    chatBar.insertAdjacentHTML('afterend', clapBtnHTML);
    chatBar.insertAdjacentHTML('afterend', jokeBtnHTML);
    chatBar.insertAdjacentHTML('afterend', BEEPBtnHTML);
    chatBar.insertAdjacentHTML('afterend', ExtraBtnHTML);
    chatBar.insertAdjacentHTML('afterend', PopBtnHTML);
    chatBar.insertAdjacentHTML('afterend', balloonoffBtnHTML);
    chatBar.insertAdjacentHTML('afterend', nametagsonoffBtnHTML);
    chatBar.insertAdjacentHTML('afterend', freeitemBtnHTML);
    chatBox.insertAdjacentHTML('afterend', radgradHTML);
    chatBox.insertAdjacentHTML('afterend', RainbowHTML);
    chatBox.insertAdjacentHTML('afterend', BluesGradientHTML);
    chatBox.insertAdjacentHTML('afterend', GradientHTML);
    chatBox.insertAdjacentHTML('afterend', YellowHTML);
    chatBox.insertAdjacentHTML('afterend', GreenHTML);
    chatBox.insertAdjacentHTML('afterend', OGHTML);
    chatBox.insertAdjacentHTML('afterend', RedHTML);
    chatBox.insertAdjacentHTML('afterend', LightBlueHTML);
    chatBox.insertAdjacentHTML('afterend', BlueHTML);
    chatBox.insertAdjacentHTML('afterend', PurpleHTML);
    chatBox.insertAdjacentHTML('afterend', spacemodeHTML);
        chatBox.insertAdjacentHTML('afterend', kevinHTML);
    chatBox.insertAdjacentHTML('afterend', darkmodeHTML);
    chatBox.insertAdjacentHTML('afterend', lightmodeHTML);
    chatBar.insertAdjacentHTML('afterend', LogoutBtnHTML);
        chatBox.insertAdjacentHTML('afterend', audioplayer);
    chatBox.insertAdjacentHTML('afterend', xxtraBtnHTML);

    chatBox.insertAdjacentHTML('afterend', JoinChristmasTavernBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinCrashSiteBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinForestBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinSnowmanVillageBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinTavernBtnHTML);

    chatBox.insertAdjacentHTML('afterend', SecondInvisibleBtnHTML);
    chatBox.insertAdjacentHTML('afterend', InvisibleBtnHTML);

    if (localStorage.getItem("theme") == "space") {
        document.body.style = "background:url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2015%2F12%2F126274-nature-landscape-sky-hill-grass-field-clouds-Windows_XP.jpg&f=1&nofb=1');";
        document.getElementById("spacemode").checked = true;
    }
        if (localStorage.getItem("theme") == "kevin") {
        document.body.style = "background-color:#001FFF;transition:1.5s";
        delay(function(){
                document.body.style = "background-color:#FFFB00;transition:1.5s";
        }, 1 );
        document.getElementById("kevin").checked = true;
    }
    if (localStorage.getItem("theme") == "dark") {
        document.body.style = "background-color:rgb(16, 21, 31);";
        document.getElementById("darkmode").checked = true;

    }
    if (localStorage.getItem("theme") == "Purple") {
        document.body.style = "background-color:rgb(160, 0, 310);";
        document.getElementById("Purple").checked = true;
    }
if (localStorage.getItem("theme") == "Gradient") {
    document.body.style = "background-color:rgb(76, 0, 164);";
                delay(function ooo(){
            document.body.style = "background-color:#e6d243;transition:1.5s";
        }, 1500 );
        document.getElementById("Gradient").checked = true;
    }
if (localStorage.getItem("theme") == "BluesGradient") {
    document.body.style = "background-color:#1cd2ff;transition:1.5s";
    delay(function(){
            document.body.style = "background-color:#1ca8ff;transition:1.5s";
            delay(function(){
            document.body.style = "background-color:#1c59ff;transition:1.5s";
                    delay(function(){
            document.body.style = "background-color:#1ca8ff;transition:1.5s";
                                }, 1500 );
                        }, 1500 );
                }, 1500 );
        document.getElementById("BluesGradient").checked = true;
    }
    if (localStorage.getItem("theme") == "Rainbow") {
document.body.style = "background-color:#ff1f26;transition:1.5s";
                delay(function d(){
            document.body.style = "background-color:#ff841f;transition:1.5s";
                    delay(function e(){
            document.body.style = "background-color:#ffd21f;transition:1.5s";
                        delay(function f(){
            document.body.style = "background-color:#6bd930;transition:1.5s";
                            delay(function g(){
            document.body.style = "background-color:#48941c;transition:1.5s";
                                delay(function h(){
            document.body.style = "background-color:#19abff;transition:1.5s";
                                    delay(function i(){
            document.body.style = "background-color:#1957ff;transition:1.5s";
                                        delay(function j(){
            document.body.style = "background-color:#bf30c7;transition:1.5s";
                                            delay(function k(){
            document.body.style = "background-color:#7e30c7;transition:1.5s";
                                                        }, 1500 );
                                                    }, 1500 );
                                                }, 1500 );
                                            }, 1500 );
                                        }, 1500 );
                                    }, 1500 );
                                }, 1500 );
                            }, 1500 );
        document.getElementById("Rainbow").checked = true;
    }

    if (localStorage.getItem("theme") == "Blue") {
        document.body.style = "background-color:#2d57ed;";
        document.getElementById("Blue").checked = true; }

    if (localStorage.getItem("theme") == "LightBlue") {
        document.body.style = "background-color:#00b2ff;";
        document.getElementById("LightBlue").checked = true;
    }
    if (localStorage.getItem("theme") == "Red") {
        document.body.style = "background-color:#e6434b;";
        document.getElementById("Red").checked = true;
    }
    if (localStorage.getItem("theme") == "OG") {
        document.body.style = "background-color:#2a475c;";
        document.getElementById("OG").checked = true;
    }
    if (localStorage.getItem("theme") == "Green") {
        document.body.style = "background-color:#71e643;";
        document.getElementById("Green").checked = true;
    }
    if (localStorage.getItem("theme") == "Yellow") {
        document.body.style = "background-color:#e6d243;";
        document.getElementById("Yellow").checked = true;
    }
    if (localStorage.getItem("theme") == "radgrad") {
        document.body.style = "background-image: repeating-radial-gradient(red, yellow 10%, green 15%);";
        document.getElementById("radgrad").checked = true;
    }
    if (localStorage.getItem("theme") == "light") {
        document.body.style = "background:url('https://cdn.discordapp.com/attachments/319000727332716544/570229430509895691/Light_Background.png;";
        document.getElementById("lightmode").checked = true;
    }

    function JoinTavern() {
        world.sendMessage("/join tavern")
    }

function JoinSnowmanVillage() {
    world.sendMessage("/join snowman_village")
}
    function Function1() {
    alert('c u s t o m   a l e r t');
    }
function FontChange(){
    document.getElementById("Popbtn").style.fontFamily =
        "Impact,Charcoal,sans-serif";
}
function JoinForest() {
    world.sendMessage("/join forest")
}
function JoinCrashSite() {
    world.sendMessage("/join crash_Site")
}
function JoinChristmasTavern() {
    world.sendMessage("/join christmas tavern")
}
function Pop() {
    world.sendMessage("/Pop")
}
function Extra() {
    world.sendMessage("hey")
}
function BEEP() {
    world.sendMessage("/beep")
}
    function sendJoke() {
        document.getElementById("inputMessage").value="";
        var joke = jokes[(Math.floor(Math.random() * jokes.length))];
        world.sendMessage(joke.j);
        delay(function s(){
            world.sendMessage(joke.p);
        }, 5000 );
    }
function esporte(){
    world.sendMessage("/esporte")
}
    function critbits(){
        world.sendMessage("/critbits")
    }
    function snowball(){
        world.sendMessage("/snowball")
    }
    function squeeze(){
        world.sendMessage("/squeeze")
    }
    function rocketsnail(){
        world.sendMessage("/rocketsnail")
    }
        function andybulletin(){
        world.sendMessage("/andybulletin")
    }
        function cute(){
        world.sendMessage("/cute")
    }
        function oommgames(){
        world.sendMessage("/oommgames")
    }
        function boxcritterswiki(){
        world.sendMessage("/boxcritterswiki")
    }
        function d3boxcritters(){
        world.sendMessage("/3dboxcritters")
    }
        function boxcritters3d(){
        world.sendMessage("/boxcritters3d")
    }
        function goodnight(){
        world.sendMessage("/goodnight")
    }
        function madeincanada(){
        world.sendMessage("/madeincanada")
    }
        function thekeeper(){
        world.sendMessage("/thekeeper")
    }
        function bunnyhug(){
        world.sendMessage("/bunnyhug")
    }
        function rocketsnail(){
        world.sendMessage("/rocketsnail")
    }
        function explore(){
        world.sendMessage("/explore")
    }
        function greenplumber(){
        world.sendMessage("/greenplumber")
    }
        function darkmode(){
        world.sendMessage("/darkmode")
    }
        function duckhunter(){
        world.sendMessage("/duckhunter")
    }
        function piratepack(){
        world.sendMessage("/piratepack")
    }
        function pickle(){
        world.sendMessage("/pickle")
    }
        function oscarproductions(){
        world.sendMessage("/oscarproductions")
    }
        function livestream(){
        world.sendMessage("/livestream")
    }
        function creative(){
        world.sendMessage("/creative")
    }
        function boxcrittersguild(){
        world.sendMessage("/boxcrittersguild")
    }
        function fun(){
        world.sendMessage("/fun")
    }
        function forumcritters(){
        world.sendMessage("/forumcritters")
    }
        function marco(){
        world.sendMessage("/marco")
    }
        function adventure(){
        world.sendMessage("/adventure")
    }
        function freeitem(){
        world.sendMessage("/freeitem")
    }
        function redcross(){
        world.sendMessage("/redcross")
    }
        function squeeze(){
        world.sendMessage("/squeeze")
    }
        function imagination(){
        world.sendMessage("/imagination")
    }
        function sparkle(){
        world.sendMessage("/sparkle")
    }
        function tamago(){
        world.sendMessage("/tamago")
    }
    function missed(){
        world.sendMessage("/missed")
    }
    function tbt(){
        world.sendMessage("/tbt")
    }
    function crashsite(){
        world.sendMessage("/join crash_site")
    }
    function sendClap() {//39 items
        esporte;
        setTimeout(critbits, 1500)
setTimeout(snowball, 3000)
        setTimeout(squeeze, 4500)
        setTimeout(rocketsnail, 6000)
        setTimeout(andybulletin, 7500)
        setTimeout(cute, 9000)
        setTimeout(oommgames, 10500)
        setTimeout(boxcritterswiki, 12000)
        setTimeout(d3boxcritters, 13500)
        setTimeout(boxcritters3d, 15000)
        setTimeout(goodnight, 16500)
        setTimeout(madeincanada, 18000)
        setTimeout(thekeeper, 19500)
        setTimeout(bunnyhug, 21000)
        setTimeout(explore, 22500)
        setTimeout(greenplumber, 24000)
        setTimeout(darkmode, 25500)
        setTimeout(duckhunter, 27000)
        setTimeout(piratepack, 28500)
        setTimeout(pickle,30000)
        setTimeout(oscarproductions, 31500)
        setTimeout(livestream, 33000)
        setTimeout(creative, 34500)
        setTimeout(boxcrittersguild, 36000)
        setTimeout(fun, 37500)
        setTimeout(forumcritters, 39000)
        setTimeout(marco, 41000)
        setTimeout(adventure, 42500)
        setTimeout(freeitem, 44000)
        setTimeout(redcross, 45500)
        setTimeout(squeeze, 47000)
        setTimeout(imagination, 48500)
        setTimeout(sparkle, 50000)
        setTimeout(tamago, 51500)
        setTimeout(missed, 53000)
        setTimeout(tbt, 54500)
        setTimeout(crashsite, 56000)

    }

    function balloonoff() {
        document.getElementById("inputMessage").value="";
        world.sendMessage("/balloons");
    }

    function nametagsonoff() {
        document.getElementById("inputMessage").value="";
        world.sendMessage("/nicknames");
    }


    function spacemodeToggle() {
        if(spacemodeBox.checked == true) {
            localStorage.setItem("theme", "space");
            document.body.style = "background:url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2015%2F12%2F126274-nature-landscape-sky-hill-grass-field-clouds-Windows_XP.jpg&f=1&nofb=1');transition:1.5s;";
        }
    }

    function darkmodeToggle() {
        if(darkmodeBox.checked == true) {
            localStorage.setItem("theme", "dark");
            document.body.style = "background-color:rgb(16, 21, 31);transition:1.5s";
        }
    }
    function kevinToggle() {
        if(kevinBox.checked == true) {
            localStorage.setItem("theme", "kevin");
            document.body.style = "background-color:#001FFF;transition:1.5s";
        delay(function(){
                document.body.style = "background-color:#FFFB00;transition:1.5s";
        }, 1 );
        }
    }

        function PurpleToggle() {
        if(PurpleBox.checked == true) {
            localStorage.setItem("theme", "Purple");
            document.body.style = "background-color:rgb(160, 0, 310);transition:1.5s";
        }
    }
    function GradientToggle() {
            if(GradientBox.checked == true) {
        localStorage.setItem("theme", "Gradient");
                document.body.style = "background-color:rgb(160, 0, 310);transition:4s";
            document.body.style = "background-color:#FF9C16;transition:4s";

    }
    }
    function BluesGradientToggle() {
            if(BluesGradientBox.checked == true) {
        document.body.style = "background-color:#1cd2ff;transition:1.5s";
                delay(function bf(){
            document.body.style = "background-color:#1ca8ff;transition:1.5s";
                    delay(function bg(){
            document.body.style = "background-color:#1c59ff;transition:1.5s";
                        delay(function bh(){
            document.body.style = "background-color:#1ca8ff;transition:1.5s";

                                    }, 1500 );
                                }, 1500 );
                            }, 1500 );

    }
    }
function RainbowToggle() {
            if(RainbowBox.checked == true) {
document.body.style = "background-color:#ff1f26;transition:1.5s";
                delay(function bi(){
            document.body.style = "background-color:#ff841f;transition:1.5s";
                    delay(function bj(){
            document.body.style = "background-color:#ffd21f;transition:1.5s";
                        delay(function bk(){
            document.body.style = "background-color:#6bd930;transition:1.5s";
                            delay(function bl(){
            document.body.style = "background-color:#48941c;transition:1.5s";
                                delay(function bm(){
            document.body.style = "background-color:#19abff;transition:1.5s";
                                    delay(function bn(){
            document.body.style = "background-color:#1957ff;transition:1.5s";
                                        delay(function bo(){
            document.body.style = "background-color:#bf30c7;transition:1.5s";
                                            delay(function bp(){
            document.body.style = "background-color:#7e30c7;transition:1.5s";
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
    }
    }

    if (localStorage.getItem("theme") == "Gradient") {
                document.body.style = "background-color:rgb(160, 0, 310);transition:4s";
            delay(function bq(){
            document.body.style = "background-color:#FF9C16;transition:4s";
        }, 4000 );
 document.getElementById("Gradient").checked = true;
    }

    if (localStorage.getItem("theme") == "BluesGradient") {
                document.body.style = "background-color:#1cd2ff;transition:1.5s";
                delay(function br(){
            document.body.style = "background-color:#1ca8ff;transition:1.5s";
                    delay(function bs(){
            document.body.style = "background-color:#1c59ff;transition:1.5s";
                        delay(function bt(){
            document.body.style = "background-color:#1ca8ff;transition:1.5s";

                                    }, 1500 );
                                }, 1500 );
                            }, 1500 );
    }

    if (localStorage.getItem("theme") == "Rainbow") {
document.body.style = "background-color:#ff1f26;transition:1.5s";
                delay(function bu(){
            document.body.style = "background-color:#ff841f;transition:1.5s";
                    delay(function bv(){
            document.body.style = "background-color:#ffd21f;transition:1.5s";
                        delay(function bw(){
            document.body.style = "background-color:#6bd930;transition:1.5s";
                            delay(function bx(){
            document.body.style = "background-color:#48941c;transition:1.5s";
                                delay(function by(){
            document.body.style = "background-color:#19abff;transition:1.5s";
                                    delay(function bz(){
            document.body.style = "background-color:#1957ff;transition:1.5s";
                                        delay(function ca(){
            document.body.style = "background-color:#bf30c7;transition:1.5s";
                                            delay(function cb(){
            document.body.style = "background-color:#7e30c7;transition:1.5s";
                                                }, 1500 );
                                            }, 1500 );
                                        }, 1500 );
                                    }, 1500 );
                                }, 1500 );
                            }, 1500 );
}, 1500 );
}, 1500 );
    }
            function BlueToggle() {
        if(BlueBox.checked == true) {
            localStorage.setItem("theme", "Blue");
            document.body.style = "background-color:#2d57ed;transition:1.5s";
        }
    }
    function radgradToggle() {
        if(radgradBox.checked == true) {
            localStorage.setItem("theme", "radgrad");
            document.body.style = "background-image: repeating-radial-gradient(red, yellow 10%, green 15%)";
        }
    }
                function LightBlueToggle() {
        if(LightBlueBox.checked == true) {
            localStorage.setItem("theme", "LightBlue");
            document.body.style = "background-color:#00b2ff;transition:1.5s";
        }
    }
                function RedToggle() {
        if(RedBox.checked == true) {
            localStorage.setItem("theme", "Red");
            document.body.style = "background-color:#e6434b;transition:1.5s";
        }
    }
                function OGToggle() {
        if(OGBox.checked == true) {
            localStorage.setItem("theme", "OG");
            document.body.style = "background-color:#2a475c;transition:1.5s";
        }
    }
                function GreenToggle() {
        if(GreenBox.checked == true) {
            localStorage.setItem("theme", "Green");
            document.body.style = "background-color:#71e643;transition:1.5s";
        }
    }
    function YellowToggle() {
        if(YellowBox.checked == true) {
            localStorage.setItem("theme", "Yellow");
            document.body.style = "background-color:#e6d243;transition:1.5s";
        }
    }
    function lightmodeToggle() {
        if(lightmodeBox.checked == true) {
            localStorage.setItem("theme", "light");
            document.body.style = "background:url('https://cdn.discordapp.com/attachments/319000727332716544/570229430509895691/Light_Background.png');transition:1.5s;";
        }
    }

    function freeitem() {
        document.getElementById("inputMessage").value="";
        world.sendMessage("/FreeItem");
        delay(function cj(){
        world.sendMessage("/darkmode");
            delay(function ck(){
        world.sendMessage("/explore");
                delay(function cl(){
        world.sendMessage("/missed");
                    delay(function cm(){
        world.sendMessage("/tbt");

        }, 1500 );
        }, 1500 );
        }, 1500 );
        }, 1500 );
    }

    var jokeBtn = document.querySelector ("#jokebtn");
    if (jokeBtn) {
        jokeBtn.addEventListener ("click", sendJoke, false);
    }
    var clapBtn = document.querySelector ("#clapbtn");
    if (clapBtn) {
        clapBtn.addEventListener ("click", sendClap, false);
    }

    var balloonoffBtn = document.querySelector ("#balloonoffbtn");
    if (balloonoffBtn) {
        balloonoffBtn.addEventListener ("click", balloonoff, false);
    }

    var nametagsonoffBtn = document.querySelector ("#nametagsonoffbtn");
    if (nametagsonoffBtn) {
        nametagsonoffBtn.addEventListener ("click", nametagsonoff, false);
    }

    var spacemodeBox = document.querySelector ("#spacemode");
    if (spacemodeBox) {
        spacemodeBox.addEventListener ("click", spacemodeToggle, false);
    }
    var kevinBox = document.querySelector ("#kevin");
    if (kevinBox) {
        kevinBox.addEventListener ("click", kevinToggle, false);
    }

    var darkmodeBox = document.querySelector ("#darkmode");
    if (darkmodeBox) {
        darkmodeBox.addEventListener ("click", darkmodeToggle, false);
    }
    var radgradBox = document.querySelector ("#radgrad");
    if (radgradBox) {
        radgradBox.addEventListener ("click", radgradToggle, false);
    }

    var PurpleBox = document.querySelector ("#Purple");
    if (PurpleBox) {
        PurpleBox.addEventListener ("click", PurpleToggle, false);
    }
    var GradientBox = document.querySelector ("#Gradient");
    if (GradientBox) {
        GradientBox.addEventListener ("click", GradientToggle, false);
    }
    var BluesGradientBox = document.querySelector ("#BluesGradient");
    if (BluesGradientBox) {
        BluesGradientBox.addEventListener ("click", BluesGradientToggle, false);
    }
    var RainbowBox = document.querySelector ("#Rainbow");
    if (RainbowBox) {
        RainbowBox.addEventListener ("click", RainbowToggle, false);
    }
var BlueBox = document.querySelector ("#Blue");
    if (BlueBox) {
        BlueBox.addEventListener ("click", BlueToggle, false);
    }
    var LightBlueBox = document.querySelector ("#LightBlue");
    if (LightBlueBox) {
        LightBlueBox.addEventListener ("click", LightBlueToggle, false);
    }
    var RedBox = document.querySelector ("#Red");
    if (RedBox) {
        RedBox.addEventListener ("click", RedToggle, false);
    }
    var OGBox = document.querySelector ("#OG");
    if (OGBox) {
        OGBox.addEventListener ("click", OGToggle, false);
    }
    var GreenBox = document.querySelector ("#Green");
    if (GreenBox) {
        GreenBox.addEventListener ("click", GreenToggle, false);
    }
    var YellowBox = document.querySelector ("#Yellow");
    if (YellowBox) {
        YellowBox.addEventListener ("click", YellowToggle, false);
    }
    var lightmodeBox = document.querySelector ("#lightmode");
    if (lightmodeBox) {
        lightmodeBox.addEventListener ("click", lightmodeToggle, false);
    }

    var freeitemBtn = document.querySelector ("#freeitembtn");
    if (freeitemBtn) {
        freeitemBtn.addEventListener ("click", freeitem, false);
    }

    var JoinTavernBtn = document.querySelector ("#JoinTavernbtn");
    if (JoinTavernBtn) {
        JoinTavernBtn.addEventListener ("click", JoinTavern, false);
    }


    var JoinSnowmanVillageBtn = document.querySelector ("#JoinSnowmanVillagebtn");
    if (JoinSnowmanVillageBtn) {
        JoinSnowmanVillageBtn.addEventListener ("click", JoinSnowmanVillage);
    }

    var JoinForestBtn = document.querySelector ("#JoinForestbtn");
    if (JoinForestBtn) {
        JoinForestBtn.addEventListener ("click", JoinForest);
    }
    var JoinCrashSiteBtn = document.querySelector ("#JoinCrashSitebtn");
    if (JoinCrashSiteBtn) {
        JoinCrashSiteBtn.addEventListener ("click", JoinCrashSite);
    }
    var JoinChristmasTavernBtn = document.querySelector ("#JoinChristmasTavernbtn");
    if (JoinChristmasTavernBtn) {
        JoinChristmasTavernBtn.addEventListener ("click", JoinChristmasTavern);
    }
    var PopBtn = document.querySelector ("#Popbtn");
    if (PopBtn) {
        PopBtn.addEventListener ("click", Pop);
    }
    var ExtraBtn = document.querySelector ("#Extrabtn");
    if (ExtraBtn) {
        ExtraBtn.addEventListener ("click", Extra);
    }
    var BEEPBtn = document.querySelector ("#BEEPbtn");
    if (BEEPBtn) {
        BEEPBtn.addEventListener ("click", BEEP);
    }
    setInterval(function(){alert("Hello"); }, 5000000);

    setInterval(function(){if(GradientBox.checked == true) {

        localStorage.setItem("theme", "Gradient");
                    document.body.style = "background-color:rgb(160, 0, 255);transition:4s";
            delay(function cn(){
            document.body.style = "background-color:#FF9C16;transition:4s";
    }, 4000 );
    }
    }, 8000);

    setInterval(function(){if(BluesGradientBox.checked == true) {
        document.body.style = "background-color:#1cd2ff;transition:1.5s";
                delay(function co(){
            document.body.style = "background-color:#1ca8ff;transition:1.5s";
                    delay(function cp(){
            document.body.style = "background-color:#1c59ff;transition:1.5s";
                        delay(function cq(){
            document.body.style = "background-color:#1ca8ff;transition:1.5s";

                                    }, 1500 );
                                }, 1500 );
                            }, 1500 );
    }
    }, 6000);

    setInterval(function(){if(RainbowBox.checked == true) {
document.body.style = "background-color:#ff1f26;transition:1.5s";
                delay(function cr(){
            document.body.style = "background-color:#ff841f;transition:1.5s";
                    delay(function cs(){
            document.body.style = "background-color:#ffd21f;transition:1.5s";
                        delay(function ct(){
            document.body.style = "background-color:#6bd930;transition:1.5s";
                            delay(function cu(){
            document.body.style = "background-color:#48941c;transition:1.5s";
                                delay(function cv(){
            document.body.style = "background-color:#19abff;transition:1.5s";
                                    delay(function cw(){
            document.body.style = "background-color:#1957ff;transition:1.5s";
                                        delay(function cx(){
            document.body.style = "background-color:#bf30c7;transition:1.5s";
                                            delay(function cy(){
            document.body.style = "background-color:#7e30c7;transition:1.5s";
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
}, 1500 );
    }
    }, 14000);
    setInterval(function(){if(kevinBox.checked == true) {
            document.body.style = "background-color:#001FFF;transition:1.5s";
        delay(function(){
                document.body.style = "background-color:#FFFB00;transition:1.5s";
        }, 1 );
    }
    }, 3000);
    if(GreenBox.checked == true) {
        document.body.style = "background-color:#71e643;";
    }
            if(PurpleBox.checked == true) {
                document.body.style = "background-color:rgb(160, 0, 310);";
            }
                    if(BlueBox.checked == true) {
                        document.body.style = "background-color:#2d57ed;";
                    }
                            if(LightBlueBox.checked == true) {
                                document.body.style = "background-color:#00b2ff;transition:1.5s";
                            }
                                    if(OGBox.checked == true) {
                                                document.body.style = "background-color:#2a475c;";
                                    }
                                            if(YellowBox.checked == true) {
                                                        document.body.style = "background-color:#e6d243;";
                                            }
                                                    if(radgradBox.checked == true) {
                                                                document.body.style = "background-image: repeating-radial-gradient(red, yellow 10%, green 15%);";
                                                    }
                                                            if(lightmodeBox.checked == true) {
        document.body.style = "background:url('https://cdn.discordapp.com/attachments/319000727332716544/570229430509895691/Light_Background.png;";
                                                            }
                                                                    if(darkmodeBox.checked == true) {
                                                                                document.body.style = "background-color:rgb(16, 21, 31);";
                                                                    }
                                                                            if(RedBox.checked == true) {
                                                                                        document.body.style = "background-image: repeating-radial-gradient(red, yellow 10%, green 15%);";
                                                                            }
                                                                                    if(spacemodeBox.checked == true) {
                                                                                        document.body.style = "background:url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2015%2F12%2F126274-nature-landscape-sky-hill-grass-field-clouds-Windows_XP.jpg&f=1&nofb=1');";
                                                                                    }
}, true);


//






