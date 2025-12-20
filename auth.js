(function(){
  function logoutAndGoLogin(){
    localStorage.removeItem("falange_ok");
    window.location.href = "index.html";
  }

  const ok = localStorage.getItem("falange_ok") === "1";
  const exp = localStorage.getItem("falange_expiresAt");

  if(!ok || !exp){
    logoutAndGoLogin();
    return;
  }

  const expDate = new Date(exp);
  if(isNaN(expDate.getTime()) || new Date() >= expDate){
    logoutAndGoLogin();
    return;
  }
})();
