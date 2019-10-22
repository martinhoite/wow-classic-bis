function createTabsNav(phaseNumber, tier) {
    // let tabsNav = $(document.createElement('ul'));
    // tabsNav.addClass('nav nav-tabs');
    // let phaseContainer = $('#phase-' + phaseNumber);
    // let containerHeader = $(document.createElement('h3'));
    // containerHeader.text('Tier: ' + tier);
    // phaseContainer.append(containerHeader);

    // Object.keys(classes).forEach(function (value) {
    //     let tabsNavItem = $(document.createElement('li'));
    //     let tabLink = $(document.createElement('a'));
    //     let tabLinkHref = '#' + classes[value].toLowerCase() + '-' + tier.replace(" ", "-").toLowerCase() + '-phase-' + phaseNumber;
    //     tabsNavItem.addClass('nav-item');
    //     tabLink.data('toggle', 'tab');
    //     tabLink.attr('href', tabLinkHref);
    //     tabLink.addClass(classes[value].toLowerCase());
    //     if (classes[value] === "Druid") {
    //         tabLink.addClass('nav-link active');
    //     } else {
    //         tabLink.addClass('nav-link');
    //     }

    //     tabLink.text(classes[value]);
    //     tabsNavItem.append(tabLink);
    //     tabsNav.append(tabsNavItem);
    //     $(tabsNav).append(tabsNavItem);
    // });

    // $(phaseContainer).append(tabsNav);
};

function createTabsContainer(tierName) {
    let containerSection = $(document.createElement('section'));
    // let fullPhaseId = phaseName;
    let tierContainer = $('#' + tierName + "-container");

    containerSection.attr('id', tierName);
    containerSection.addClass('tab-content');

    tierContainer.append(containerSection);
};

function createClassTabFrames(tierName, tierData) {
    let tierSectionId = '#' + tierName;
    let createdClasses = [];

    $(tierData).each(function (i, _tableList) {
        //Setup article (tabFrame)
        const tableList = _tableList;
        let tabFrameId = tableList.Class.toLowerCase() + '-' + tierName;
        let tabFrameTemplate = $('#tabFrame').html()
            .replace('##tabFrameId##', tabFrameId)
            .replace('##tabFrameClass##', tableList.Class.toLowerCase());

        $(tierSectionId).append(tabFrameTemplate);

        if ($.inArray(tableList.Class, createdClasses) === -1) {
            let tabTableId = "table-" + tableList.Class.toLowerCase() + '-' + tierName;
            let tableFrameTemplate = $('#tableFrame').html()
                .replace('##tabFrameTableId##', tabTableId);

            $('#' + tabFrameId).append(tableFrameTemplate);

            let tableBody = $(document.createElement('tbody'));

            createTableRows(tableList, tableBody);
            $('#' + tabTableId).append(tableBody);
            if (tableList.Class === "Druid") {
                $('#' + tabFrameId).addClass('show active')
            }
            if (tableList.Spec !== null) {
                let frameHeader = $(document.createElement('h4'));
                frameHeader.text(tableList.Spec);
                $('#' + tabFrameId).prepend(frameHeader);
            }

            createdClasses.push(tableList.Class);
        } else { //This class already exists, add the spec list to the correct article
            if (tableList.Spec !== null) { //Just in case...
                let tabTableId = "table-" + tableList.Class.toLowerCase() + '-' + tierName + '-' + tableList.Spec.toLowerCase();
                let tableFrameTemplate = $('#tableFrame').html()
                    .replace('##tabFrameTableId##', tabTableId);

                $('#' + tabFrameId).append(tableFrameTemplate);

                let tableBody = $(document.createElement('tbody'));

                createTableRows(tableList, tableBody);
                $('#' + tabTableId).append(tableBody);
                if (i === 0) {
                    $('#' + tabFrameId).addClass('show active')
                }

                let frameHeader = $(document.createElement('h4'));
                frameHeader.text(tableList.Spec);
                $('#' + tabTableId).closest('div').prepend(frameHeader);
            }
        }
    });

    function createTableRows(tableList, tableBody) {
        $(tableList.ItemSlotRows).each(function (i, itemSlotRow) {
            let tableRow = $(document.createElement('tr'));
            let tableRowHead = $('<th scope="row"></th>').text(itemSlotRow.Slot);
            let tableColumnBest = $('<td></td>').html(
                "<a href='https://classic.wowhead.com/"
                + itemSlotRow.Best.Type
                + "="
                + itemSlotRow.Best.Id
                + "'>"
                + itemSlotRow.Best.Name
                + "</a>"
                + (itemSlotRow.Best.Comment ? "<p>" + itemSlotRow.Best.Comment + "</p>" : '')
            );
            let tableColumnSecond = $('<td></td>').html('X');
            let tableColumnThird = $('<td></td>').html('X');
            let tableColumnEnchant = $('<td></td>').html('X');
            if (itemSlotRow.Second !== null) {
                tableColumnSecond.html(
                    "<a href='https://classic.wowhead.com/"
                    + itemSlotRow.Second.Type
                    + "="
                    + itemSlotRow.Second.Id
                    + "'>"
                    + itemSlotRow.Second.Name
                    + "</a>"
                    + (itemSlotRow.Second.Comment ? "<p>" + itemSlotRow.Second.Comment + "</p>" : '')
                );
            }
            if (itemSlotRow.Third !== null) {
                tableColumnThird.html(
                    "<a href='https://classic.wowhead.com/"
                    + itemSlotRow.Third.Type
                    + "="
                    + itemSlotRow.Third.Id
                    + "'>"
                    + itemSlotRow.Third.Name
                    + "</a>"
                    + (itemSlotRow.Third.Comment ? "<p>" + itemSlotRow.Third.Comment + "</p>" : '')
                );
            }
            if (itemSlotRow.Enchant !== null) {
                tableColumnEnchant.html(
                    "<a href='https://classic.wowhead.com/"
                    + itemSlotRow.Enchant.Type
                    + "="
                    + itemSlotRow.Enchant.Id
                    + "'>"
                    + itemSlotRow.Enchant.Name
                    + "</a>"
                    + (itemSlotRow.Enchant.Comment ? "<p>" + itemSlotRow.Enchant.Comment + "</p>" : '')
                );
            }
            tableRow.append(tableRowHead)
                .append(tableColumnBest)
                .append(tableColumnSecond)
                .append(tableColumnThird)
                .append(tableColumnEnchant);
            tableBody.append(tableRow);
        });
    }
}

//Pre raid BiS lists
// createTabsNav(1, "Pre raid");
createTabsContainer("pre-raid");
createClassTabFrames("pre-raid", preRaid);

//Tier 1 BiS lists
// createTabsNav(1, '1');
createTabsContainer("tier-1");
createClassTabFrames("tier-1", tierOne);

//Tier 2 BiS lists
// createTabsNav(3, '2');
createTabsContainer("tier-2");
createClassTabFrames("tier-2", tierTwo);

//Phase 2 Pre raid BiS lists
// createTabsNav(2, "Pre raid");
// createTabsContainer(2, "Pre raid");
// createClassTabFrames(2, "Pre raid", preRaidPhaseTwo);



//Offset when jumping to anchors
// const shiftWindow = function () { scrollBy(0, -70); };

// window.addEventListener("hashchange", shiftWindow);
// $(document).ready(function () {
//     if (location.hash) shiftWindow();
// });

// //Set active on nav click
// $(".navbar-nav >.nav-item").on("click", function (e) {
//     $("ul.navbar-nav > li.nav-item").removeClass("active");
//     $(this).addClass("active");
// });


$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            // menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });

    $('.collapse-control').click( function () {
        let el = $(this);
        el.parent().find('section').slideToggle("fast", function () {
            el.find('.collapse-indicator').toggleClass('collapsed');
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop() + 140;
    $('.navbar-nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.navbar-nav li').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

//Class selector handler
$('.class-selector > .nav-item > a').on('click', function (e) {
    e.preventDefault();
    const tabClass = $(this).data('class');
    const article = 'article.' + tabClass;

    $('article').removeClass('show active');

    $(".class-selector > .nav-item > a").removeClass("active");
    $(article).addClass("active");

    $(article).each(function (e) {
        const tabId = '#' + this.id;
        $(tabId).addClass("show active");
    });
});
