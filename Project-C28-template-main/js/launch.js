class launch{
    constructor(bodyA, pointB){
        var options = {
            bodyA :bodyA,
            pointB :pointB,
            stiffness:0.04,
            length:1
        }
        this.launch = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.launch);

    }
    fly(){
        this.launch.bodyA=null;
    }
    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.body.postion;
            var pointB = this.pointB;
            strokeWeight();
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, this.pointB.y);
        }
    }
}