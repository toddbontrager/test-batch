var myArray = [];
myArray = ["Todd Bontrager", "toddbontrager"];

function cutName (str) {
  return str.split(" ");
}

var myData = {};
myData.fullName = cutName(myArray[0]);
myData.skype = myArray[1];
myData.github = "toddbontrager";
