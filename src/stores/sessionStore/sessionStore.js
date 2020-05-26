import { action, decorate, observable } from 'mobx';
import { observerBatching } from "mobx-react";

export class SessionStore {
    isActive = false;

    constructor() {
        this.setIsActive(this.getIsActive());
    }

    getToken() {
        return localStorage.getItem('session-token');
    }

    setToken = (token) => {
        localStorage.setItem("session-token", token);
        this.setIsActive(true);
        localStorage.removeItem("logout");
    }

    sessionKill() {
        localStorage.removeItem("session-token");
        this.setIsActive(false);
        localStorage.setItem("logout", "true");
    }

    setIsActive = (isActive) => {
        this.isActive = isActive;
    }

    getIsActive() {
        if (this.getToken()) {
            return true;
        }
        return false;
    }
}

decorate(SessionStore, {
    isActive: observable,
    setToken: action,
    setIsActive: action
});

const sessionStore = new SessionStore();

observerBatching(sessionStore);

export default sessionStore; 
