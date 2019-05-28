function MenuClass () {
  
  "use strict";


  var contextMenuClassName = "context-menu",
	  contextMenuItemClassName = "context-menu__item",
	  contextMenuLinkClassName = "context-menu__link",
	  contextMenuActive = "context-menu--active",

	  taskItemClassName = "task",
	  taskItemInContext,

	  clickCoords,
	  clickCoordsX,
	  clickCoordsY,

	  menu = document.querySelector("#context-menu"),
	  menuItems = menu.querySelectorAll(".context-menu__item"),
	  menuState = 0,
	  active = "context-menu--active",
	  menuWidth,
	  menuHeight,
	  menuPosition,
	  menuPositionX,
	  menuPositionY,

	  windowWidth,
	  windowHeight;

this.toggleMenuOff = function() {
  if ( menuState !== 0 ) {
    menuState = 0;
    menu.classList.remove(active);
  }
}
this.toggleMenuOn = function() {
  if ( menuState !== 1 ) {
    menuState = 1;
    menu.classList.add(active);
  }
}
this.clickInsideElement = function ( e, className ) {
    var el = e.srcElement || e.target;
    
    if ( el.classList.contains(className) ) {
      return el;
    } else {
      while ( el = el.parentNode ) {
        if ( el.classList && el.classList.contains(className) ) {
          return el;
        }
      }
    }

    return false;
  }

 
this.getPosition = function (e) {
    var posx = 0;
    var posy = 0;

    if (!e) var e = window.event;
    
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
      posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    }

    return {
      x: posx,
      y: posy
    }
  }


  /**
   * Инициализация
   */
  
  this.init = function () {
    this.contextListener();
    this.clickListener();
    this.keyupListener();
    this.resizeListener();
  }



  /**
   * Слушатели
   */
  
	this.contextListener = function () {
    document.addEventListener( "contextmenu", (e) => {
      taskItemInContext = this.clickInsideElement( e, taskItemClassName );

      if ( taskItemInContext ) {
        e.preventDefault();
        this.toggleMenuOn();
        this.positionMenu(e);
      } else {
        taskItemInContext = null;
        this.toggleMenuOff();
      }
    });
  }

  /**
   * Слушатели клика
   */
  this.clickListener = function () {
    document.addEventListener( "click", (e) => {
      var clickeElIsLink = this.clickInsideElement( e, contextMenuLinkClassName );

      if ( clickeElIsLink ) {
        e.preventDefault();
        this.menuItemListener( clickeElIsLink );
      } else {
        var button = e.which || e.button;
        if ( button === 1 ) {
          this.toggleMenuOff();
        }
      }
    });
  }

  /**
   * Слушатели клавиши
   */
  this.keyupListener = function () {
    window.onkeyup = function(e) {
      if ( e.keyCode === 27 ) {
        this.toggleMenuOff();
      }
    }
  }

  /**
   * Слушатель изменения окна
   */
  this.resizeListener = function () {
    window.onresize = function(e) {
      this.toggleMenuOff();
    };
  }

  /**
   * Позиции меню
   */
  this.positionMenu = function (e) {
    clickCoords = this.getPosition(e);
    clickCoordsX = clickCoords.x;
    clickCoordsY = clickCoords.y;

    menuWidth = menu.offsetWidth + 4;
    menuHeight = menu.offsetHeight + 4;

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    if ( (windowWidth - clickCoordsX) < menuWidth ) {
      menu.style.left = windowWidth - menuWidth + "px";
    } else {
      menu.style.left = clickCoordsX + "px";
    }

    if ( (windowHeight - clickCoordsY) < menuHeight ) {
      menu.style.top = windowHeight - menuHeight + "px";
    } else {
      menu.style.top = clickCoordsY + "px";
    }
  }


  this.menuItemListener = function ( link ) {

	switch (link.getAttribute("data-action")) {
	  case 'Date':

		var Data, Hour, Minutes, Seconds, time_con;

	    Data = new Date();
		Hour = Data.getHours();
		Minutes = Data.getMinutes();
		Seconds = Data.getSeconds();
		 
		time_con = document.getElementById('time');

		time_con.innerHTML = "Текущее время: "+Hour+":"+Minutes+":"+Seconds;

	    break;
	  case 'Add':
	    
	  	var container, newLi,id,
            ajax = new AJAX(),
            tasks = [
                "Вперед!",
                "Не сейчас",
                "Не делай этого",
                "Ты шутишь?",
                "Да, но позднее",
                "Думаю, не стоит",
                "Не надейся на это",
                "Ни в коем случае",
                "Это неплохо",
                "Кто знает?",
                "Туманный ответ, попробуй еще",
                "Я не уверен",
                "Я думаю, хорошо",
                "Забудь об этом",
                "Это возможно",
                "Определенно - да",
                "Быть может",
                "Слишком рано",
                "Да",
                "Конечно, да",
                "Даже не думай",
                "Лучше Вам пока этого не знать"
            ],
            i = 0,
            task,

          i = Math.floor(Math.random() * tasks.length);
          task = tasks[i];

	  	id = Math.floor(Math.random() * (100 - 1)) + 1;

	  	// if(ajax.insertTask(id) == true) {

          ajax.insertTask(id, task);
            ajax.query().onreadystatechange = function () {
                if(this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    var res = JSON.parse(this.responseText);
                    if(res.status == 200) {
                        container = document.getElementById('tasks');
                        newLi = document.createElement('li');

                        newLi.setAttribute("data-id", id);
                        newLi.classList.add("task");
                        newLi.innerHTML = '<div class="task__content">'+task+'</div><div class="task__actions"><i class="fa fa-eye"></i><i class="fa fa-edit"></i><i class="fa fa-times"></i></div>';
                        container.appendChild(newLi);
                    }
                };
            }

        //}


	    break;
	  case "Delete":

	        var ajax = new AJAX();

            ajax.deleteItem(taskItemInContext.getAttribute("data-id"));

	  	    var item = document.querySelector("[data-id='"+taskItemInContext.getAttribute("data-id")+"']");

		    item.remove();

	        break;
	}

    this.toggleMenuOff();
  }

  /**
   * Запуск приложения
   */

};

var menu = new MenuClass();

menu.init();






