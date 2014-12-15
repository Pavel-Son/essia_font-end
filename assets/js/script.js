//dropdown menu control
$('.dropdown-link').hover(function () {
	var dropContentId = $(this).attr('data-link'),
		dropContent = $('#'+dropContentId);

	$('.dropdown-content').stop(true, true).hide();
	removeActiveClass();

	$(this).addClass('active');
	dropContent = dropContent.slideDown(300);

}, function () {
	var dropContentId = $(this).attr('data-link'),
		dropContent = $('#'+dropContentId);
	
	setTimeout(function () {
		var hoveredDropontent = $('.dropdown-content:hover').length,
			hoveredDropLink = $('.dropdown-link:hover').length;

		if (!hoveredDropontent) {
			dropContent.slideUp(300);
			if (!hoveredDropLink) {
				$('.dropdown-link.active').removeClass('active');
			}
		} else if (hoveredDropontent){
			setInterval(function () {
				if (!$('.dropdown-content:hover').length) {
					if (!$('.dropdown-link.active').length) {
						$('.dropdown-content').slideUp(300);
					}
					if (!$('.dropdown-link:hover').length) {
						removeActiveClass();
					}
				}
			}, 200);
		}
	}, 300);
});
$('.dropdown-link').click(function () {
	var dropContentId = $(this).attr('data-link'),
		dropContent = $('#'+dropContentId);
	
	$(this).toggleClass('active');
	dropContent.slideToggle(300);
	
	return false;
})


function removeActiveClass () {
	$('.dropdown-link.active').removeClass('active');
}

//Hovering dropdown-menu icons
$('.dropdown-content li a, .social-links a').hover(function () {
	toggleChildClass.call( $(this));
},
function () {
	toggleChildClass.call( $(this),'replace');
});

function toggleChildClass (action) {
	var childClass = $(this).find('i').attr('class');
	action === 'replace' ? $(this).find('i').attr('class', childClass.replace('_converted', '')) : $(this).find('i').attr('class', childClass+'_converted'); ;
}

