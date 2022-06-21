document.addEventListener('DOMContentLoaded', function() {
  var copyFacebook = document.getElementById('facebook');
  var copyTwitter = document.getElementById('twitter');
  var copyLinkedIn = document.getElementById('linkedin');
  var copyInstagram = document.getElementById('instagram');
  var copySearch = document.getElementById('search');
  var copyDisplay = document.getElementById('display');
  var copyFacebookAds = document.getElementById('facebook_ads');
  var copyPartnerships = document.getElementById('partnerships');

  // URL Shortener

  function shortLink(full_url) {
    var rebrandlyRes = "";
    var linkRequest = {
      destination: full_url,
      domain: { fullName: "rebrand.ly" }
    }
    let requestHeaders = {
      "Content-Type": "application/json",
      "apikey": "d4f6df3fa2814c2aa4a01635fa15ffb7",
      "workspace": "76c208beee6545558dfb8d21c7b1942e"
    }
    return  $.ajax({
        url: "https://api.rebrandly.com/v1/links",
        type: "post",
        data: JSON.stringify(linkRequest),
        headers: requestHeaders,
        dataType: "json",
      });
  }

  // Fixed Source and Medium Variables
  // You can change these two adapt to your way of tracking campaigns
  // Also, these can serve as an example on how you can add more variables
  var fb_source = "facebook";
  var tw_source = "twitter";
  var li_source = "linkedin";
  var ig_source = "instagram";
  var social_medium = "social";
  var ppc_medium = "cpc";
  var partnership_medium = "partnership"

  // Facebook - copy URL with UTM tags function
  copyFacebook.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      base = tab.url;

      content_shared = document.getElementById('fbcontent').value;
      if (content_shared) {
        full_url = base + '?utm_source=' + fb_source + '&utm_medium=' + social_medium + '&utm_campaign=' + content_shared;
      } else {
        full_url = base + '?utm_source=' + fb_source + '&utm_medium=' + social_medium;
      }

      // If shorten link checkbox is checked, we shorten it using Rebrandly
      if (document.getElementById('fbrbdly').checked) {
        shortLink(full_url).then(response => navigator.clipboard.writeText(response.shortUrl));
      } else {
        navigator.clipboard.writeText(full_url);
      }


     }); 
  }, false);

  // Twitter - copy URL with UTM tags function
  copyTwitter.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      base = tab.url;

      content_shared = document.getElementById('twcontent').value;
      if (content_shared) {
        full_url = base + '?utm_source=' + tw_source + '&utm_medium=' + social_medium + '&utm_campaign=' + content_shared;
      } else {
        full_url = base + '?utm_source=' + tw_source + '&utm_medium=' + social_medium;
      }

      // If shorten link checkbox is checked, we shorten it using Rebrandly
      if (document.getElementById('twrbdly').checked) {
        shortLink(full_url).then(response => navigator.clipboard.writeText(response.shortUrl));
      } else {
        navigator.clipboard.writeText(full_url);
      }

     }); 
  }, false);

  // Linkedin - copy URL with UTM tags function
  copyLinkedIn.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      base = tab.url;

      content_shared = document.getElementById('licontent').value;
      if (content_shared) {
        full_url = base + '?utm_source=' + li_source + '&utm_medium=' + social_medium + '&utm_campaign=' + content_shared;
      } else {
        full_url = base + '?utm_source=' + li_source + '&utm_medium=' + social_medium;
      }
      
      // If shorten link checkbox is checked, we shorten it using Rebrandly
      if (document.getElementById('lirbdly').checked) {
        shortLink(full_url).then(response => navigator.clipboard.writeText(response.shortUrl));
      } else {
        navigator.clipboard.writeText(full_url);
      }

     }); 
  }, false);

  // Instagram - copy URL with UTM tags function
  copyInstagram.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      base = tab.url;
      
      content_shared = document.getElementById('igcontent').value;
      if (content_shared) {
        full_url = base + '?utm_source=' + ig_source + '&utm_medium=' + social_medium + '&utm_campaign=' + content_shared;
      } else {
        full_url = base + '?utm_source=' + ig_source + '&utm_medium=' + social_medium;
      }

      // If shorten link checkbox is checked, we shorten it using Rebrandly
      if (document.getElementById('igrbdly').checked) {
        shortLink(full_url).then(response => navigator.clipboard.writeText(response.shortUrl));
      } else {
        navigator.clipboard.writeText(full_url);
      }

     }); 
  }, false);

  // Search ads - copy URL with UTM tags function
  copySearch.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      base = tab.url;

      platform = document.getElementById('platform_search').value;
      campaignName = document.getElementById('search_campaign').value;
      headTerm = document.getElementById('head_term').value;
      if (headTerm) {
        full_url = base + '?utm_source=' + platform +'&utm_medium=' + ppc_medium + '&utm_campaign=' + campaignName + '&utm_term=' + headTerm;
      } else {
        full_url = base + '?utm_source=' + platform +'&utm_medium=' + ppc_medium + '&utm_campaign=' + campaignName;
      }
      navigator.clipboard.writeText(full_url);

     }); 
  }, false);

  // Display ads - copy URL with UTM tags function
  copyDisplay.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      base = tab.url;

      platform_display = document.getElementById('platform_display').value;
      campaignName = document.getElementById('display_campaign').value;
      full_url = base + '?utm_source=' + platform_display + '&utm_medium=' + ppc_medium + '&utm_campaign=' + campaignName;

      navigator.clipboard.writeText(full_url);

     }); 
  }, false);

  // Facebook ads - copy URL with UTM tags function
  copyFacebookAds.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      base = tab.url;

      campaignName = document.getElementById('facebook_campaign').value;
      goalCategory = document.getElementById('goal_category').value;
      full_url = base + '?utm_source=' + fb_source + '&utm_medium=' + ppc_medium + '&utm_campaign=' + campaignName + '&utm_content=' + goalCategory;

      navigator.clipboard.writeText(full_url);

     }); 
  }, false);

  // PArtnerships - copy URL with UTM tags function
  copyPartnerships.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      base = tab.url;
      
      partnerName = document.getElementById('partner_name').value;
      partnerType = document.getElementById('partnership_type').value;
      full_url = base + '?utm_source=' + partnerName + '&utm_medium=' + partnership_medium + '&utm_campaign=' + partnerType;

      navigator.clipboard.writeText(full_url);

     }); 
  }, false);
}, false);