<?php
require "requests.php";
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Работа с AJAX и контекстным меню</title>
  <link rel="stylesheet" href="http://meyerweb.com/eric/tools/css/reset/reset.css">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,300">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="primary-header">
    <div class="container">
      <h1 class="primary-header__title">
          AJAX заметки
      </h1>
    </div>
  </header>
  <main class="content">
    <div class="container">
      <ul id="tasks" class="tasks">
          <?php
            $tasks = getTasks();
          if (mysqli_num_rows($tasks) > 0) {
              while($row = mysqli_fetch_assoc($tasks)) { ?>
                  <li class="task" data-id="<?php echo $row["id_task"]; ?>">
                      <div class="task__content">
                          <?php echo $row["task"]; ?>
                      </div>
                      <div class="task__actions">
                          <i class="fa fa-eye"></i>
                          <i class="fa fa-edit"></i>
                          <i class="fa fa-times"></i>
                      </div>
                  </li>
             <?php }
          }

          ?>
      </ul>
    </div>
          <div class="content__footer">
        <button id="time"></button>
      </div>
  </main>
  <nav id="context-menu" class="context-menu">
    <ul class="context-menu__items">
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="Date"><i class="fa fa-eye"></i> Текущее время</a>
      </li>
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="Add"><i class="fa fa-edit"></i> Добавить строку</a>
      </li>
      <li class="context-menu__item">
        <a href="#" class="context-menu__link" data-action="Delete"><i class="fa fa-times"></i> Удалить строку</a>
      </li>
    </ul>
  </nav>
  <script src="js/ajax.js"></script>
  <script src="js/context-menu.js"></script>
</body>
</html>