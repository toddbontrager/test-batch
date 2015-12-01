var myArray = ["Todd Bontrager", "toddbontrager"];
function cutName (str) {
  return str.split(" ");
}
var myData = {
  fullName: cutName(myArray[0]),
  skype: myArray[1],
  github: "toddbontrager"
};
