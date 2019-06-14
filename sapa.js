<script>
$(window).scroll(function() {
    if ($(window)[&quot;scrollTop&quot;]() &gt; 125) {
        $(&quot;.header-bottom&quot;).css(&#39;position&#39;, &#39;fixed&#39;)
	    $(&quot;.header-bottom&quot;).css(&#39;top&#39;, &#39;0&#39;)
	    $(&quot;.header-bottom&quot;).css(&#39;z-index&#39;, &#39;9&#39;)
     
    } else {
        $(&quot;.header-bottom&quot;).css(&#39;position&#39;, &#39;relative&#39;)
    }
});
</script>
<!-- Post Home -->
<script type='text/javascript'>
//<![CDATA[
function removeHtmlTag(t, e) {
    for (var s = t.split("<"), i = 0; i < s.length; i++) - 1 != s[i].indexOf(">") && (s[i] = s[i].substring(s[i].indexOf(">") + 1, s[i].length));
    return s = s.join(""), s = s.substring(0, e - 1)
}

function showrecentposts1(t) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array, numposts5 <= t.feed.entry.length ? maxpost = numposts1 : maxpost = t.feed.entry.length;
    for (var e = 0; e < maxpost; e++) {
        var i, r, n = t.feed.entry[e],
            l = n.title.$t;
        if (e == t.feed.entry.length) break;
        for (var o = 0; o < n.link.length; o++)
            if ("alternate" == n.link[o].rel) {
                r = n.link[o].href;
                break
            }
        for (var o = 0; o < n.link.length; o++)
            if ("replies" == n.link[o].rel && "text/html" == n.link[o].type) {
                i = n.link[o].title.split(" ")[0];
                break
            }
        if ("content" in n) var m = n.content.$t;
        else if ("summary" in n) var m = n.summary.$t;
        else var m = "";
        postdate = n.published.$t, j > imgr.length - 1 && (j = 0), img[e] = imgr[j], s = m, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[e] = d);
        for (var g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], p = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], f = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), h = (postdate.split("-")[0], 0); h < g.length; h++)
            if (parseInt(f) == g[h]) {
                f = p[h];
                break
            }
        if (0 == e) {
            var u = '<div class="widgetsplitone_left"><a href="' + r + '"><img width="375" height="262" class="imagefeatured wp-post-image" src="' + img[e] + '"/></a><div class="clear"></div><h5 class="posttitle"><a href="' + r + '">' + l + '</a></h5><div class="contentstyle"><p>' + removeHtmlTag(m, summaryPost) + '...</p></div><div class="clear"></div></div><div class="widgetsplitone_right">';
            document.write(u)
        }
        if (e > 0 && e < maxpost) {
            var u = '<a href="' + r + '"><img style="margin-right:10px" class="imagewidgetthumb wp-post-image" height="63" src="' + img[e] + '" width="90"/></a><div class="featuredPost"><a href="' + r + '">' + l + "</a></div>";
            document.write(u)
        }
        j++
    }
    document.write("</div>")
}

function showrecentposts3(t) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array;
    for (var e = 0; 10 > e; e++) {
        var i, r, n = t.feed.entry[e],
            l = n.title.$t;
        if (e == t.feed.entry.length) break;
        for (var o = 0; o < n.link.length; o++)
            if ("alternate" == n.link[o].rel) {
                r = n.link[o].href;
                break
            }
        for (var o = 0; o < n.link.length; o++)
            if ("replies" == n.link[o].rel && "text/html" == n.link[o].type) {
                i = n.link[o].title.split(" ")[0];
                break
            }
        if ("content" in n) var m = n.content.$t;
        else if ("summary" in n) var m = n.summary.$t;
        else var m = "";
        postdate = n.published.$t, j > imgr.length - 1 && (j = 0), img[e] = imgr[j], s = m, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[e] = d);
        for (var g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], p = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], f = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), h = (postdate.split("-")[0], 0); h < g.length; h++)
            if (parseInt(f) == g[h]) {
                f = p[h];
                break
            }
        var u = '<li><a href="' + r + '">' + l + "</a></li>";
        document.write(u), j++
    }
}

function showrecentposts6(t) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array;
    for (var e = 0; e < numposts; e++) {
        var i, r, n = t.feed.entry[e],
            l = n.title.$t;
        if (e == t.feed.entry.length) break;
        for (var o = 0; o < n.link.length; o++)
            if ("alternate" == n.link[o].rel) {
                r = n.link[o].href;
                break
            }
        for (var o = 0; o < n.link.length; o++)
            if ("replies" == n.link[o].rel && "text/html" == n.link[o].type) {
                i = n.link[o].title.split(" ")[0];
                break
            }
        if ("content" in n) var m = n.content.$t;
        else if ("summary" in n) var m = n.summary.$t;
        else var m = "";
        postdate = n.published.$t, j > imgr.length - 1 && (j = 0), img[e] = imgr[j], s = m, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[e] = d);
        for (var g = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], p = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], f = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), h = (postdate.split("-")[0], 0); h < g.length; h++)
            if (parseInt(f) == g[h]) {
                f = p[h];
                break
            }
        var u = '<a href="' + r + '"><img width="266" height="139" class="imagefeatured wp-post-image" src="' + img[e] + '"/></a><div class="clear"></div><h5 class="posttitle"><a href="' + r + '">' + l + '</a></h5><div class="contentstyle"><p>' + removeHtmlTag(m, summaryPost) + '...</p></div><div class="clear"></div>';
        document.write(u), j++
    }
}
imgr = new Array, imgr[0] = "#", showRandomImg = !0, aBold = !0, summaryPost = 170, summaryPost1 = 80, summaryTitle = 15, numposts = 1, numposts1 = 5, numposts2 = 4, numposts3 = 6, numposts4 = 1, numposts5 = 6, numposts6 = 10, numposts7 = 10, numposts8 = 6;

function removeHtmlTag(a, b) {
    for (var c = a.split("<"), d = 0; d < c.length; d++) - 1 != c[d].indexOf(">") && (c[d] = c[d].substring(c[d].indexOf(">") + 1, c[d].length));
    return c = c.join(""), c = c.substring(0, b - 1)
}

function showrecentposts(e) {
    j = showRandomImg ? Math.floor((imgr.length + 1) * Math.random()) : 0, img = new Array, document.write("<ul>");
    for (var f = 0; f < numposts1; f++) {
        var i, k, g = e.feed.entry[f],
            h = g.title.$t;
        if (f == e.feed.entry.length) break;
        for (var l = 0; l < g.link.length; l++)
            if ("alternate" == g.link[l].rel) {
                k = g.link[l].href;
                break
            }
        for (var l = 0; l < g.link.length; l++)
            if ("replies" == g.link[l].rel && "text/html" == g.link[l].type) {
                i = g.link[l].title.split(" ")[0];
                break
            }
        if ("content" in g) var m = g.content.$t;
        else if ("summary" in g) var m = g.summary.$t;
        else var m = "";
        postdate = g.published.$t, j > imgr.length - 1 && (j = 0), img[f] = imgr[j], s = m, a = s.indexOf("<img"), b = s.indexOf('src="', a), c = s.indexOf('"', b + 5), d = s.substr(b + 5, c - b - 5), -1 != a && -1 != b && -1 != c && "" != d && (img[f] = d);
        for (var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], o = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], q = (postdate.split("-")[2].substring(0, 2), postdate.split("-")[1]), t = (postdate.split("-")[0], 0); t < n.length; t++)
            if (parseInt(q) == n[t]) {
                q = o[t];
                break
            }
        var v = '<li class="car"><div class="thumb"><a href="' + k + '"><img width="150" height="100" class="alignnone" src="' + img[f] + '"/></a></div><p><a class="slider_title" href="' + k + '">' + h + "</a></p></li>";
        document.write(v), j++
    }
    document.write("</ul>")
}
imgr = new Array, imgr[0] = "http://i.imgur.com/jw3ihv1.png", showRandomImg = !0, aBold = !0, summaryPost = 140, summaryTitle = 25, numposts1 = 6, label1 = "news";
//]]>
</script>
<script type='text/javascript'>
//<![CDATA[
var _0x7015=["\x62\x2E\x6C\x3D\x32\x28\x61\x29\x7B\x33\x28\x61\x2E\x69\x26\x26\x28\x61\x2E\x77\x3D\x3D\x3D\x42\x29\x29\x7B\x33\x28\x44\x28\x22\x46\x20\x37\x20\x38\x20\x3F\x22\x29\x3D\x3D\x39\x29\x7B\x34\x28\x22\x63\x2C\x20\x64\x5C\x65\x5C\x66\x20\x67\x20\x68\x20\x5C\x35\x5C\x6A\x20\x5C\x6B\x20\x36\x20\x6F\x20\x5C\x35\x5C\x70\x20\x71\x20\x72\x21\x21\x21\x22\x29\x7D\x73\x7B\x34\x28\x22\x5C\x75\x5C\x76\x20\x6D\x5C\x78\x20\x6D\x5C\x79\x20\x3D\x29\x29\x22\x29\x3B\x7A\x20\x41\x7D\x7D\x7D\x21\x32\x20\x74\x28\x29\x7B\x43\x7B\x21\x32\x20\x74\x28\x6E\x29\x7B\x31\x3D\x3D\x3D\x28\x22\x22\x2B\x6E\x2F\x6E\x29\x2E\x45\x26\x26\x30\x21\x3D\x3D\x6E\x7C\x7C\x32\x28\x29\x7B\x7D\x2E\x47\x28\x22\x48\x22\x29\x28\x29\x2C\x74\x28\x2B\x2B\x6E\x29\x7D\x28\x30\x29\x7D\x49\x28\x6E\x29\x7B\x4A\x28\x74\x2C\x4B\x29\x7D\x7D\x28\x29\x3B","\x7C","\x73\x70\x6C\x69\x74","\x7C\x7C\x66\x75\x6E\x63\x74\x69\x6F\x6E\x7C\x69\x66\x7C\x61\x6C\x65\x72\x74\x7C\x75\x30\x31\x31\x31\x7C\x63\x6F\x70\x79\x7C\x62\x79\x7C\x54\x54\x42\x7C\x74\x72\x75\x65\x7C\x7C\x64\x6F\x63\x75\x6D\x65\x6E\x74\x7C\x4F\x4B\x7C\x6E\x67\x7C\x75\x30\x31\x62\x30\x7C\x75\x31\x65\x64\x64\x69\x7C\x74\x61\x7C\x63\x68\x6F\x7C\x63\x74\x72\x6C\x4B\x65\x79\x7C\x75\x31\x65\x62\x31\x6E\x67\x7C\x75\x31\x65\x61\x35\x79\x7C\x6F\x6E\x6B\x65\x79\x64\x6F\x77\x6E\x7C\x7C\x7C\x73\x6F\x75\x72\x63\x65\x7C\x75\x30\x30\x66\x33\x7C\x6E\x68\x61\x7C\x41\x68\x69\x68\x69\x7C\x65\x6C\x73\x65\x7C\x7C\x75\x30\x31\x31\x30\x7C\x75\x31\x65\x63\x62\x74\x7C\x6B\x65\x79\x43\x6F\x64\x65\x7C\x75\x31\x65\x62\x39\x7C\x75\x30\x30\x65\x30\x79\x7C\x72\x65\x74\x75\x72\x6E\x7C\x66\x61\x6C\x73\x65\x7C\x38\x35\x7C\x74\x72\x79\x7C\x63\x6F\x6E\x66\x69\x72\x6D\x7C\x6C\x65\x6E\x67\x74\x68\x7C\x54\x65\x6D\x70\x6C\x61\x74\x65\x7C\x63\x6F\x6E\x73\x74\x72\x75\x63\x74\x6F\x72\x7C\x64\x65\x62\x75\x67\x67\x65\x72\x7C\x63\x61\x74\x63\x68\x7C\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74\x7C\x35\x65\x33","","\x66\x72\x6F\x6D\x43\x68\x61\x72\x43\x6F\x64\x65","\x72\x65\x70\x6C\x61\x63\x65","\x5C\x77\x2B","\x5C\x62","\x67"];eval(function(_0xe26ex1,_0xe26ex2,_0xe26ex3,_0xe26ex4,_0xe26ex5,_0xe26ex6){_0xe26ex5= function(_0xe26ex3){return (_0xe26ex3< _0xe26ex2?_0x7015[4]:_0xe26ex5(parseInt(_0xe26ex3/ _0xe26ex2)))+ ((_0xe26ex3= _0xe26ex3% _0xe26ex2)> 35?String[_0x7015[5]](_0xe26ex3+ 29):_0xe26ex3.toString(36))};if(!_0x7015[4][_0x7015[6]](/^/,String)){while(_0xe26ex3--){_0xe26ex6[_0xe26ex5(_0xe26ex3)]= _0xe26ex4[_0xe26ex3]|| _0xe26ex5(_0xe26ex3)};_0xe26ex4= [function(_0xe26ex5){return _0xe26ex6[_0xe26ex5]}];_0xe26ex5= function(){return _0x7015[7]};_0xe26ex3= 1};while(_0xe26ex3--){if(_0xe26ex4[_0xe26ex3]){_0xe26ex1= _0xe26ex1[_0x7015[6]]( new RegExp(_0x7015[8]+ _0xe26ex5(_0xe26ex3)+ _0x7015[8],_0x7015[9]),_0xe26ex4[_0xe26ex3])}};return _0xe26ex1}(_0x7015[0],47,47,_0x7015[3][_0x7015[2]](_0x7015[1]),0,{}))
//]]>
</script>
