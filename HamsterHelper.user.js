// ==UserScript==
// @name              HamsterHelper
// @namespace         http://discord.gg/G3PTYPy
// @version           3
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
    var chatBar = document.getElementsByClassName("input-group")[0];
    var chatBox = document.getElementsByClassName("row justify-content-center")[1];
    var jokeBtnHTML = `<span class="input-group-btn"><button id="jokebtn" class="btn btn-primary">Joke</button></span>`;
    var clapBtnHTML = `<span class="input-group-btn"><button id="clapbtn" class="btn" for="clapBtn" style="background-color:black; border-color:#71e643; color:#71e643">Items</button></span>`;
    var balloonoffBtnHTML = `<span class="input-group-btn"><button id="balloonoffbtn" class="btn btn-primary">Chat Balloons On/Off</button></span>`;
    var nametagsonoffBtnHTML = `<span class="input-group-btn"><button id="nametagsonoffbtn" class="btn btn-primary">Name Tags On/Off</button></span>`;
    var spacemodeHTML = `<div id="smDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="spacemode"><label class="form-check-label" for="spacemode" style="color:#000000;">Space Mode</label></span></div>`;
    var darkmodeHTML = `<div id="dmDiv" class="row justify-content-center"><span><input class="form-radio-input" type="checkbox" value="" id="darkmode"><label class="form-check-label" for="darkmode" style="color:#000000;">Dark Mode</label></span></div>`;
    var PurpleHTML = `<div id="pDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="Purple"><label class="form-check-label" for="Purple" style="color:rgb(76, 0, 164);">PURPLE</label></span></div>`;
    var BlueHTML = `<div id="bDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="Blue"><label class="form-check-label" for="Blue" style="color:#2A2D99;">Blue</label></span></div>`;
    var LightBlueHTML = `<div id="lbDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="LightBlue"><label class="form-check-label" for="LightBlue" style="color:#007CFF;">LightBlue</label></span></div>`;
    var RedHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="Red"><label class="form-check-label" for="Red" style="color:#D1111B;">Red</label></span></div>`;
    var OGHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="OG"><label class="form-check-label" for="OG" style="color:#2897BD;">OG</label></span></div>`;
    var GreenHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="Green"><label class="form-check-label" for="Green" style="color:#14A40B;">Green</label></span></div>`;
    var YellowHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="Yellow"><label class="form-check-label" for="Yellow" style="color:#E1B100;">Yellow</label></span></div>`;
    var GradientHTML = `<div id="rDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="Gradient"><label class="form-check-label" for="Gradient" style="color:#000000;">Gradient</label></span></div>`;
    var lightmodeHTML = `<div id="lmDiv" class="row justify-content-center"><span><input class="form-check-input" type="checkbox" value="" id="lightmode"><label class="form-check-label" for="lightmode" style="color:#000000;">Light Mode</label></span></div>`;
    var freeitemBtnHTML = `<span class="input-group-btn"><button id="freeitembtn" class="btn btn-primary">new items</button></span>`;
    var JoinTavernBtnHTML = `<span class="input-group-btn"><button id="JoinTavernbtn" class="btn btn-primary">Join Tavern</button></span>`;
    var JoinSnowmanVillageBtnHTML = `<span class="input-group-btn"><button id="JoinSnowmanVillagebtn" class="btn btn-primary">Join Snowman Village</button></span>`;
    var JoinForestBtnHTML = `<span class="input-group-btn"><button id="JoinForestbtn" class="btn btn-primary">Join Forest</button></span>`;
    var JoinCrashSiteBtnHTML = `<span class="input-group-btn"><button id="JoinCrashSitebtn" class="btn btn-primary">Join Crash Site</button></span>`;
    var JoinChristmasTavernBtnHTML = `<span class="input-group-btn"><button id="JoinChristmasTavernbtn" class="btn btn-primary">Join Christmas Tavern</button></span>`;
    var PopBtnHTML = `<span class="input-group-btn"><button id="Popbtn" class="btn btn-primary">room pop</button></span>`;
    var ExtraBtnHTML = `<span class="input-group-btn"><button id="Extrabtn" class="btn btn-primary">hey</button></span>`;
    var BEEPBtnHTML = `<span class="input-group-btn"><button id="BEEPbtn" class="btn btn-primary">BEEP!</button></span>`;
    var InvisibleBtnHTML = `<span class="input-group-btn"><button id=InvisibleBtn" class="btn btn-lg" for="Invisible" style="color: transparent; background-color: transparent; border-color: transparent; cursor: default;">nice find</button></span>`
    var SecondInvisibleBtnHTML = `<span class="input-group-btn"><button id=SecondInvisibleBtn" class="btn btn-lg" for="SecondInvisible" style="color: transparent; background-color: transparent; border-color: transparent; cursor: default;">nice findx</button></span>`
    var LogoutBtnHTML = `<span class="input-group-btn"><button id="Logoutbtn" class="btn btn-primary" onclick="world.logout()">ez Logout</button></span>`;

    chatBar.insertAdjacentHTML('afterend', clapBtnHTML);
    chatBar.insertAdjacentHTML('afterend', jokeBtnHTML);
    chatBar.insertAdjacentHTML('afterend', BEEPBtnHTML);
    chatBar.insertAdjacentHTML('afterend', ExtraBtnHTML);
    chatBar.insertAdjacentHTML('afterend', PopBtnHTML);
    chatBar.insertAdjacentHTML('afterend', balloonoffBtnHTML);
    chatBar.insertAdjacentHTML('afterend', nametagsonoffBtnHTML);
    chatBar.insertAdjacentHTML('afterend', freeitemBtnHTML);
    chatBox.insertAdjacentHTML('afterend', GradientHTML);
        chatBox.insertAdjacentHTML('afterend', YellowHTML);
        chatBox.insertAdjacentHTML('afterend', GreenHTML);
        chatBox.insertAdjacentHTML('afterend', OGHTML);
    chatBox.insertAdjacentHTML('afterend', RedHTML);
    chatBox.insertAdjacentHTML('afterend', LightBlueHTML);
    chatBox.insertAdjacentHTML('afterend', BlueHTML);
    chatBox.insertAdjacentHTML('afterend', PurpleHTML);
    chatBox.insertAdjacentHTML('afterend', spacemodeHTML);
    chatBox.insertAdjacentHTML('afterend', darkmodeHTML);
    chatBox.insertAdjacentHTML('afterend', lightmodeHTML);
    chatBar.insertAdjacentHTML('afterend', LogoutBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinChristmasTavernBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinCrashSiteBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinForestBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinSnowmanVillageBtnHTML);
    chatBox.insertAdjacentHTML('afterend', JoinTavernBtnHTML);
        chatBox.insertAdjacentHTML('afterend', SecondInvisibleBtnHTML);
    chatBox.insertAdjacentHTML('afterend', InvisibleBtnHTML);

    if (localStorage.getItem("theme") == "space") {
        document.body.style = "background:url('https://cdn.discordapp.com/attachments/319000727332716544/570223902953963521/Mountain_Background.png');";
        document.getElementById("spacemode").checked = true;
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
        delay(function(){
            document.body.style = "background-color:#2d57ed;transition:1.5s";
        delay(function(){
            document.body.style = "background-color:#e6434b;transition:2.5s";
            delay(function(){
            document.body.style = "background-color:#2a475c;transition:2.5s";
                delay(function(){
            document.body.style = "background-color:#71e643;transition:2.5s";
                    delay(function(){
            document.body.style = "background-color:#e6d243;transition:1.5s";
        }, 2000 );
        }, 2000 );
        }, 2000 );
            }, 2000 );
            }, 2000 );
        document.getElementById("Gradient").checked = true;
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
        delay(function(){
            world.sendMessage(joke.p);
        }, 6000 );
    }

    function sendClap() {
      world.sendMessage("/critbits");
        delay(function(){
        world.sendMessage("/esporte");
            delay(function(){
            world.sendMessage("/snowball");
                delay(function(){
            world.sendMessage("/squeeze");
                    delay(function(){
            world.sendMessage("/rocketsnail");
                        delay(function(){
            world.sendMessage("/andybulletin");
                            delay(function(){
            world.sendMessage("/cute");
                                delay(function(){
            world.sendMessage("/oommgames");
                                    delay(function(){
            world.sendMessage("/boxcritterswiki");
                                        delay(function(){
            world.sendMessage("/3dboxcritters");
                                            delay(function(){
            world.sendMessage("/boxcritters3d");
                                                delay(function(){
            world.sendMessage("/goodnight");
                                                    delay(function(){
            world.sendMessage("/madeincanada");
                                                        delay(function(){
            world.sendMessage("/thekeeper");
                                                            delay(function(){
            world.sendMessage("/bunnyhug");
                                                                delay(function(){
            world.sendMessage("/explore");
                                                                    delay(function(){
            world.sendMessage("/greenplumber");
                                                                        delay(function(){
            world.sendMessage("/darkmode");
                                                                            delay(function(){
            world.sendMessage("/duckhunter");
                                                                                delay(function(){
            world.sendMessage("/piratepack");
                                                                                    delay(function(){
            world.sendMessage("/pickle");
                                                                                        delay(function(){
            world.sendMessage("/oscarproductions");
                                                                                            delay(function(){
            world.sendMessage("/livestream");
                                                                                                delay(function(){
            world.sendMessage("/creative");
                                                                                                    delay(function(){
            world.sendMessage("/boxcrittersguild");
                                                                                                        delay(function(){
            world.sendMessage("/fun");
                                                                                                            delay(function(){
            world.sendMessage("/forumcritters");
                                                                                                                delay(function(){
            world.sendMessage("/marco");
                                                                                                                    delay(function(){
        world.sendMessage("/adventure");
                                                                                                                        delay(function(){
        world.sendMessage("/freeitem");
                                                                                                                            delay(function(){
        world.sendMessage("/redcross");
                                                                                                                                delay(function(){
        world.sendMessage("/squeeze");
                                                                                                                                    delay(function(){
        world.sendMessage("/imagination");
                                                                                                                                        delay(function(){
        world.sendMessage("/sparkle");
                                                                                                                                            delay(function(){
        world.sendMessage("/tamago");
                                                                                                                                                delay(function(){
        world.sendMessage("/missed");
                                                                                                                                                    delay(function(){
        world.sendMessage("/tbt");

                                                                                                                                                      delay(function(){
        world.sendMessage("/join crash_site");

        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
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
            document.body.style = "background:url('https://cdn.discordapp.com/attachments/319000727332716544/570223902953963521/Mountain_Background.png');transition:1.5s;";
        }
    }

    function darkmodeToggle() {
        if(darkmodeBox.checked == true) {
            localStorage.setItem("theme", "dark");
            document.body.style = "background-color:rgb(16, 21, 31);transition:1.5s";
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
                document.body.style = "background-color:rgb(160, 0, 310);transition:1s";
            delay(function(){
            document.body.style = "background-color:#e6d243;transition:1.5s";
        }, 2000 );
    }
        }
            function BlueToggle() {
        if(BlueBox.checked == true) {
            localStorage.setItem("theme", "Blue");
            document.body.style = "background-color:#2d57ed;transition:1.5s";
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
        delay(function(){
        world.sendMessage("/darkmode");
            delay(function(){
        world.sendMessage("/explore");
                delay(function(){
        world.sendMessage("/missed");
                    delay(function(){
        world.sendMessage("/tbt");

        }, 2000 );
        }, 2000 );
        }, 2000 );
        }, 2000 );
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

    var darkmodeBox = document.querySelector ("#darkmode");
    if (darkmodeBox) {
        darkmodeBox.addEventListener ("click", darkmodeToggle, false);
    }

    var PurpleBox = document.querySelector ("#Purple");
    if (PurpleBox) {
        PurpleBox.addEventListener ("click", PurpleToggle, false);
    }
    var GradientBox = document.querySelector ("#Gradient");
    if (GradientBox) {
        GradientBox.addEventListener ("click", GradientToggle, false);
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
}, true);


//






