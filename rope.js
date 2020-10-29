class rope{
    constructor(bodyA, bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.4,
            length: 250
        }
        this.str = Matter.Constraint.create(options);
        World.add(world, this.str);
    }
    display(){
        var pointA = this.str.bodyA.position
        var pointB = this.str.bodyB.position

        strokeWeight(2);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}