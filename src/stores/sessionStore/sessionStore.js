import { action, decorate, observable, reaction } from 'mobx';
import { observerBatching } from "mobx-react";

export class SessionStore {
    isActive = false;

    sessionKillReact = reaction(
        () => this.isActive,
        (active) => {
            if (!active) {
                this.sessionKill();
            }
        }
    );

    constructor() {
        this.setIsActive(this.getIsActive());
    }

    getToken() {
        var name = 'session-token=';
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    setToken = (token) => {
        var d = new Date();
        d.setTime(d.getTime() + (5 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'session-token=' + token + ';SameSite=None;' + expires + ';path=/';
        this.setIsActive(true);
        localStorage.removeItem("logout");
    }

    sessionKill() {
        document.cookie = 'session-token=;expires=Thu, 01 Jan 1970 00:00:01 GMT;';
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
