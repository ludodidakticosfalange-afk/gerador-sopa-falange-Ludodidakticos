(function(){

  /* ====== CONTROLE MANUAL ====== */

  // códigos explicitamente BLOQUEADOS (revogados)
  const BLOQUEADOS = [
    "LUDO-FALANGE-TESTE01",
    "LUDO-FALANGE-CLIENTE-X",
  ];

  function norm(s){
    return String(s||"").trim().toUpperCase().replace(/\s+/g,"");
  }

  function logout(){
    localStorage.clear();
    window.location.href = "index.html";
  }

  /* ====== VERIFICAÇÃO ====== */

  const ok = localStorage.getItem("falange_ok") === "1";
  const codigo = norm(localStorage.getItem("falange_code"));
  const dataStr = localStorage.getItem("falange_activatedAt");
  const dias = Number(localStorage.getItem("falange_days") || 0);

  // não logado
  if(!ok || !codigo || !dataStr || !dias){
    logout(); return;
  }

  // BLOQUEIO MANUAL (prioridade máxima)
  if(BLOQUEADOS.includes(codigo)){
    logout(); return;
  }

  // checagem de validade (opcional, mas útil)
  const inicio = new Date(dataStr + "T00:00:00");
  const fim = new Date(inicio.getTime() + dias*24*60*60*1000);

  if(isNaN(fim.getTime()) || new Date() >= fim){
    logout(); return;
  }

  // se chegou aqui → entra
})();
