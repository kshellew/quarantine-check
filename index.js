'use strict'

function handleEmojiClicks() {
    $('.js-emoji').on('click', event => {
    const targetEmoji = $(event.currentTarget);
    // and reference to all other bulbs
    const otherEmoji = $('.js-emoji').not(targetEmoji);
    // store whether this bulb is aria-pressed.
    // because attr() returns strings, we convert it
    // back to a boolean by making a comparison.
    const pressedBool = $(targetEmoji).attr('aria-pressed') === 'true';
    
    // Remove 'bulb-on' and uncheck bulbs that are not this one
    otherEmoji.removeClass('emoji-on').attr('aria-pressed', false);
    // toggle the presence of 'bulb-on' on this bulb; 
    // toggle aria-pressed by inverting pressedBool 
    // using the ! operator.  
    targetEmoji.toggleClass('emoji-on').attr('aria-pressed', !pressedBool);
    $('.submit-btn').removeClass('hidden')
  });
}
function resetEmotion(){
    $('.reset-btn').on('click', function(){
        event.preventDefault();
        window.location.reload(true);
    })
}

function submitEmotion(){
    $('.submit-btn').on('click', function(){
        event.preventDefault();
        if ($('.js-emoji').hasClass('emoji-on')){
            alert('thanks for checking in with yourself.')
        } else {
            alert('please submit')
        }
        
    })
}

function makeEmoji(){
    handleEmojiClicks();
    submitEmotion();
    resetEmotion();
}
  
  $(makeEmoji);