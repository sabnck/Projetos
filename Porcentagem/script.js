function calcularPorcentagem() {
    const valor = document.getElementById('valor').value;
    const porcentagem = document.getElementById('porcentagem').value;
  
    const resultado = (valor * porcentagem) / 100;
  
    document.getElementById('resultado').innerHTML = `${resultado}`;
  }
  
  function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'pt', layout: google.translate.TranslateElement.InlineLayout.SIMPLE }, 'google_translate_element');
  }
  
  function translateToEnglish() {
    window.location.href = "index-en.html";
  }
  
  function redirectToPt_Br() {
    window.location.href = "index.html";
  }