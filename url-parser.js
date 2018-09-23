// url parser
// thx http://james.padolsey.com/javascript/parsing-urls-with-the-dom
// thx https://davidwalsh.name/get-absolute-url
// updated ^bg @2018, @2017, @2013


function url_parameterByName_get(url, name) {
    
    if (!url) {
        url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    var results = regex.exec(url);
    
    if (!results) {
        return null;
    }
    if (!results[2]) {
        return '';
    }
    
    var ret = decodeURIComponent(results[2].replace(/\+/g, " "));
    
    return ret;
    
}

function url_parse(url) {
    
    var a = document.createElement('a');
    a.href = url;
    
    var parsedObject = {
        
        source: url,
        pathName: a.pathname,
        absoluteUrl: a.pathname,
        protocol: a.protocol.replace(':',''),
        domainHost: url.split('/')[2],
        domain: url.split('/')[2].split('.')[2] ? url.split('/')[2].split('.')[1] + '.' + url.split('/')[2].split('.')[2] : url.split('/')[2],
        domainTld: url.split('/')[2].split('.')[2] ? url.split('/')[2].split('.')[2] : url.split('/')[2].split('.')[1],
        port: a.port,
        query: a.search,
        params: (function() {
            
            var ret = {},
                seg = a.search.replace(/^\?/,'').split('&'),
                len = seg.length, i = 0, s;
                
            for (;i<len;i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            
            return ret;
            
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash,//.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
        
    };
    
    return parsedObject;
    
}
