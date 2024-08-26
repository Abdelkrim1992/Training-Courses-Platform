'use strict';
(function () {
  document.getElementsByTagName('body')[0].setAttribute('data-pc-layout', 'collapse');
  document.getElementsByTagName('body')[0].classList.add('layout-collapse');
  const pc_link = document.querySelector('.pc-navbar').innerHTML;
  var pc_collapse_menu_list = document.querySelector('.pc-navbar');
  pc_collapse_menu_list.classList.add('main-caption', 'nav');
  pc_collapse_menu_list.setAttribute('role', 'tablist');
  pc_collapse_menu_list.setAttribute('id', 'pc-layout-submenus');

  document.querySelector('.navbar-wrapper').insertAdjacentHTML(
    "beforeend",
    '<div class="pc-submenu-popup"><div class="tab-content" id="pc-layout-tab"></div></div>'
  );
  var pc_collapse_popup = document.querySelector('.pc-sidebar .pc-submenu-popup');
  var pc_collapse_link_list = document.querySelector('.pc-sidebar .pc-submenu-popup .tab-content');

  set_tab_menu();

  if (!!document.querySelector('.navbar-content')) {
    new SimpleBar(document.querySelector('.navbar-content'));
  }
  var elem = document.querySelectorAll('.pc-navbar li .pc-submenu');
  for (var j = 0; j < elem.length; j++) {
    elem[j].style.display = 'none';
  }


  // set tab menu
  function set_tab_menu() {
    var pc_menu_list = document.querySelectorAll('.pc-navbar > li.pc-item');
    var pc_new_list = '';
    var flag_count = 0;
    var flag_hit = false;
    var temp_blank_list = "";
    var temp_title = "";
    var temp_title_pre = "";
    
    pc_menu_list.forEach(function (item, list_index) {
      if (item.classList.contains('pc-caption')) {
        temp_title_pre = temp_title;
        temp_title = item.children[0].innerHTML;

        if (pc_collapse_menu_list) {
          flag_count += 1;
          var tempicon = "";
          try {
            tempicon = item.children[1].outerHTML;
          }
          catch (err) {
            tempicon = item.children[0].innerHTML.charAt(0);
          }
          pc_collapse_menu_list.insertAdjacentHTML(
            "beforeend",
            '<li class="pc-item nav-item"><a class="pc-link nav-link" href="#" id="pc-tab-link-' + flag_count + '" data-bs-target="#pc-tab-' + flag_count + '" role="tab" data-bs-toggle="tab">' +
            '<span class="pc-micon">' + tempicon + '</span>' +
            '<span class="pc-mtext">' + item.children[0].innerHTML + '</span>' +
            '</a></li>'
          );
        }
        if (flag_hit === true) {
          if (pc_collapse_link_list) {
            var tmp_flag_count = flag_count - 1;
            if (tmp_flag_count == 0) {
              temp_blank_list = pc_new_list;
            }
            if (tmp_flag_count == 1) {
              temp_blank_list += pc_new_list;
              pc_new_list = temp_blank_list;
              temp_blank_list = "";
            }
            pc_collapse_link_list.insertAdjacentHTML(
              "beforeend",
              '<div class="tab-pane fade" id="pc-tab-' + tmp_flag_count + '" role="tabpanel" aria-labelledby="pc-tab-link-' + tmp_flag_count + '" tabindex="' + tmp_flag_count + '"> <div class="pc-submenu-title">' + temp_title_pre + '</div> <ul class="pc-navbar">\
              '+ pc_new_list + '\
              </ul></div>'
            );
            pc_new_list = "";
          }
        }
        item.remove();
      } else {
        pc_new_list += item.outerHTML;
        flag_hit = true;
        item.remove();
        if (list_index + 1 === pc_menu_list.length) {
          if (pc_collapse_link_list) {
            var tmp_flag_count = flag_count;
            pc_collapse_link_list.insertAdjacentHTML(
              "beforeend",
              '<div class="tab-pane fade" id="pc-tab-' + tmp_flag_count + '" role="tabpanel" aria-labelledby="pc-tab-link-' + tmp_flag_count + '" tabindex="' + tmp_flag_count + '"> <div class="pc-submenu-title">' + temp_title_pre + '</div> <ul class="pc-navbar">\
              '+ pc_new_list + '\
              </ul></div>'
            );
            pc_new_list = "";
          }
        }
      }
    });
    active_menu();
    menu_click();
  }
  // set active item
  var docH = window.innerHeight;
  function active_menu() {
    var elem = document.querySelectorAll('.pc-sidebar .main-caption a');
    for (var l = 0; l < elem.length; l++) {
      elem[l].addEventListener("mouseenter", function (event) {
        var targetElement = event.target;
        var active_tab = targetElement.getAttribute('data-bs-target');
        const triggerEl = document.querySelector('.main-caption a[data-bs-target="' + active_tab + '"]');
        var actTab = new bootstrap.Tab(triggerEl);
        actTab.show();
        if (!!pc_collapse_popup) {
          new SimpleBar(pc_collapse_popup);
        }
        pc_collapse_popup.classList.add('active');
        var pop_off = pc_collapse_popup.getBoundingClientRect();
        var h = pop_off.height;
        var off = targetElement.getBoundingClientRect();
        var t = off.top;
        var bot = docH - t - 10;
        var temp_style = 'top: ' + t + 'px; max-height:' + bot + 'px;';
        pc_collapse_popup.setAttribute('style', temp_style);
      });
    }
  }
  pc_collapse_popup.addEventListener("mouseleave", function () {
    pc_collapse_popup.classList.remove('active');
  });
})();