$("#exampleModal").on("show.bs.modal", function (e) {
  $("#bs1").text("Task 1 in progress...");
  $("#bs_progressbar").css("width", "80%");
  $("#bs_progressbar").addClass("progress-bar-striped");
  $("#bs_progressbar").addClass("progress-bar-animated");
});
