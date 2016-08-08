var HTMLmainPageHeader = "<nav> <div class='nav-wrapper aiprust'> <a href='http://ghhat.com' class='shadow-logo center'>G.H. Hat</a> <img class='left icosize inverted' src='img/ico/hat.svg'> <ul id='nav-mobile' class='right hide-on-med-and-down orb-font'> <li><a href='#'>News</a></li><li><a href='#'>Music</a></li><li><a href='#'>Videos</a></li></ul> </div></nav>"

var HTMLmainPageFooter = "<div class='container aipnavy'> <div class='row'> <div class='col s1'>&nbsp;</div><div class='col s2 center'> <a href='https://www.facebook.com/ghhatmusic/?fref=nf'><img src='img/ico/fb.svg' class='icosize'></a></div><div class='col s2 center'> <a href='https://twitter.com/G_H_Hat?lang=en'><img src='img/ico/tw.svg' class='icosize'></a></div><div class='col s2 center'> <a href='https://play.spotify.com/artist/4JVfdkh46RFrpEl45u8D9A'><img src='img/ico/sp.svg' class='icosize'></a></div><div class='col s2 center'> <a href='https://soundcloud.com/ghhat'><img src='img/ico/sc.svg' class='icosize'></a> </div><div class='col s2 center'> <a href='https://instagram.com/mrghhat'><img src='img/ico/in.svg' class='icosize'></a> </div><div class='col s1'>&nbsp;</div></div></div><div class='footer-copyright'> <div class='container'> &copy; 2016 G.H. Hat </div></div>"

function replaceMainPage(x,y) {
  $('#mainhead').append(x);
  $('#mainfoot').append(y);
}


replaceMainPage(HTMLmainPageHeader, HTMLmainPageFooter);
