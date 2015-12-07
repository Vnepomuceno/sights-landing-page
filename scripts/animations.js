function scrollToAnchor(aid){
    var aTag = $("a[name='" + aid + "']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

function showElementFaded(elid, eltype, duration) {
	var elTag = $(eltype + "[name='" + elid + "']");
	elTag.fadeIn(duration);
}