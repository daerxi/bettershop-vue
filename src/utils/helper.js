import firebase from "firebase";
import UsersService from "@/api/UsersService";
import { saveAuth } from "@/utils/validation";

export const openAlert = (it, type, message) => {
    it.alertOpen = true
    it.type = type
    it.message = message
}

export const isNullOrEmpty = (element) => {
    return !element || element.trim() === ''
}

export const avoidDuplicatedNavigation = (e) => {
    if (e.name !== "NavigationDuplicated") {
        console.error(e)
    }
}

export function googleSignIn(it) {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
        .auth()
        .signInWithPopup(provider)
        .then(async (result) => {
            let token = result.credential.accessToken
            let user = result.user
            if (token) {
                console.log(user)
                await UsersService.loginUser2(user.za).then(res => {
                    it.userToken = res.data
                    saveAuth(it.userToken)
                    googleSignOut()
                    return res.data
                }).catch(e => openAlert(it, "error", e.response.data.error))
            } else {
                openAlert(it, "error", "Sign in failed.")
            }
        })
        .catch((err) => {
            openAlert(it, "error", err.toString())
        });
}

function googleSignOut() {
    firebase
        .auth()
        .signOut().then()
}