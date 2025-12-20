(function(){
  function logout(){
    localStorage.removeItem("falange_ok");
    localStorage.removeItem("falange_activatedAt");
    localStorage.removeItem("falange_days");
    localStorage.removeItem("falange_expiresAt");
    window.location.href = "index.html";
  }

  const ok = localStorage.getItem("falange_ok") === "1";
  const dataStr = localStorage.getItem("falange_activatedAt");
  const dias = Number(localStorage.getItem("falange_days") || 0);

  // não logado
  if (!ok || !dataStr || !dias){
    logout();
    return;
  }

  const inicio = new Date(dataStr + "T00:00:00");
  const fim = new Date(inicio.getTime() + dias * 24 * 60 * 60 * 1000);

  // data inválida ou expirada
  if (isNaN(fim.getTime()) || new Date() >= fim){
    logout();
    return;
  }

  // se chegou aqui → cliente válido
})();
