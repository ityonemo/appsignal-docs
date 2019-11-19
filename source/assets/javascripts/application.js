import "./jquery"
import Cookies from "./js.cookie"
import "./dl_header"
import "./logged_in_switcher"
import "./navigation"
import { loadAnalyticsScripts } from "./analytics"
import { userSignedIn } from "./helpers/userSignedIn"

$(document).ready(function() {
  var navigationElement = $("nav");

  window.NAVIGATION_SCROLL_TOP_KEY = "navigation_scroll_top";
  function storeScrollPosition(position) {
    localStorage.setItem(window.NAVIGATION_SCROLL_TOP_KEY, position);
  }
  function getScrollPosition() {
    return localStorage.getItem(window.NAVIGATION_SCROLL_TOP_KEY);
  }

  // Save scroll position
  $("#navigation").on("scroll", function(e) {
    storeScrollPosition($(this).scrollTop());
  });
  navigationElement.scrollTop(getScrollPosition());

  if (userSignedIn() || Cookies.get("cookie_consent") == "true") {
    $("#cookies").hide();
    loadAnalyticsScripts();
  }

  // Track pageview
  if (window.location.host == "docs.appsignal.com") {
    var tracker_src = "https://appsignal.com/ident.gif?page=" +
      encodeURI("docs: " + window.location.pathname) +
      "&" +
      window.location.search.slice(1, window.location.search.length);
    var img = document.createElement("img");
    img.src = tracker_src;
    img.height = "1";
    img.width = "1";
    img.style = "display:none;";
    document.body.appendChild(img);
  }

  $("#cookies #accept_link").click(function(e) {
    e.preventDefault();
    $("#cookies").hide();

    var consent_src = "https://appsignal.com/cookie_consent.gif";
    var img = document.createElement("img");
    img.src = consent_src;
    img.height = "1";
    img.width = "1";
    img.style = "display:none;";
    document.body.appendChild(img);

    loadAnalyticsScripts();
  })
});
