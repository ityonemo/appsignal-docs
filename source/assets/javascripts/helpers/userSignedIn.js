import Cookies from "../js.cookie"

export function userSignedIn() {
  Cookies.get("appsignal_signed_in") == "true"
}
