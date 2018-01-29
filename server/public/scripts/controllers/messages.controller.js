myApp.controller('MessagesController', ['$http', function($http) {
console.log('Made it to the Messages Controller!');

    const self = this;
    self.messages = { list: []};
  

//POST to the server
    self.addMessage = function(message){
        console.log(message);

    $http.post('/messages', message)
        .then(function (response) {
        console.log(response);
        getMessages();
        })
        .catch(function (response) {
        console.log('error on posting message: ', response);
});

};//end post messages to server

//GET FROM THE DATABASE 
    self.getMessages = function(){
        $http.get('/messages')
            .then(function (response) {
                console.log('get messages', response.data);
                self.messages.list = response.data;
            })
            .catch(function (response) {
                console.log('error getting messages: ', response);
            });        
    };//end get messages 

    self.getMessages();


}]);//end messages controller 