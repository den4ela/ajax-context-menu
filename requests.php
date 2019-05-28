<?php
/**
 * Главный файл запросов
 */

$connect = mysqli_connect(
    'localhost',
    'root',
    'root',
    'lb3');

if (!$connect) {
    die('Ошибка соединения: ' . mysqli_error($connect));
}

function Secure($string) {
    global $connect;

    $string = trim($string);
    $string = mysqli_real_escape_string($connect, $string);
    $string = htmlspecialchars($string, ENT_QUOTES);

    $string = str_replace('\r\n', "", $string);
    $string = str_replace('\n\r', "", $string);
    $string = str_replace('\r', "", $string);
    $string = str_replace('\n', "", $string);

    return $string;
}

function getTasks() {
    global $connect;

    $sql = " SELECT * FROM `tasks` ";
    $result = mysqli_query($connect, $sql);
    mysqli_close($connect);

    return $result;
}

if(isset($_POST['task']) && isset($_POST['id_task']) && is_numeric($_POST['id_task'])) {

    $task = Secure($_POST['task']);
    $sql = " INSERT INTO  `tasks` (id_task, task) VALUES ('{$_POST['id_task']}', '{$task}') ";

    if (mysqli_query($connect, $sql)) {
        $data['status'] = 200;
    } else {
        $data['status'] = 500;
    }

    header("Content-type: application/json");
    echo json_encode($data);
    exit();
}

if(isset($_POST['type']) && $_POST['type'] == 'delete') {

    $data['status'] = 500;

    if(isset($_POST['id_task']) && is_numeric($_POST['id_task'])) {

        $id = Secure($_POST['id_task']);

        $sql = "DELETE FROM `tasks` WHERE id_task = {$id}";
        if (mysqli_query($connect, $sql)) {
            $data['status'] = 200;
        }
    }

    header("Content-type: application/json");
    echo json_encode($data);
    exit();
}