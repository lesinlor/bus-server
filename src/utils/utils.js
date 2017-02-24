export default {
    api: 'http://op.juhe.cn/189/bus/',
    get(obj) {
        var request = new XMLHttpRequest();
        request.open('GET', obj.url, true);
        request.setRequestHeader('Access-Control-Allow-Origin', '*');
        request.setRequestHeader('Access-Control-Allow-Methods', 'GET');
        request.setRequestHeader('Access-Control-Allow-Headers', 'content-type');
        request.onreadystatechange = function() {
            // console.log(request.readyState)
            if (request.readyState == 4) {
                var resp = request.responseText;
                obj.success(resp);
            } else {
                obj.error();
            }
        };

        request.send();
    },
    jsonp(obj) {

    }
}
