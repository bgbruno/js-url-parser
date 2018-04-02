
// url parser
// thx http://james.padolsey.com/javascript/parsing-urls-with-the-dom
// thx https://davidwalsh.name/get-absolute-url
// updated ^bg @2018, @2017, @2013
function parseURL(url) {
    
    var a =  document.createElement('a');
    a.href = url
    
    return {
        source: url,
        pathName: a.pathname,
        absoluteUrl: a.href = a.pathname,
        protocol: a.protocol.replace(':',''),
        domainHost: url.split('/')[2],
        domain: url.split('/')[2].split('.')[2] ? url.split('/')[2].split('.')[1] + '.' + url.split('/')[2].split('.')[2] : url.split('/')[2],
        domainTld: url.split('/')[2].split('.')[2] ? url.split('/')[2].split('.')[2] : url.split('/')[2].split('.')[1],
        port: a.port,
        query: a.search,
        params: (function(){
            
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
    
}
