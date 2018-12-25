$(function () {
	var $content = $('#jsonContent');
	var data = {
		rss_url: 'https://www.medium.com/feed/133b'
	};
	$.get('https://api.rss2json.com/v1/api.json', data, function (response) {
		if (response.status == 'ok') {
			var output = '';
			$.each(response.items, function (k, item) {
				var visibleSm;
				if(k < 3){
					visibleSm = '';
				 } else {
					 visibleSm = ' visible-sm';
				 }

				output += '<li class="blog-post ' + visibleSm + '">';
				var tagIndex = item.description.indexOf('<img'); // Find where the img tag starts
				var srcIndex = item.description.substring(tagIndex).indexOf('src=') + tagIndex; // Find where the src attribute starts
				var srcStart = srcIndex + 5; // Find where the actual image URL starts; 5 for the length of 'src="'
				var srcEnd = item.description.substring(srcStart).indexOf('"') + srcStart; // Find where the URL ends
				var src = item.description.substring(srcStart, srcEnd); // Extract just the URL
				output += '<div class="post-image"><a href="'+ item.link + '"><img src="' + src + '" /></a></div>';
				output += '<div class="post-content"><h2><a href="'+ item.link + '">' + item.title + '</a></h2>';
				output += '<p class="post-details"><span class="blog-filter">Par ' + item.author + '</span>';
				output += '<span class="post-date">' + item.pubDate + "</span></p>";
				var yourString = item.description.replace(/<img[^>]*>/g,""); //replace with your string.
				var maxLength = 240 // maximum number of characters to extract
				//trim the string to the maximum length
				var trimmedString = yourString.substr(0, maxLength);
				//re-trim if we are in the middle of a word
				trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
				output += '<p>' + trimmedString + '...</p>';
				output += '<div class="button"><a href="'+ item.link + '">Lire la suite</a></div>';
				output += '</li>';
				return k < 3;
			});
			$content.html(output);
		}
	});
});
