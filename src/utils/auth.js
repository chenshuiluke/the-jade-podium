import { action } from 'alfa';

function logoutAction ({logged_in}){
    console.log("lol");
    return {
        logged_in: false
    }
}

export const logout = action(logoutAction, ['logged_in'], 'logged_in')