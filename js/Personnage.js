class Personnage{
    constructor(img,vie,s_img_size_width,s_img_size_height,d_img_size_width,d_img_size_height){
        this.img = img;
        this.vie = vie;
        this.s_img_size_width = s_img_size_width;
        this.s_img_size_height = s_img_size_height;
        this.d_img_size_width = d_img_size_width;
        this.d_img_size_height = d_img_size_height;
        this.jump = -4;
        this.gravity = .5;
        this.gravitySpeed;
        this.flight = 0;
        this.speedVitesse = 6.2;
    }

    getImg(){
        return this.img;
    }
    getVie(){
        return this.vie;
    }
    getS_img_size_width(){
        return this.s_img_size_width;
    }
    getS_img_size_height(){
        return this.s_img_size_height;
    }
    getD_img_size_width(){
        return this.d_img_size_width;
    }
    getD_img_size_height(){
        return this.d_img_size_height;
    }
    getJump(){
        return this.jump;
    }
    getGravity(){
      return this.gravity;  
    }
    getGravitySpeed(){
        return this.gravitySpeed;
    }
    getFlight(){
        return this.flight;
    }
    getSpeedVitesse(){
        return this.speedVitesse;
    }
    

    setImg(img){
        this.img = img;
    }
    setVie(vie){
        this.vie = vie;
    }
    setS_img_size_width(s_img_size_width){
        this.s_img_size_width = s_img_size_width ;
    }
    setS_img_size_height(s_img_size_height){
        this.s_img_size_height = s_img_size_height;
    }
    setD_img_size_width(d_img_size_width){
        this.d_img_size_width = d_img_size_width;
    }
    setD_img_size_height(d_img_size_height){
        this.d_img_size_height = d_img_size_height;
    }
    setJump(jump){
        this.jump = jump;
    }
    setGravity(gravity){
        this.gravity = gravity;
    }
    setGravitySpeed(gravityspeed){
        this.gravitySpeed = gravityspeed;
    }
    setFlight(flight){
        this.flight = flight;
    }
    setSpeedVitesse(speedVitesse){
        this.speedVitesse = speedVitesse;
    }
}