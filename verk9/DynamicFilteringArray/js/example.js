(function() {

  // STORE EACH PERSON AS AN OBJECT IN AN ARRAY
  let people = [
    {                                              // Each person is an object
      nafn: 'Casey Neistat',                               // It holds name and rate
      rate: 45,
      dagsetning: '6.4.2018'
    },
    {
      nafn: 'Elizabeth II',
      rate: 65,
      dagsetning: '5.5.2005'
    },
    {
      nafn: 'Gordon Ramsay',
      rate: 80,
      dagsetning: '24.11.2004'
    },
    {
      nafn: 'Nigel Thornberry',
      rate: 120,
      dagsetning: '11.11.1111'
    },
    {
      nafn: 'Nobelium Uranium',
      rate: 194,
      dagsetning: '20.12.2020'
    }
  ];

  let rows = [],                        // rows array
      $min = $('#value-min'),           // Minimum text input
      $max = $('#value-max'),           // Maximum text input
      $table = $('#rates');             // The table that shows results

  function makeRows() {                 // Create table rows and the array
    people.forEach(function(person) {   // For each person object in people
      let $row = $('<tr></tr>');        // Create a row for them
      $row.append( $('<td></td>').text(person.nafn) ); // Add their name
      $row.append( $('<td></td>').text(person.rate) ); // Add their rate
      $row.append( $('<td></td>').text(person.dagsetning) );
      rows.push({ // Create rows array which links people objects to table rows
        person: person,                 // Reference to the person object
        $element: $row                  // Reference to row as jQuery selection
      });
    });
  }

  function appendRows() {               // Adds rows to the table
    let $tbody = $('<tbody></tbody>');  // Create <tbody> element
    rows.forEach(function(row) {        // For each object in the rows array
      $tbody.append(row.$element);      // Add the HTML for the row
    });
    $table.append($tbody);              // Add the rows to the table
  }

  function update(min, max) {           // Update the table content
    rows.forEach(function(row) {        // For each row in the rows array
      if (row.person.rate >= min && row.person.rate <= max) { // If in range
        row.$element.show();            // Show the row
      } else {                          // Otherwise
        row.$element.hide();            // Hide the row
      }
    });
  }

  function init() {                     // Tasks when script first runs
    $('#slider').noUiSlider({           // Set up the slide control
      range: [0, 200], start: [50, 90], handles: 2, margin: 20, connect: true,
      serialization: {to: [$min, $max],resolution: 1}
    }).change(function() { update($min.val(), $max.val()); });
    makeRows();                           // Create table rows and rows array
    appendRows();                         // Add the rows to the table
    update($min.val(), $max.val());     // Update table to show matches
  }

  $(init);                              // Call init() when DOM is ready
}());