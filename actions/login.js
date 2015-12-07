export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export function login(idToken) {
  return {
    type: LOG_IN,
    idToken
    
    window.location.href = 
      "http://wwwp.cs.unc.edu/Courses/comp426-f15/users/jtbaldwi/Codiad/workspace/cs426/finalProject/login.php?idToken=" + idToken;
  }
}

export function logout() {
  return {
    type: LOG_OUT
  }
}
