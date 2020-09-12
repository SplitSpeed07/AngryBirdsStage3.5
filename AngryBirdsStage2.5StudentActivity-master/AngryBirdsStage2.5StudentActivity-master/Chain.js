class Chain {
    constructor (bodyA, pointB) {
        var options = {
            length : 10,
            stiffness : 0.04,
            bodyA : bodyA,
            pointB : pointB
        }
        this.pointB = pointB
        this.body = Constraint.create (options);
        World.add(world, this.body);
    }

    fly(){
        this.body.bodyA = null
    }
    display(){
        if (this.body.bodyA){
            var PointA = this.body.bodyA.position;
            var PointB = this.pointB
            strokeWeight(5)
            line(PointA.x, PointA.y, PointB.x, PointB.y);
        }
       
    }
}