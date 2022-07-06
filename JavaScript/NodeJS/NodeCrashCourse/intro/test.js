const john = (x) => {
  return () => {
    x++;
    console.log(x);
  };
};

var x = 0;
var bar = john(x);
var bip = john(x);

bar();
bar();
bip();
