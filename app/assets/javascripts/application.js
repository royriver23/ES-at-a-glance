//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-typeahead-rails
//= require_tree .

var ready = function() {
  var engine = new Bloodhound({
      datumTokenizer: function(d) {
          console.log(d);
          return Bloodhound.tokenizers.whitespace(d.title);
      },
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
          url: '../search/typeahead/%QUERY'
      }
  });

  var promise = engine.initialize();

  promise
      .done(function() { console.log('success'); })
      .fail(function() { console.log('error') });

  $("#term").typeahead(null, {
    name: "article",
    displayKey: "title",
    source: engine.ttAdapter()
  })
};

$(document).ready(ready);
$(document).on('page:load', ready);
