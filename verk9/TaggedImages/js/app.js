let staticImages = {'p1.jpg':'Rabbit', 'p2.jpg':'Sea', 'p3.jpg':'Deer', 'p4.jpg':'New York Street Map', 'p5.jpg':'Sydney Train', 'p6.jpg':'Typographic Study', 'p7.jpg':'Trumpet', 'p8.jpg':'Aqua Logo', 'p9.jpg':'Ghost'}
$.each( staticImages, function( key, value){
    console.log(key + " " + value);
    let nymynd = new Image();
    nymynd.src = 'img/'+key;
    nymynd.alt = value;
    document.getElementById('gallery').appendChild(nymynd);
});

(function() {                             // Lives in an IIFE
  let $imgs = $('#gallery img');          // Get the images
  let $search = $('#filter-search');      // Get the input element
  let cache = [];                         // Create an array called cache



  $imgs.each(function() {                 // For each image
    cache.push({                          // Add an object to the cache array
      element: this,                      // This image
      text: this.alt.trim().toLowerCase() // Its alt text (lowercase trimmed)
    });
  });

  function filter() {                     // Declare filter() function
    let query = this.value.trim().toLowerCase();  // Get the query
    cache.forEach(function(img) {         // For each entry in cache pass image 
      let index = 0;                      // Set index to 0

      if (query) {                        // If there is some query text
        index = img.text.indexOf(query);  // Find if query text is in there
      }

      img.element.style.display = index === -1 ? 'none' : '';  // Show / hide
    });
  }

  if ('oninput' in $search[0]) {          // If browser supports input event
    $search.on('input', filter);          // Use input event to call filter()
  } else {                                // Otherwise
    $search.on('keyup', filter);          // Use keyup event to call filter()
  }

}());