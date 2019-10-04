function createTabsNav(phaseNumber, tier) {
    let tabsNav = $(document.createElement('ul'));
    tabsNav.addClass('nav nav-tabs');
    let phaseContainer = $('#phase-' + phaseNumber);
    let containerHeader = $(document.createElement('h3'));
    containerHeader.text('Tier: ' + tier);
    phaseContainer.append(containerHeader);

    Object.keys(classes).forEach(function (value) {
        let tabsNavItem = $(document.createElement('li'));
        let tabLink = $(document.createElement('a'));
        let tabLinkHref = '#' + classes[value].toLowerCase() + '-' + tier.replace(" ", "-").toLowerCase() + '-phase-' + phaseNumber;
        tabsNavItem.addClass('nav-item');
        tabLink.data('toggle', 'tab');
        tabLink.attr('href', tabLinkHref);
        tabLink.addClass(classes[value].toLowerCase());
        if (classes[value] === "Druid") {
            tabLink.addClass('nav-link active');
        } else {
            tabLink.addClass('nav-link');
        }

        tabLink.text(classes[value]);
        tabsNavItem.append(tabLink);
        tabsNav.append(tabsNavItem);
        $(tabsNav).append(tabsNavItem);
    });

    $(phaseContainer).append(tabsNav);
};

function createTabsContainer(phaseNumber, tier) {
    let containerSection = $(document.createElement('section'));
    let fullPhaseId = 'phase-' + phaseNumber + '-' + tier.replace(" ", "-").toLowerCase();
    let phaseContainer = $('#phase-' + phaseNumber);

    containerSection.attr('id', fullPhaseId);
    containerSection.addClass('tab-content');

    phaseContainer.append(containerSection);
};

function createClassTabFrames(phaseNumber, tier, phaseData) {
    let phaseSectionId = '#phase-' + phaseNumber + '-' + tier.replace(" ", "-").toLowerCase();
    let createdClasses = [];

    $(phaseData).each(function (i, _tableList) {
        //Setup article (tabFrame)
        const tableList = _tableList;
        let tabFrameId = tableList.Class.toLowerCase() + '-' + tier.replace(" ", "-").toLowerCase() + '-phase-' + phaseNumber;
        let tabFrameTemplate = $('#tabFrame').html()
            .replace('##tabFrameId##', tabFrameId);
        $(phaseSectionId).append(tabFrameTemplate);

        if ($.inArray(tableList.Class, createdClasses) === -1) {
            let tabTableId = "table-" + tableList.Class.toLowerCase() + '-' + tier.replace(" ", "-").toLowerCase() + '-phase-' + phaseNumber;
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
                let tabTableId = "table-" + tableList.Class.toLowerCase() + '-' + tier.replace(" ", "-").toLowerCase() + '-phase-' + phaseNumber + "-" + tableList.Spec.toLowerCase();
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
createTabsNav(1, "Pre raid");
createTabsContainer(1, "Pre raid");
createClassTabFrames(1, "Pre raid", preRaidPhaseOne);

//Tier 1 BiS lists
createTabsNav(1, '1');
createTabsContainer(1, '1');
createClassTabFrames(1, '1', tierOnePhaseOne);

//Tier 2 BiS lists


//Dynamically created tabs don't get the normal binding from Bootstrap, so we do it manually.
$(".nav-tabs").on("click", "a", function (e) {
    e.preventDefault();
    $(this).tab('show');
});