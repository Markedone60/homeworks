function parseCount(num) {
    const parsed = Number.parseInt(num);
    
    if (Number.isNaN(parsed)) {
        throw new Error ("Невалидное значение");
    }

    return parsed;
}

function validateCount(num) {
    try {
        return parseCount(num);
    }
    catch(err) {
        return err;
    }
}



class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (((a + b) < c) || ((a + c) < b) || ((b + c) < a)){
            throw new Error ("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter(perimeter) {
        perimeter = this.a + this.b + this.c;
        return perimeter;
    }

    getArea(area) {
        const hPer = 0.5 * (this.a + this.b + this.c);
        area = Math.sqrt(hPer * (hPer - this.a) * (hPer - this.b) * (hPer - this.c));
        return area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    }
    catch {
        return {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}
    