// ==UserScript==
// @id             iitc-plugin-highlight-NoRtH3rnOuTLaW@bowering.org
// @name           IITC plugin: NoRtH3rnOuTLaW portals. Hightlight NoRtH3rnOuTLaW owned portals
// @category       Highlighter
// @version        0.2.0.4
// @namespace      https://github.com/gb96/iitc-plugins
// @updateURL      https://github.com/gb96/iitc-plugins/portalOwnerNoRtH3rnOuTLaW.user.js
// @downloadURL    https://github.com/gb96/iitc-plugins/portalOwnerNoRtH3rnOuTLaW.user.js
// @description    Use the portal fill color to denote if the portal is owned by NoRtH3rnOuTLaW.
// @include        https://www.ingress.com/intel*
// @include        http://www.ingress.com/intel*
// @match          https://www.ingress.com/intel*
// @match          http://www.ingress.com/intel*
// @include        https://www.ingress.com/mission/*
// @include        http://www.ingress.com/mission/*
// @match          https://www.ingress.com/mission/*
// @match          http://www.ingress.com/mission/*
// @grant          none
// ==/UserScript==

// PLUGIN START ////////////////////////////////////////////////////////

// use own namespace for plugin
window.plugin.NoRtH3rnOuTLaW = function() {};

window.plugin.NoRtH3rnOuTLaW.highlight = function(data) {

    console.log("NoRtH3rnOuTLaW highlight called on guid=" + data.portal.options.guid);
    if (!data.portal.owner) {
        console.log("placeholder guid=" + data.portal.options.guid);
        var detail = window.portalDetail.get(data.portal.options.guid);
        if (detail) {
            console.log("got detail for guid=" + data.portal.options.guid + " owner=" + detail.owner);
            if (detail.owner === 'NoRtH3rnOuTLaW') {
                console.log("found a NoRtH3rnOuTLaW portal");
                data.portal.options.fillColor = 'pink';
                data.portal.options.fillOpacity = '1.0';
            }
        } else {
            // Request detail from server
            console.log("requesting detail for guid=" + data.portal.options.guid);
            window.portalDetail.request(data.portal.options.guid);
        }
        return;
    }
    if (data.owner === 'NoRtH3rnOuTLaW' || data.portal.owner === 'NoRtH3rnOuTLaW') {
        console.log("found a NoRtH3rnOuTLaW portal");
        data.portal.options.fillColor = 'pink';
        data.portal.options.fillOpacity = '1.0';
    }
}

var setup =  function() {
    window.addPortalHighlighter('NoRtH3rnOuTLaW Portals', window.plugin.NoRtH3rnOuTLaW.highlight);
}

// PLUGIN END //////////////////////////////////////////////////////////
