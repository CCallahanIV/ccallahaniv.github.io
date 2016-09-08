Person = new function(firstName, lastName, email){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
};

var people = [];

(function(){
  var form = document.getElementById('userinfo');

  addEvent(form, 'submit', function(e)) {
    e.preventDefault();
    var elements=this.elements;
    var person = new Person(elements.firstName.value, elements.lastName.value, elements.email.value);
    people.push(person);
  };
}());

console.log(person);
