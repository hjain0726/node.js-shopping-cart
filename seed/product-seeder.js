var Product=require('../models/product');
var mongoose=require('mongoose');
mongoose.connect('connect to your db');
var products=[
  new Product({
  imagePath:'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
  title:'Gothic Video Game',
  description:'Awesome Game!!!!',
  price:10
}),
new Product({
imagePath:'https://media.phpnuke.org/000/975/756/0bc_350_580_580--world-of-warcraft-1.jpg',
title:'World of Warcraft Video Game ',
description:'Also awesome? But of course it was better in vanilla...',
price:20
}),
new Product({
imagePath:'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Codbox.jpg/220px-Codbox.jpg',
title:'Call of Duty Video Game',
description:'Meh ... nah,it is okay i guess ',
price:60
}),
new Product({
imagePath:'https://images8.alphacoders.com/882/thumb-1920-882933.jpg',
title:'Minecraft Video Game',
description:'Now that is super Awesome',
price:15
}),
new Product({
imagePath:'https://www.hdwallpapers.in/walls/grand_theft_auto_gta_5-wide.jpg',
title:'Grand Theft Auto 5',
description:'Amazing game',
price:70
})
];
var done=0;
for(var i=0;i<products.length;i++)
{
  products[i].save(function(err,result){
    done++;
    if(done===products.length){
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
