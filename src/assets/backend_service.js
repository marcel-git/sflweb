const BACKEND = "http://192.168.0.197:5000"

export function sendRequest(param) {

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", BACKEND+"/search?param="+param, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.response);
}

export function sendXSS(param){
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", BACKEND+"/visit?param="+param, false ); // false for synchronous request
    xmlHttp.send( null );
}