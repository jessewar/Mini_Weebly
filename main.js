// get "+" icon for new page input area
// TODO: Make only the icon a button
$(function () {
    var $newPageInput = $('#new-page-input');

    // put icon in page name input
    $newPageInput.iconfield({
        'image-url': 'public/imgs/search.jpg',
        'horizontal-padding': 10, // TODO: see if this causes an issue for different screen sizes
        'left': false
    });

    // handle new page creation
    $newPageInput.on('click', function (e) {
        var pageName = $newPageInput.val();
        if (pageName !== "") {
            // generate new page label with every new page creation
            var $pageList = $('#pages');
            var pageListElement = "<li><h3><a href='#' class='btn btn-default page-button'>" + pageName + "</a></h3></li>";
            $pageList.append(pageListElement);

            // generate new page template item every new page creation
            var pageTemplateItem = "<span class='label label-default page-template'>" + pageName + "</span>";
            $newPageInput.before(pageTemplateItem);
            $newPageInput.val("");
        }
    });
});