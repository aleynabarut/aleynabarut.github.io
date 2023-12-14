$(document).ready(function() {
      // Görevleri Python kodundan al
      $.get("get_tasks.py", function(tasks) {
          // Görevleri HTML sayfasına ekle
          $("#task-list-items").empty();
  
          for (var i = 0; i < tasks.length; i++) {
            var task = tasks[i];
  
            var li = $("<li>");
            li.append(task.name);
  
            if (task.completed) {
              li.addClass("completed");
            }
  
            $("#task-list-items").append(li);
          }
      });
  });
  