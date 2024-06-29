import { createContext, SetStateAction } from 'react';

const UserContext = createContext({ loggedIn: false, setLoggedIn: (value: SetStateAction<boolean>) => {}} );

export { UserContext };
