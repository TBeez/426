export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export function login(idToken) {
    callPHP(idToken);
  return {
    type: LOG_IN,
    idToken
  }
}

export function logout() {
  return {
    type: LOG_OUT
  }
}
function callPHP(idToken) {
  var httpc = new XMLHttpRequest();
  var url = "http://wwwp.cs.unc.edu/Courses/comp426-f15/users/jtbaldwi/Codiad/workspace/cs426/finalProject/login.php";
  httpc.open("POST", url, true); //send a post request to PHP code
  httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  httpc.setRequestHeader("Content-Length", idToken.length);
  httpc.send(idToken);
}
