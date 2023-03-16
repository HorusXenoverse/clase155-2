AFRAME.registerComponent("hitbox",{
    schema:{
        elementCollider:{type: "string", default: "#ring1"}
    },
    update: function(){
        this.collider(this.data.elementCollider)
    },
    collider: function(elementCollider){
        const elementDesider = document.querySelector(elementCollider)
        elementDesider.addEventListener("collide", (e)=>{
            if (elementCollider.includes("#bird")){
                console.log("Colisionó con bird")
                
            } else if(elementCollider.includes("#ring")){
                console.log("Colisionó con ring")
            }
        })
    }


})
