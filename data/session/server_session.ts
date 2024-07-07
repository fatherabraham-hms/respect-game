export interface ServerSession {
  loggedInWalletAddress: string;
}

var SERVER_SESSION = (function() {
  const session = {
    loggedInWalletAddress: ''
  };

  return {
    getLoggedInWalletAddress: function() {
      return session.loggedInWalletAddress;
    },
    setLoggedInWalletAddress: function(loggedInWalletAddress: string) {
      session.loggedInWalletAddress = loggedInWalletAddress;
    },
    resetLoggedInWalletAddress: function() {
      session.loggedInWalletAddress = '';
    }
  };
})();

export default SERVER_SESSION;
