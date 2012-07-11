$.fn.loopingAnimation = function(props, dur, eas){
    if( this.data('loop') == true ){
       this.animate( props, dur, eas, function(){
           if( $(this).data('loop') == true ) 
			$(this).loopingAnimation(props, dur, eas);
       }
	}
    return this; // Don't break the chain
}