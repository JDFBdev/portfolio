export default function nav_slider( menu, callback, query650, query500 ) {
    let menu_width = menu.offsetWidth;
    // We only want the <li> </li> tags
    menu = menu.getElementsByTagName( 'li' );            
    if ( menu.length > 0 ) {
        var marginLeft = [];
        // Loop through nav children i.e li
        [].forEach.call( menu, ( el, index ) => {
        // Dynamic width/margin calculation for hr              
        var width = getPercentage( el.offsetWidth, menu_width );                              
        var tempMarginLeft = 0;
        // We don't want to modify first elements positioning
        if ( index !== 0 )  {
            tempMarginLeft = getArraySum( marginLeft );
        }            
        // Set mouse event  hover/click
        callback( el, width, tempMarginLeft );      

        /* We store it in array because the later accumulated value is used for positioning */
        // toca esto para cambiar cuanto espacio se mueve 
        if (query650 && query500) marginLeft.push( width + 6.3 );  // chico
        else if (query650 && !query500) marginLeft.push( width + 6.4 ); // mediano
        else marginLeft.push( width + 7.6 );  // grande
        
        } );
    }
}

// Might make this dynamic for px, %, pt, em 
function getPercentage( min, max ) {
    return min / max * 100;
}

// Not using reduce, because IE8 doesn't supprt it
function getArraySum( arr ) {
    let sum = 0;
    [].forEach.call( arr, ( el, index ) => {
        sum += el;
    } );
    return sum;
}