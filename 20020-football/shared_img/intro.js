var getCookie = function(name) {
    var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return value? value[2] : null;
 };
    
if(getCookie("visited") == "true") {
    window.onload = function(){
        document.getElementsByClassName('splash-screen')[0].style.visibility = 'hidden';
        document.getElementById('splash-screen-btn').style.removeProperty("animation");
    }
}
else {
    window.onload = function(){
        document.getElementById('splash-screen-btn').onclick = function(){
            document.cookie = "visited=true";
            this.parentNode.style.animation = 'hideSplashScreen 1s ease-in-out forwards';
        }
    }
}
