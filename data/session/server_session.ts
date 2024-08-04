"use server";

export interface ServerSession {
  loggedInWalletAddress: string;
}

// https://stackoverflow.com/questions/2613310/ive-heard-global-variables-are-bad-what-alternative-solution-should-i-use
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

export async function getLoggedInWalletAddress() {
  return SERVER_SESSION.getLoggedInWalletAddress();
}

export async function setLoggedInWalletAddress(loggedInWalletAddress: string) {
  return SERVER_SESSION.setLoggedInWalletAddress(loggedInWalletAddress);
}

export async function resetLoggedInWalletAddress() {
  return SERVER_SESSION.resetLoggedInWalletAddress();
}
