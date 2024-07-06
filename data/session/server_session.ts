"use server";

export interface ServerSession {
  loggedInWalletAddress: string;
}

class ServerSessionSingleton {
  private static instance: ServerSessionSingleton;
  private loggedInWalletAddress: string;

  private constructor() {
    this.loggedInWalletAddress = '';
  }

  public static getInstance(): ServerSessionSingleton {
    if (!ServerSessionSingleton.instance) {
      ServerSessionSingleton.instance = new ServerSessionSingleton();
    }

    return ServerSessionSingleton.instance;
  }

  public getLoggedInWalletAddress(): string {
    return this.loggedInWalletAddress;
  }

  public setLoggedInWalletAddress(loggedInWalletAddress: string) {
    this.loggedInWalletAddress = loggedInWalletAddress;
  }

  public resetLoggedInWalletAddress() {
    this.loggedInWalletAddress = '';
  }
}

export default ServerSessionSingleton;
