var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["446534a9-985a-4a36-892e-b7c014bbc0f9","ac8d9aa5-3b5c-4714-8c83-7101a1fd6da1","5d5da71e-8938-4ed0-8d59-178e5104f0c2","0c0c63d0-1983-404b-ac7c-aa51778327e4","01695089-ced7-4a12-a6ad-558a293db8e8","04985d9e-1956-404f-a1e9-ed7b760530ff","87b617d0-36c0-4f31-8b6d-18f3c4b8d1ec","e3c5f1a0-c3f7-4d9b-8ce0-911313748b22","8074f6a2-d451-4769-b2da-1b16bafa1387","1a002ac6-b081-4233-8a1a-a3d8fd4e6be8"],"propsByKey":{"446534a9-985a-4a36-892e-b7c014bbc0f9":{"name":"Background 1","sourceUrl":"assets/v3/animations/IImbGOG_irydMehlO9-nJmBaLinlT-LTmooYnXEQsEk/446534a9-985a-4a36-892e-b7c014bbc0f9.png","frameSize":{"x":909,"y":513},"frameCount":1,"looping":true,"frameDelay":4,"version":"BTcxe9QQRN9zDkwCifCItr34rRkd_68F","loadedFromSource":true,"saved":true,"sourceSize":{"x":909,"y":513},"rootRelativePath":"assets/v3/animations/IImbGOG_irydMehlO9-nJmBaLinlT-LTmooYnXEQsEk/446534a9-985a-4a36-892e-b7c014bbc0f9.png"},"ac8d9aa5-3b5c-4714-8c83-7101a1fd6da1":{"name":"Ninja Run 1.PNG_1","sourceUrl":null,"frameSize":{"x":94,"y":106},"frameCount":6,"looping":true,"frameDelay":1,"version":"Fv7H_8aAmT_GoHcd7LBVcELMxCrRg2PG","loadedFromSource":true,"saved":true,"sourceSize":{"x":282,"y":212},"rootRelativePath":"assets/ac8d9aa5-3b5c-4714-8c83-7101a1fd6da1.png"},"5d5da71e-8938-4ed0-8d59-178e5104f0c2":{"name":"Ninja Attack 1.PNG_1","sourceUrl":null,"frameSize":{"x":156,"y":91},"frameCount":6,"looping":true,"frameDelay":12,"version":"5HqwqM4E3SOiUodJPrvQfvY5EmnJLVRd","loadedFromSource":true,"saved":true,"sourceSize":{"x":312,"y":273},"rootRelativePath":"assets/5d5da71e-8938-4ed0-8d59-178e5104f0c2.png"},"0c0c63d0-1983-404b-ac7c-aa51778327e4":{"name":"Ninja Rest 1.PNG_1","sourceUrl":null,"frameSize":{"x":68,"y":104},"frameCount":4,"looping":true,"frameDelay":10,"version":"kBEKkGLsVMYOnm5Gfat3UGq9p8IL.fHf","loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":208},"rootRelativePath":"assets/0c0c63d0-1983-404b-ac7c-aa51778327e4.png"},"01695089-ced7-4a12-a6ad-558a293db8e8":{"name":"apple_1","sourceUrl":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/F_v91y9vHdaIMRGQ9Wqps2SnsgXW55cC/category_food/apple.png"},"04985d9e-1956-404f-a1e9-ed7b760530ff":{"name":"orange_1","sourceUrl":null,"frameSize":{"x":300,"y":296},"frameCount":1,"looping":true,"frameDelay":12,"version":"lZDzvP_oC65q0RISZtfoiytP0nWw_.oG","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":296},"rootRelativePath":"assets/04985d9e-1956-404f-a1e9-ed7b760530ff.png"},"87b617d0-36c0-4f31-8b6d-18f3c4b8d1ec":{"name":"sliced_watermelon_1","sourceUrl":"assets/api/v1/animation-library/gamelab/B1YyBuZ54GnwaCoCGAahnL3feUGY4imD/category_food/sliced_watermelon.png","frameSize":{"x":300,"y":240},"frameCount":1,"looping":true,"frameDelay":2,"version":"B1YyBuZ54GnwaCoCGAahnL3feUGY4imD","loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":240},"rootRelativePath":"assets/api/v1/animation-library/gamelab/B1YyBuZ54GnwaCoCGAahnL3feUGY4imD/category_food/sliced_watermelon.png"},"e3c5f1a0-c3f7-4d9b-8ce0-911313748b22":{"name":"pear_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png","frameSize":{"x":206,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL","loadedFromSource":true,"saved":true,"sourceSize":{"x":206,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oVyTBD.xMENrs0k4sc4dH9NHJSYtTBeL/category_food/pear.png"},"8074f6a2-d451-4769-b2da-1b16bafa1387":{"name":"jetpack_1","sourceUrl":"assets/api/v1/animation-library/gamelab/u1HXl_LIxx8nPixboCUDt7Eh5KHkTb7J/category_vehicles/jetpack.png","frameSize":{"x":133,"y":160},"frameCount":1,"looping":true,"frameDelay":2,"version":"u1HXl_LIxx8nPixboCUDt7Eh5KHkTb7J","loadedFromSource":true,"saved":true,"sourceSize":{"x":133,"y":160},"rootRelativePath":"assets/api/v1/animation-library/gamelab/u1HXl_LIxx8nPixboCUDt7Eh5KHkTb7J/category_vehicles/jetpack.png"},"1a002ac6-b081-4233-8a1a-a3d8fd4e6be8":{"name":"asterisk_explode_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Qd9LyaKOQ0PDZUrdsnG7ea0pz5ayXTs9/category_characters/asterisk_explode.png","frameSize":{"x":171,"y":158},"frameCount":11,"looping":true,"frameDelay":2,"version":"Qd9LyaKOQ0PDZUrdsnG7ea0pz5ayXTs9","loadedFromSource":true,"saved":true,"sourceSize":{"x":684,"y":474},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Qd9LyaKOQ0PDZUrdsnG7ea0pz5ayXTs9/category_characters/asterisk_explode.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

 var sprite1 = createSprite(200, 200);
 sprite1.setAnimation("Background 1");
sprite1.scale=(0.8);
var sprite2 = createSprite(200, 350);
sprite2.setAnimation("Ninja Rest 1.PNG_1");

var appleClock = 0;
var score = 0;

var fruits = [];


function draw() {
  background("white");
  
  appleClock++;
  
  if (appleClock > randomNumber(40,100)) {
    appleClock = 0;
    spawnFruit();
  }
  
  if (keyDown("UP_ARROW")) {
    sprite2.setAnimation("Ninja Attack 1.PNG_1");
  }
  if (keyDown("right")) {
    sprite2.setAnimation("Ninja Run 1.PNG_1");
    sprite2.mirrorX(1);
    sprite2.velocityX = 9;
  }
  if (keyWentUp("right")) {
    sprite2.setAnimation("Ninja Rest 1.PNG_1");
    sprite2.velocityX = 0;
  }
  if (keyDown("left")) {
    sprite2.setAnimation("Ninja Run 1.PNG_1");
    sprite2.mirrorX(-1);
    sprite2.velocityX = -9;
  }
  if (keyWentUp("left")) {
    sprite2.setAnimation("Ninja Rest 1.PNG_1");
    sprite2.velocityX = 0;
  }
  if (keyWentUp("UP_ARROW")) {
    sprite2.setAnimation("Ninja Rest 1.PNG_1");
  }
  
  for (var i = 0; i < fruits.length; i++) {
    if (sprite2.isTouching(fruits[i])) {
      score++;
      fruits[i].visible = false;
      fruits.splice(i, 1);
      playSound( "assets/category_achievements/lighthearted_bonus_objective_2.mp3");
    }
  }
  
  textSize(50);
  drawSprites();
  text(score, 55, 60);
  
}

function spawnFruit() {
  var sprite = createSprite(randomNumber(10,390),50);
  switch (randomNumber(1, 4)) {
    case 1:
      sprite.setAnimation("apple_1");
      sprite.scale =(0.6);
      break;
    case 2:
      sprite.setAnimation("orange_1");
      sprite.scale = (0.2);
      break;
    case 3:
      sprite.setAnimation("sliced_watermelon_1");
      sprite.scale = (0.2);
      break;
    case 4:
      sprite.setAnimation("pear_1");
      sprite.scale = (0.2);
      
      break;
    
  }
  sprite.velocityY = (randomNumber(6,11));
  fruits.push(sprite);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
