//======== JS ========

var apples = 14;
console.log(apples);
console.log("I have " + apples + " apples.");
console.log("=-=-=-=-=-=-=-=-=-=-=");

var materials = ['wood', 'metel', 'stone'];
var words = {elephant:"The world's largest land mammal.", school: "A place of supposed learning.", ice_cream:"A delicious milk-based dessert."};
console.log(materials);
console.log(words);
console.log("=-=-=-=-=-=-=-=-=-=-=");

var num = 16;
if(num > 10) {
  console.log(num + " is greater than 10.");
  }
  else if(num == 10) {
    console.log(num + " is exactly 10.");
  }
  else {
    console.log(num + " must be less than 10.");
  }
  console.log("=-=-=-=-=-=-=-=-=-=-=");

  var i = 0;
  while (i < 10) {
    console.log("Doing the same thing over and over.");
    i++;
  }
  console.log("=-=-=-=-=-=-=-=-=-=-=");

var base = 5;
var w = 0;
while (w < 20) {
  console.log(w + base);
  w ++;
}
console.log("=-=-=-=-=-=-=-=-=-=-=");

var total = 0;
var num = 0;
while (num < 100) {
  total += num;
  num ++;
}
console.log(total);

console.log("=-=-=-=-=-=-=-=-=-=-=");

var height = Array(13).fill().map((_, i) => i + 3);
var e = 0;
while(e < 13) {
  if(height[e] > 9) {
    console.log("height: " +  height[e] + "   You can get on the rollercoaster");
  }
  else {
    console.log("height: " +  height[e] + "   Yawl too short, get outta here shorty!");
  }
  e ++;
}
console.log("=-=-=-=-=-=-=-=-=-=-=");

var containers = ['purse', 'wallet', 'backback']

for (var count = 0; count < containers.length; count++) {
	console.log(containers[count]);
}
console.log("=-=-=-=-=-=-=-=-=-=-=");

function helloWorld() {
  console.log("Hello World!");
}

helloWorld();
console.log("=-=-=-=-=-=-=-=-=-=-=");


function add(first_num, second_num) {
  return first_num + second_num;
}

var amount = add(5, 7);
console.log(amount);

//======== RUBY ========
// apples = 14
// puts apples
//
// puts "I have #{apples} apples."

// materials = ['wood', 'metal', 'stone']
// words = {
//   'elephant' => "The world's largest land mammal.",
//   'school' => 'A place of learning.',
//   'ice cream' => 'A delicious milk-based dessert.',
// }


// num = 16
// if num > 10
//   puts "#{num} is greater than 10."
// elsif num == 10
//   puts "#{num} is exactly 10."
// else
//   puts "#{num} must be less than 10."
// end
//
// 10.times do
//   puts "Doing the same thing over and over."
// end

// base = 5
// 20.times do |num|
//   puts num + base
// end
//
// total = 0
// 100.times do |num|
//   total += num
// end
// puts total

// (3..15).each do |height|
//   if height > 9
//     puts "You can get on the rollercoaster!"
//   else
//     puts "You are too short to ride this rollercoaster."
//   end
// end

// containers = ['purse', 'wallet', 'backback']
// containers.each do |container|
//   puts container
// end

// def hello_world
//   puts "Hello world!"
// end
//
// hello_world


// def add(first_num, second_num)
//   first_num + second_num
// end
//
// amount = add(5, 7)
// puts amount



//bootom
