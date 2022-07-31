export const authentication = {

    isLoggedIn: true,

    onAuthentication() {
    
      this.isLoggedIn = true;
      console.log( this.isLoggedIn );
    },

    getLogInStatus() {
      debugger;
      console.log("getLogInStatus");
      return this.isLoggedIn;
    }

  }