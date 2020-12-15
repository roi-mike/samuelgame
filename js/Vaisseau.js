class Vaisseau{
    constructor(img,s_img_size_width,s_img_size_height,d_img_size_width,d_img_size_height){
        this.img = img;
        this.s_img_size_width = s_img_size_width;
        this.s_img_size_height = s_img_size_height;
        this.d_img_size_width = d_img_size_width;
        this.d_img_size_height = d_img_size_height;
        this.deplacementX = 0;
        this.deplacementY = 0;
        this.gravitySpeed;
        this.flight = 0;
        this.speedVitesse = 10;
    }

    getImg(){
        return this.img;
    }
    sWidth(){
        return this.s_img_size_width;
    }
    sHeight(){
        return this.s_img_size_height;
    }
    dWidth(){
        return this.d_img_size_width;
    }
    dHeight(){
        return this.d_img_size_height;
    }
    dX(){
        return this.deplacementX;
    }
    dY(){
        return this.deplacementY;
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
    setsHeight(s_img_size_height){
        this.s_img_size_height = s_img_size_height;
    }
    setsWidth(s_img_size_height){
        this.s_img_size_height = s_img_size_height;
    }
    setdheight(d_img_size_width){
        this.d_img_size_width = d_img_size_width;
    }
    setdWidth(d_img_size_width){
        this.d_img_size_width = d_img_size_width;
    }
    setdX(dx){
        this.deplacementX = dx;
    }
    setdY(dy){
        this.deplacementY = dy;
    }
    setFlight(flight){
        this.flight = flight;
    }
    setSpeedVitesse(speedVitesse){
        this.speedVitesse = speedVitesse;
    }
}