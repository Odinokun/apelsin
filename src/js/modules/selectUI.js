module.exports = function() {

  // begin select UI
  $( "#region-select" ).selectmenu()
    .selectmenu( "menuWidget" )
    .addClass( "region-select__menu" );

  $( "#lang" ).selectmenu()
    .selectmenu( "menuWidget" )
    .addClass( "lang__menu" );
  // end select UI

};