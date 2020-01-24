
class Util {

    Redirect(path){
        window.location.href = path
    }

    getUser() {
        return localStorage.getItem('user');
    }

    getToken(){
        return localStorage.getItem('token');
    }

    isAuthenticated(){
        return localStorage.getItem('authenticated');
    }
      
    Logout(e){
        e.preventDefault();
        localStorage.removeItem('user');
        localStorage.removeItem('authenticated');
        localStorage.removeItem('token');
        this.Redirect('/')
    }
}

export default new Util();
