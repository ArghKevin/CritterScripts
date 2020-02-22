// ==UserScript==
// @name              HamsterHelper
// @namespace         http://discord.gg/G3PTYPy
// @version           9001
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

//button style = "color:blue;background-color:red;
    var chatBar = document.getElementsByClassName("input-group")[0];
    var chatBox = document.getElementsByClassName("row justify-content-center")[1];
    var backgroundbuttons = document.getElementsByClassName("background-buttons")[0];
    var inputMessage
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
    var BluesGradientHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="BluesGradient"><label class="form-check-label" for="BluesGradient" style="color:#000000;">BluesGradient</label></span></div>`;
    var RainbowHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="Rainbow"><label class="form-check-label" for="Rainbow" style="color:#000000;">Rainbow</label></span></div>`;
    var radgradHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="radgrad"><label class="form-check-label" for="radgrad" style="color:#000000;">radgrad(trippy)</label></span></div>`;
    var kevinHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="kevin"><label class="form-check-label" for="kevin" style="color:#000000;">kevin.exe</label></span></div>`;
     var spacemodeHTML = `<div id="smDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="spacemode"><label class="form-check-label" for="spacemode" style="color:#000000;">WIndows</label></span></div>`;
    var darkmodeHTML = `<div id="dmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="darkmode"><label class="form-check-label" for="darkmode" style="color:#000000;">Dark Mode</label></span></div>`;
    var PurpleHTML = `<div id="pDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="Purple"><label class="form-check-label" for="Purple" style="color:rgb(76, 0, 164);">PURPLE</label></span></div>`;
    var BlueHTML = `<div id="bDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="Blue"><label class="form-check-label" for="Blue" style="color:#2A2D99;">Blue</label></span></div>`;
    var LightBlueHTML = `<div id="lbDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="LightBlue"><label class="form-check-label" for="LightBlue" style="color:#007CFF;">LightBlue</label></span></div>`;
    var RedHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="Red"><label class="form-check-label" for="Red" style="color:#D1111B;">Red</label></span></div>`;
    var OGHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="OG"><label class="form-check-label" for="OG" style="color:#2897BD;">OG</label></span></div>`;
    var GreenHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="Green"><label class="form-check-label" for="Green" style="color:#14A40B;">Green</label></span></div>`;
    var YellowHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="Yellow"><label class="form-check-label" for="Yellow" style="color:#E1B100;">Yellow</label></span></div>`;
    var GradientHTML = `<div id="rDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="Gradient"><label class="form-check-label" for="Gradient" style="color:#000000;">purpleorange Gradient</label></span></div>`;
    var lightmodeHTML = `<div id="lmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="lightmode"><label class="form-check-label" for="lightmode" style="color:#000000;">Light Mode</label></span></div>`;
    var shuttersHTML = `<div id="lmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="shutters"><label class="form-check-label" for="shutters" style="color:#000000;">shutters</label></span></div>`;
    var smoothHTML = `<div id="lmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="smooth"><label class="form-check-label" for="smooth" style="color:#000000;">smooth</label></span></div>`;
    var gifHTML = `<div id="lmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="gif"><label class="form-check-label" for="gif" style="color:#000000;">gif</label></span></div>`;
    var gifeHTML = `<div id="lmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="gife"><label class="form-check-label" for="gife" style="color:#000000;">epileptic tv</label></span></div>`;
    var tileHTML = `<div id="lmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="tile"><label class="form-check-label" for="tile" style="color:#000000;">tile</label></span></div>`;
    var oceanHTML = `<div id="lmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="ocean"><label class="form-check-label" for="ocean" style="color:#000000;">SummerJam</label></span></div>`;
    var gifqHTML = `<div id="lmDiv"  ><span class="row justify-content-center"><input class="form-radio-input" type="radio" name="tangerine" value="" id="gifq"><label class="form-check-label" for="gifq" style="color:#000000;">Stretches</label></span></div>`;
    var ThirdInvisibleBtnHTML = `<span class="input-group-btn"><button id="thirdinvisiblebtn" class="btn btn-xlg" for="ThirdInvisibleBtn" style="color: transparent; background-color: transparent; border-color: transparent; cursor: default; ";>invis</button></span>`
    var ToggleTriggerBtnHTML = `<span class="input-group-btn"><button id="triggerToggle" class="btn btn-xlg" for="triggerToggle" style="color: red; background-color: black; border-color: transparent; cursor: default; ";>backgrounds toggle</button></span>`
    var nouiBtnHTML = `<span class="input-group-btn"><button id="noui" class="btn btn-xlg" for="noui" style="color: red; background-color: black; border-color: transparent; cursor: default; ";>no ui(wip)</button></span>`

//audio ids, (1x33DWd9X64cqeNdwEXTjZKNea2L9Pysk[elevator music]), (1He7OMp53UoT9Ox7W7lIw83GBmBy2bctH[futsal shuffle]), (1RCaptoXChtcA3j8CvJr66kWCEoNRbnGo[crab rave]), (1EZuEY-038aXhzmP_pfBT-euF05OK8hbQ[moonlight])
   var audioplayer = '<audio controls> <source src="https://www.dropbox.com/s/d542e7jsq6ts61v/02%20-%20Ive%20Been%20Delayed%20%282%29.mp3?raw=1" type="audio/mpeg">'
   var secondaudioplayer = '<audio controls> <source src="https://www.dropbox.com/s/ikxatlcc3go7nc4/y2mate.com%20-%20club_penguin_haunted_disco_music_remastered_3dW71QMWiE0.mp3?raw=1" color="red" type="audio/mpeg">'
   var thirdaudioplayer = '<audio controls> <source src="https://www.dropbox.com/s/0ue3je5i7s717kx/Cut_y2mate.com%20-%20club_penguin_music_dojo_and_ninja_hideout_theme_1_hour_YiUyrIxJsV0.mp3?raw=1" type="audio/mpeg">'
   var fourthaudioplayer = '<audio controls> <source src="https://www.dropbox.com/s/2kd9t6gwm6g6b6x/Grand-Theft-Auto-San-Andreas-Theme-Song.mp3?raw=1" type="audio/mpeg">'
   var fifthaudioplayer = '<audio controls> <source src="https://www.dropbox.com/s/h44xriwv3wejd6q/Cut_y2mate.com%20-%20lil_uzi_vert_futsal_shuffle_official_instrumental_updated_no_loops_l_nqTrMGx7Y.mp3?raw=1" type="audio/mpeg">'
   var sixthaudioplayer = '<audio controls> <source src="https://www.dropbox.com/s/pse9huv7v8ytqma/JoJo%20s%20Bizarre%20Adventure%20Golden%20Wind%20OST%20_Giorno%20s%20Theme_%20Il%20vento%20d%20oro%20%28Main%20Theme%29.mp3?raw=1" type="audio/mpeg">'


    chatBar.insertAdjacentHTML('afterend', clapBtnHTML);
    chatBar.insertAdjacentHTML('afterend', jokeBtnHTML);
    chatBar.insertAdjacentHTML('afterend', BEEPBtnHTML);
    chatBar.insertAdjacentHTML('afterend', ExtraBtnHTML);
    chatBar.insertAdjacentHTML('afterend', PopBtnHTML);
    chatBar.insertAdjacentHTML('afterend', balloonoffBtnHTML);
    chatBar.insertAdjacentHTML('afterend', nametagsonoffBtnHTML);
    chatBar.insertAdjacentHTML('afterend', freeitemBtnHTML);

    chatBox.insertAdjacentHTML('afterend', nouiBtnHTML);
    chatBox.insertAdjacentHTML('afterend', gifqHTML);
    chatBox.insertAdjacentHTML('afterend', oceanHTML);
    chatBox.insertAdjacentHTML('afterend', tileHTML);
    chatBox.insertAdjacentHTML('afterend', gifeHTML);
    chatBox.insertAdjacentHTML('afterend', gifHTML);
    chatBox.insertAdjacentHTML('afterend', smoothHTML);
    chatBox.insertAdjacentHTML('afterend', shuttersHTML);
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
    chatBox.insertAdjacentHTML('afterend', sixthaudioplayer);
    chatBox.insertAdjacentHTML('afterend', fifthaudioplayer);
    chatBox.insertAdjacentHTML('afterend', fourthaudioplayer);
    chatBox.insertAdjacentHTML('afterend', thirdaudioplayer);
    chatBox.insertAdjacentHTML('afterend', secondaudioplayer);
    chatBox.insertAdjacentHTML('afterend', audioplayer);
    chatBox.insertAdjacentHTML('afterend', ToggleTriggerBtnHTML);
    chatBox.insertAdjacentHTML('afterend', ThirdInvisibleBtnHTML);
    chatBox.insertAdjacentHTML('afterend', xxtraBtnHTML);

    chatBox.insertAdjacentHTML('afterend', JoinChristmasTavernBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinCrashSiteBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinForestBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinSnowmanVillageBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinTavernBtnHTML);
    chatBox.insertAdjacentHTML('afterend', SecondInvisibleBtnHTML);
    chatBox.insertAdjacentHTML('afterend', InvisibleBtnHTML);

    if (localStorage.getItem("theme") == "space") {
        document.getElementById("spacemode").checked = true;
    }
    if (localStorage.getItem("theme") == "gif") {
        document.getElementById("gif").checked = true;
    }
    if (localStorage.getItem("theme") == "gifq") {
        document.getElementById("gifq").checked = true;
    }
        if (localStorage.getItem("theme") == "kevin") {
        document.getElementById("kevin").checked = true;
    }
    if (localStorage.getItem("theme") == "smooth") {
        document.getElementById("smooth").checked = true;
    }
    if (localStorage.getItem("theme") == "dark") {
        document.getElementById("darkmode").checked = true;
    }
        if (localStorage.getItem("theme") == "gife") {
        document.getElementById("gife").checked = true;
    }
        if (localStorage.getItem("theme") == "shutters") {
        document.getElementById("shutters").checked = true;
        }
    if (localStorage.getItem("theme") == "ocean") {
        document.getElementById("ocean").checked = true;
        }
    if (localStorage.getItem("theme") == "Purple") {
        document.getElementById("Purple").checked = true;
    }
if (localStorage.getItem("theme") == "Gradient") {
        document.getElementById("Gradient").checked = true;
    }
if (localStorage.getItem("theme") == "BluesGradient") {
        document.getElementById("BluesGradient").checked = true;
    }
    if (localStorage.getItem("theme") == "tile") {
        document.getElementById("tile").checked = true;
    }
    if (localStorage.getItem("theme") == "Rainbow") {
        document.getElementById("Rainbow").checked = true;
    }

    if (localStorage.getItem("theme") == "Blue") {
        document.getElementById("Blue").checked = true; }

    if (localStorage.getItem("theme") == "LightBlue") {
        document.getElementById("LightBlue").checked = true;
    }
    if (localStorage.getItem("theme") == "Red") {
        document.getElementById("Red").checked = true;
    }
    if (localStorage.getItem("theme") == "OG") {
        document.getElementById("OG").checked = true;
    }
    if (localStorage.getItem("theme") == "Green") {
        document.getElementById("Green").checked = true;
    }
    if (localStorage.getItem("theme") == "Yellow") {
        document.getElementById("Yellow").checked = true;
    }
    if (localStorage.getItem("theme") == "radgrad") {
        document.getElementById("radgrad").checked = true;
    }
    if (localStorage.getItem("theme") == "light") {
        document.getElementById("lightmode").checked = true;
    }
function toggle( selector ) {
  var nodes = document.querySelectorAll( selector ),
      node,
      styleProperty = function(a, b) {
        return window.getComputedStyle ? window.getComputedStyle(a).getPropertyValue(b) : a.currentStyle[b];
      };

  [].forEach.call(nodes, function( a, b ) {
    node = a;

    node.style.display = styleProperty(node, 'display') === 'block' ? 'none' : 'block';
  });

}

document.getElementById('triggerToggle').onclick = function(){
  toggle( '.form-radio-input' );
      toggle( '.form-check-label' );
};
    function togglex( selectorx ) {
  var nodes = document.querySelectorAll( selectorx ),
      node,
      styleProperty = function(a, b) {
        return window.getComputedStyle ? window.getComputedStyle(a).getPropertyValue(b) : a.currentStyle[b];
      };

  [].forEach.call(nodes, function( a, b ) {
    node = a;

    node.style.display = styleProperty(node, 'display') === 'block' ? 'none' : 'block';
  });

}

document.getElementById('noui').onclick = function(){
  toggle( '.form-radio-input' );
      toggle( '.form-check-label' );
          toggle( '.btn' );


};
    document.getElementById('noui').onclick = function(){
    }

    document.querySelectorAll('.text-center').forEach(function(el) {
   el.style.display = 'none';//no annoying by rocketsnail box
});
    function JoinTavern() {
        world.sendMessage("/join tavern")
    }

function JoinSnowmanVillage() {
    world.sendMessage("/join snowman_village")
}
    function Function1() {
    alert('c u s t o m   a l e r t');
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
 delay(function (){
    world.sendMessage(joke.p)
 }, 5000)
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
        function freeitemcode(){
        world.sendMessage("/freeitem")
    }
        function redcross(){
        world.sendMessage("/redcross")
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
    function happy(){
        world.sendMessage("/happy")
    }
    function birthday(){
        world.sendMessage("/birthday")
    }
    function HappyBirthday(){
    happy;
    setTimeout(birthday, 1500)
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
        setTimeout(freeitemcode, 44000)
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
    function gifToggle() {
        if(gifBox.checked == true) {
            localStorage.setItem("theme", "gif");
        }
    }
        function oceanToggle() {
        if(oceanBox.checked == true) {
            localStorage.setItem("theme", "ocean");
        }
    }
    function gifeToggle() {
        if(gifeBox.checked == true) {
            localStorage.setItem("theme", "gife");
        }
    }
    function gifqToggle() {
        if(gifqBox.checked == true) {
            localStorage.setItem("theme", "gifq");
        }
    }
    function tileToggle() {
        if(tileBox.checked == true) {
            localStorage.setItem("theme", "tile");
        }
    }
function smoothToggle() {
        if(smoothBox.checked == true) {
            localStorage.setItem("theme", "smooth");
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
        }, 1000 );
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
                localStorage.setItem("theme", "BluesGradient");
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
            function shuttersToggle() {
            if(shuttersBox.checked == true) {
        document.body.style = "background: repeating-linear-gradient( white 10%, black 10%, white 20%, black 20%);transition:1s ease";
            delay(function(){
                document.body.style = "background: repeating-linear-gradient( black 10%, white 10%, black 20%);transition:1s ease";
                        }, 500 );
    }
    }
function RainbowToggle() {
            if(RainbowBox.checked == true) {
                localStorage.setItem("theme", "Rainbow");
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
    if (localStorage.getItem("theme") == "gif") {
            document.body.style = "background:url ('https://www.dropbox.com/s/ayu6cjoejo8vsp7/clouds.gif?raw=1');"
 document.getElementById("gif").checked = true;

    }
    if (localStorage.getItem("theme") == "gifq") {
 document.getElementById("gifq").checked = true;
    }
    if (localStorage.getItem("theme") == "smooth") {
            document.body.style = "background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);transition:.5s"
 document.getElementById("smooth").checked = true;
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
    if (localStorage.getItem("theme") == "shutters") {
        document.body.style = "background: repeating-linear-gradient( white 10%, black 10%, white 20%, black 20%);transition:1.5s ease";
            delay(function(){
                document.body.style = "background: repeating-linear-gradient( black 10%, white 10%, black 20%);transition:1.5s easr";
                        }, 1000 );
    }
    if (localStorage.getItem("theme") == "ocean") {
    document.body.style = "background:url('https://www.dropbox.com/s/vc6g09vb3t9grqs/ezgif-7-6793d2ece4f1.gif?raw=1');"
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

    function freeitemfn() {
        document.getElementById("inputMessage").value="";
                   world.sendMessage("/freeitem");

        setTimeout(darkmode, 1500);

        setTimeout(explore, 3000);

        setTimeout(missed, 4500);

        setTimeout(tbt, 6000)

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
        var oceanBox = document.querySelector ("#ocean");
    if (oceanBox) {
        oceanBox.addEventListener ("click", oceanToggle, false);
    }
        var gifqBox = document.querySelector ("#gifq");
    if (gifqBox) {
        gifqBox.addEventListener ("click", gifqToggle, false);
    }
    var gifBox = document.querySelector ("#gif");
    if (gifBox) {
        gifBox.addEventListener ("click", gifToggle, false);
    }
    var gifeBox = document.querySelector ("#gife");
    if (gifeBox) {
        gifeBox.addEventListener ("click", gifeToggle, false);
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
    var smoothBox = document.querySelector ("#smooth");
    if (smoothBox) {
        smoothBox.addEventListener ("click", smoothToggle, false);
    }
    var tileBox = document.querySelector ("#tile");
    if (tileBox) {
        tileBox.addEventListener ("click", tileToggle, false);
    }
    var LightBlueBox = document.querySelector ("#LightBlue");
    if (LightBlueBox) {
        LightBlueBox.addEventListener ("click", LightBlueToggle, false);
    }
    var RedBox = document.querySelector ("#Red");
    if (RedBox) {
        RedBox.addEventListener ("click", RedToggle, false);
    }
        var shuttersBox = document.querySelector ("#shutters");
    if (shuttersBox) {
        shuttersBox.addEventListener ("click", shuttersToggle, false);
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
        freeitemBtn.addEventListener ("click", freeitemfn, false);
    }
    var ThirdInvisibleBtn = document.querySelector ("#HappyBirthday");
    if (ThirdInvisibleBtn) {
        ThirdInvisibleBtn.addEventListener ("click", HappyBirthday, false);
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
setInterval(function(){if(smoothBox.checked == true) {
            localStorage.setItem("theme", "smooth");
    document.body.style = "background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);"
}
                      }, 100)
        setInterval(function(){if(oceanBox.checked == true) {
            localStorage.setItem("theme", "ocean");
    document.body.style = "background:url('https://www.dropbox.com/s/vc6g09vb3t9grqs/ezgif-7-6793d2ece4f1.gif?raw=1');"
}
                      }, 100)
    setInterval(function(){if(gifeBox.checked == true) {
            localStorage.setItem("theme", "gife");

    document.body.style = "background:url('https://www.dropbox.com/s/3iiqlrj4609ja9a/epilespy.gif?raw=1')"
}
                      }, 100)
        setInterval(function(){if(gifqBox.checked == true) {
            localStorage.setItem("theme", "gifq");

    document.body.style = "background:url('https://www.dropbox.com/s/nwr5dwkh1pq1a5b/V6Z7K2J.gif?raw=1')"
}
                      }, 100)
    setInterval(function(){if(tileBox.checked == true) {
            localStorage.setItem("theme", "tile");
    document.body.style = "background:url('https://www.dropbox.com/s/r8mbpont1br1cbo/ezgif.com-crop.gif?raw=1')"
}
                      }, 100)
    setInterval(function(){if(gifBox.checked == true) {
                localStorage.setItem("theme", "gif");
                document.body.style = "background:url('https://www.dropbox.com/s/ayu6cjoejo8vsp7/clouds.gif?raw=1')";
}
                      }, 100)

    setInterval(function(){if(BluesGradientBox.checked == true) {
        localStorage.setItem("theme", "BluesGradient");
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
    //docs.google.com/uc?export=open&id=1XPe2agdiDEOh3pxgtjWfl4Ca15YD4B7F
var aaa="docs.google.com/uc?export=open&id=1XPe2agdiDEOh3pxgtjWfl4Ca15YD4B7F"
    function playAudio(){
aaa.play();
}
        setInterval(function(){if(shuttersBox.checked == true) {
                        localStorage.setItem("theme", "shutters");
            document.body.style = "background: repeating-linear-gradient( white 10%, black 10%, white 20%, black 20%);transition:1s ease";
            delay(function(){
                document.body.style = "background: repeating-linear-gradient( black 10%, white 10%, black 20%);transition:1s ease";
                        }, 1200 );
        }
        }, 2500 );
    setInterval(function(){if(RainbowBox.checked == true) {
        localStorage.setItem("theme", "Rainbow");
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
        }, 1000 );
    }
    }, 2000);
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
               //var document.getElementById("stage") style="width: 880.656px; height: 403.167px"
                                                                         }
    //var document.getElementById("stage") = qazaq
//var  "stage" = 'style "width: 680.656px; height: 403.167px"'
//var "stage" = 'style="width: 858px; height: 480.48px;"'
//if (localStorage.getItem("stage")){
//     stage.style="width: 480.656px; height: 903.167px"
//}
 //  window.onresize = function() {
 //         var body = $('#stage').parent();
 //           var width = body.width();
 //       var height = body.height();
 //           $('#stage').width(width).height("100px");
 //      $('#stage').height(height).width("1000px");
 //  }
 //  window.onresize();
   // var x = document.getElementById("modal");x.parentNode.appendChild(document.getElementById("stage"));
}, true);


//





