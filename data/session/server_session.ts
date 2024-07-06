"use server";

export interface ServerSession {
  loggedInWalletAddress: string;
}

const storage = {
  serverSession: {
    loggedInWalletAddress: '',
  }
}; // this does not persist between backend calls - need to figure out how to make persistent

export async function getServerSession(): Promise<ServerSession> {
  return storage.serverSession;
}

export async function setServerSession(session: ServerSession) {
  return storage.serverSession = session;
}

export async function resetServerSession() {
  storage.serverSession = {
    loggedInWalletAddress: '',
  }
}

