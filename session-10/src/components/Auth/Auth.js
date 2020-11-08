class Auth{
    constructor(){
        this.autehenticated=false;
    }

    login(cb){
        this.autehenticated=true;
        cb();
    }

    logout(cb){
        this.autehenticated=false;
        cb();
    }

    isAuthenticated(cb){
        return this.isAuthenticated;
    }



}

export default new Auth()