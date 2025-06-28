var _tema = localStorage.getItem('tema');


window.onload = function() {    
    if(_tema === null)  // Se é a primeira vez do usuário na página
    {
        localStorage.setItem('tema',window.matchMedia('(prefers-color-scheme: dark)').matches == true ? "escuro":"claro" );
    }

    mostrarTema();
}

function trocarTema() {
    _tema = _tema === "escuro" ? "claro" : "escuro";

    mostrarTema();

    localStorage.setItem('tema', _tema);
}

function mostrarTema(){
    const _temaHome = document.getElementById('temaHome');
    const _temaPesquisa = document.getElementById('temaPesquisa');

    if(_tema === "escuro"){
        if(_temaHome != null) _temaHome.setAttribute('href', 'pretoHome.css');
        if(_temaPesquisa != null) _temaPesquisa.setAttribute('href', 'pretoPesquisa.css');
    }else{
        if(_temaHome != null) _temaHome.setAttribute('href', 'brancoHome.css');
        if(_temaPesquisa != null) _temaPesquisa.setAttribute('href', 'brancoPesquisa.css');
    }
}
