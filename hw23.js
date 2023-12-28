class SuperMath {
    obj = {}
};
superMathInstance = new SuperMath;


SuperMath.prototype.sum = function (a, b) {
    console.log(a + b);
}
SuperMath.prototype.sub = function (a, b) {
    console.log(a - b);
}

SuperMath.prototype.div = function (a, b) {
    if (b == 0) {
        console.log('шоб шо');
    }
    console.log(a / b);
}

SuperMath.prototype.mul = function (a, b) {
    console.log(a * b);
}

SuperMath.prototype.euDiv = function (a, b) {
    console.log(a % b);
}

SuperMath.prototype.input = function () {
    this.obj.X = +prompt('Введіть X: ');
    this.obj.Y = +prompt('Введіть Y: ');
    this.obj.znak = prompt('Введіть znak (можливі варіанти znak=>  `+ - / * %`)');    
}
SuperMath.prototype.check = function (obj, verification) {
    var verification = (verification == undefined) ? confirm(`Хочете зробити математичну дію "${obj.znak}" з ${obj.X} та ${obj.Y}?`) : verification;

    if (verification) {
        switch (obj.znak) {
            case '+':
                this.sum(obj.X, obj.Y);
                break;
            case '-':
                this.sub(obj.X, obj.Y);
                break;
            case '/':
                this.div(obj.X, obj.Y);
                break;
            case '*':
                this.mul(obj.X, obj.Y);
                break;
            case '%':
                this.euDiv(obj.X, obj.Y);
                break;
            default:
                console.log(`"${obj.znak}" - неправильна математична дія`)
        }
    } else {
        this.input();
        this.check(this.obj);
    }
}

obj = { X: 12, Y: 3, znak: '/' }
superMathInstance.check(obj)