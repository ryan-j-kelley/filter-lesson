$(document).ready(function () {
	$(".filter").on("click", function (e) {
		e.preventDefault();

		var button = $(this);
		button.toggleClass("active");


		$(".filter.active").each(function () {
			var thisFilter = $(this);
			var filter = thisFilter.data("filter");


			if (filter === "all") {
				$(".item").addClass("active");
			} else {
				$(".item.active").removeClass("active");
				$("." + filter).addClass("active");
			}


		});

	});

});
