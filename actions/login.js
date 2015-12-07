export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export function login(idToken) {
    $url = "http://wwwp.cs.unc.edu/Courses/comp426-f15/users/jtbaldwi/Codiad/workspace/cs426/finalProject/login.php";
    $.get($url, {idToken: idToken}); //Send idToken to PHP code
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
