class Star {
    constructor() {
        let x = random(-width/2, width/2);
        let y = random(-height/2, height/2);

        this.r = sqrt(x**2 + y**2);
        this.theta = atan2(y, x);

        this.colors = ["#f4dbd6", "#f0c6c6", "#f5bde6", "#c6a0f6", "#ee99a0"]
    }

    show() {
        stroke(random(this.colors));
        strokeWeight(3);
        let start = this.calculateStart(random(this.r) - 30);
        let end = this.calculateEnd(300);
        line(start.x, start.y, end.x, end.y);
    }

    convertToCartesian(r) {
        return createVector(r * cos(this.theta), r * sin(this.theta));
    }

    calculateStart(desp) {
        return this.convertToCartesian(this.r - desp)
    }

    calculateEnd(desp) {
        return this.convertToCartesian(this.r + desp)
    }
}