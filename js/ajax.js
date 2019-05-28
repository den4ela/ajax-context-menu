function AJAX () {
    var http = new XMLHttpRequest(),
        url = '/requests.php',
        params;

    this.query = function () {
        return http;
    };

    this.insertTask = function (id, task) {

        params = 'task='+task+'&id_task='+id+'';

        http.open('POST', url, true);

        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.send(params);

    }

    this.deleteItem = function (item) {
        params = 'id_task='+item+'&type=delete';

        http.open('POST', url, true);

        http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

        http.send(params);
    }

}