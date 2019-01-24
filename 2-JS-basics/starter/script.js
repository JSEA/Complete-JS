//continue statement
var julius = ['Julius', 'Sea', 1979, 'consultant'];
var i = 0;

for (i; i < 5; i++) {
    if (typeof julius[i] !== 'string') break;
    console.log(julius[i]);
};

for (i = julius.length - 1; i >= 0; i--) {
    console.log(julius[i]);
};
