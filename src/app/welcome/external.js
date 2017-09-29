function punubCall(){

PUBNUB({
    subscribe_key: 'sub-c-78806dd4-42a6-11e4-aed8-02ee2ddab7fe'
}).subscribe({
    channel : 'pubnub-twitter',
    message : function(tweet) {

        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        // Receive Tweets in your Browser!
        // -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
        console.log(tweet);

    }
});

}
export {punubCall};