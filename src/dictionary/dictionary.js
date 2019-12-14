var dictionary = [
    ["break", "rupture"],
    ["break", "ruptureanal"],
    ["case", "boite"],
    ["case", "boitier"],
    ["catch", "attraper"],
    ["catch", "johncena"],
    ["catch", "rattraperlesmoisdetravails"],
    ["continue", "continuer"],
    ["debugger", "debuguer"],
    ["delete", "supprimer"],
    ["delete", "faireuneyann"],
    ["delete", "8moisalacorbeille"],
    ["do", "effectuer"],
    ["else", "sinon"],
    ["finally", "alafin"],
    ["for", "pour"],
    ["function", "fonction"],
    ["function", "esclave"],
    ["function*", "grostasreutilisable"],
    ["if", "si"],
    ["in", "dans"],
    ["in", "dtc"],
    ["default", "defaut"],
    ["default", "alabase"],
    ["default", "labase"],
    ["instanceof", "instancede"],
    ["new", "nouveau"],
    ["new", "nouvelle"],
    ["return", "retourne"],
    ["yield", "rendement"],
    ["yield*", "rendement*"],
    ["switch", "nintendoswitch"],
    ["this", "ceci"],
    ["throw", "jeter"],
    ["try", "essayer"],
    ["try", "essayerceputaindecode"],
    ["try", "bipboupbipboup"],
    ["typeof", "typede"],
    ["var", "variable"],
    ["let", "laisser"],
    ["void", "neant"],
    ["while", "tandisque"],
    ["with", "avec"],
    ["Abstract", "Abstrait"],
    ["abstract", "abstrait"],
    ["Boolean", "Booleen"],
    ["boolean", "booleen"],
    ["Byte", "Octet"],
    ["byte", "octet"],
    ["Char", "caractere"],
    ["char", "unelettre"],
    ["char", "femmedemenage"],
    ["char", "charbonner"],
    ["char", "carboniser"],
    ["char", "bruler"],
    ["class", "classe"],
    ["class", "classe"],
    ["Const", "Constant"],
    ["Const", "Constante"],
    ["const", "constant"],
    ["const", "constante"],
    ["Double", "Double"],
    ["double", "double"],
    ["Enum", "Enumeration"],
    ["enum", "enumeration"],
    ["extends", "etendre"],
    ["final", "final"],
    ["final", "dernier"],
    ["final", "finale"],
    ["Float", "Nombreavirgule"],
    ["float", "nombreavirgule"],
    ["goto", "allervers"],
    ["implements", "implementer"],
    ["import", "importer"],
    ["Int", "Nombreentier"],
    ["int", "nombreentier"],
    ["interface", "interface"],
    ["interface", "jonction"],
    ["Long", "Longue"],
    ["Long", "Long"],
    ["long", "long"],
    ["long", "longue"],
    ["native", "natif"],
    ["package", "paquet"],
    ["package", "encoreunpaquet"],
    ["private", "prive"],
    ["protected", "proteger"],
    ["public", "public"],
    ["Short", "Court"],
    ["short", "court"],
    ["static", "statique"],
    ["super", "parentde"],
    ["synchronized", "synchroniser"],
    ["throws", "jeterles"],
    ["transient", "transient"],
    ["volatile", "volatile"],
    ["volatile", "pigeon"],
    ["volatile", "ceuxquisepayentunmac"],
    ["null", "nulle"],
    ["null", "nul"],
    ["null", "invalide"],
    ["NaN", "PaN"],
    ["NaN", "PasUnNombre"],
    ["undefined", "indefini"],
    ["true", "vraimentvrai"],
    ["true", "putaindevrai"],
    ["true", "vrai"],
    ["true", "vrai"],
    ["false", "vraimentfaux"],
    ["false", "putaindefaux"],
    ["false", "faux"],
    ["false", "faux"],
    ["false", "faux"],
    ["eval", "evaluation"],
    ["'use strict'", "utilise strictement"]
    // Debut des caracteres speciaux
    ,
    ["{", "ouvrir"],
    ["{", "faire"],
    ["{", "vasYOuvreTaGueule"],
    ["}", "fermer"],
    ["}", "vasYFermeTaGueule"],
    ["==", "faibleegalite"],
    ["==", "doubleegal"],
    ["==", "egalabstrait"],
    ["==", "ilsboiventduspritesamere"],
    ["==", "deuxegal"],
    ["===", "strictementegal"],
    ["===", "tripleegal"],
    ["===", "egalitestricte"],
    ["===", "identite"],
    ["===", "estsombrementegal"],
    [">=", "superieurouegal"],
    ["<=", "inferieurouegal"],
    ["&&", "et"],
    ["||", "ou"],
    [">", "superieur"],
    ["<", "inferieur"],
    ["<", "inferieur"],
    ["=", "egal"],
    ["=", "vraimentegal"],
    [";", " fin"],
    ["!", "nestpas"],
    ["++", "rajouter1"],
    ["++", "incrementer"],
    ["--", "enlever1"],
    ["--", "decrementer"],
    ["//", "jsuisUnFantomeQuiDevraitServirDeCommentaireNormalement#"],
    ["//", "jsuisUnFantome#"],
    [".", "->"]
    //    Document methods
    ,
    ["document", "document"],
    ["captureEvents", "captureEvenements"],
    ["createAttribute", "creerAttribut"],
    ["createDocumentFragment", "creerFragmentDeDocument"],
    ["createEvent", "creerEvenement"],
    ["createNodeIterator", "CreerNodeIterateur"],
    ["createRange", "creerRanger"],
    ["createTextNode", "creerTexteNode"],
    ["createTouch", "creerTouche"],
    ["createElement", "creerElement"],
    ["createTreeWalker", "creerArbreQuiMarche"],
    ["elementFromPoint", "elementAPartirDePoint"],
    ["elementsFromPoint", "elementsAPartirDePoint"],
    ["enableStyleSheetsForSet", "activerFeuilleDeStylePourLensemble"],
    ["getAnimations", "avoirAnimations"],
    ["getElementsByClassName", "obtenirElementsParNomDeClasse"],
    ["getElementsByTagName", "obtenirElementsParNomDeTag"],
    ["importNode", "importerNode"],
    ["registerElement", "enregistrerElement"],
    ["releaseCapture", "sortieCapture"],
    ["getElementById", "obtenirElementParId"],
    ["querySelector", "demanderSelecteur"],
    ["querySelector", "requeteSelecteur"],
    ["querySelectorAll", "demanderSelectionneTout"],
    ["querySelectorAll", "requeteSelectionneTout"],
    ["createExpression", "creerExpression"],
    ["evaluate", "evaluer"],
    ["clear", "nettoyer"],
    ["close", "fermer"],
    ["execCommand", "executerCommande"],
    ["getElementsByName", "obtenirElementsParLesNoms"],
    ["getSelection", "obtenirSelection"],
    ["hasFocus", "aUnFocus"],
    ["open", "lire"],
    ["queryCommandEnabled", "demanderCommandeActivee"],
    ["queryCommandEnabled", "requeteCommandeActivee"],
    ["queryCommandState", "demanderEtatDeCommande"],
    ["queryCommandState", "requeteEtatDeCommande"],
    ["queryCommandSupported", "demanderCommandeSupportee"],
    ["queryCommandSupported", "requeteCommandeSupportee"],
    ["queryCommandIndeterm", "demanderCommandeIndeterminee"],
    ["queryCommandIndeterm", "requeteCommandeIndeterminee"],
    ["queryCommandValue", "demanderValeurDeLaDemande"],
    ["queryCommandValue", "requeteValeurDeLaDemande"],
    ["write", "ecrire"],
    ["writeln", "ecrireAvecSautDeLigne"]
    //    Document Properties
    ,
    ["characterSet", "mettreCaractere"],
    ["charset", "charset"],
    ["charset", "encodage"],
    ["contentType", "typeDeContenu"],
    ["doctype", "doctype"],
    ["documentElement", "elementDocument"],
    ["documentURI", "documentURI"],
    ["domConfig", "domConfig"],
    ["domConfig", "dominationConfig"],
    ["domConfig", "configurationDom"],
    ["hidden", "cacher"],
    ["inputEncoding", "mettreEncodage"],
    ["pointerLockElement", "pointeurVerouillerElement"],
    ["scrollingElement", "elementDefilant"],
    ["timeline", "chronologie"],
    ["visibilityState", "etatVisible"],
    ["children", "enfant"],
    ["children", "gosse"],
    ["children", "humainCasseCouille"],
    ["firstElementChild", "premierElementDeLEnfant"],
    ["firstElementChild", "premierElementDuGosse"],
    ["firstElementChild", "premierElementDuMorveux"],
    ["lastElementChild", "dernierElementDeLEnfant"],
    ["lastElementChild", "dernierElementDuGosse"],
    ["lastElementChild", "dernierElementDuMorveux"],
    ["childElementCount", "nombreDElementDeLEnfant"],
    ["childElementCount", "nombreDElementDuGosse"],
    ["childElementCount", "nombreDElementDuMorveux"],
    ["activeElement", "elementActif"],
    ["alinkColor", "aLienCouleur"],
    ["anchors", "ancre"],
    ["anchors", "ancres"],
    ["bgColor", "bgCouleur"],
    ["body", "corps"],
    ["cookie", "cookies"],
    ["defaultView", "VueParDefaut"],
    ["designMode", "ModeDesign"],
    ["dir", "dire"],
    ["domain", "domaine"],
    ["embeds", "embeds"],
    ["forms", "formes"],
    ["head", "tete"],
    ["height", "longueur"],
    ["images", "images"],
    ["lastModified", "derniereModification"],
    ["linkColor", "lienCouleur"],
    ["links", "liens"],
    ["location", "location"],
    ["plugins", "plugins"],
    ["readyState", "etatPret"],
    ["referrer", "referent"],
    ["scripts", "scripts"],
    ["title", "titre"],
    ["URL", "URL"],
    ["vlinkColor", "vlinkCouleur"],
    ["width", "largeur"],
    ["value", "valeur"]
    //    Document event handlers
    // Grosse possibilite de fautes a chaque "on" de cette section
    ,
    ["onafterscriptexecute", "quandapresexecutiondunscript"],
    ["onbeforescriptexecute", "quandavantexecutiondunscript"],
    ["oncopy", "quandcopier"],
    ["oncut", "quandcouper"],
    ["onpaste", "quandcoller"],
    ["onselectionchange", "quanduneselectionchange"],
    ["onfullscreenchange", "quandunpleineecranchange"],
    ["onwheel", "quandtourner"]
    //    Global event handlers
    ,
    ["onabort", "quandabandon"],
    ["onblur", "quandestomper"],
    ["onerror", "quanderreur"],
    ["onfocus", "quandfocus"],
    ["oncancel", "quandarret"],
    ["onchange", "quandchanger"],
    ["onclick", "quandcliquer"],
    ["onclose", "quandfermer"],
    ["oncontextmenu", "quandmenuducontexte"],
    ["oncontextmenu", "quandcontextedumenu"],
    ["ondblclick", "quandblclique"]
    // drag ?
    ,
    ["ondrag", "quandtendre"],
    ["ondrag", "quandtrainer"],
    ["ondragend", "quandfaireglisser"],
    ["ondragenter", "quanddragenter"],
    ["ondragexit", "quanddragexit"],
    ["ondragleave", "quanddragquitte"],
    ["ondragover", "quandplusdedrag"],
    ["ondragstart", "quanddragcommence"]
    // drag fini, il faudra tout corriger
    // Possiblement corriger tout les drop, key et mouse
    ,
    ["ondrop", "quand"],
    ["ondrop", "quandlacher"],
    ["oninput", "quandmettre"],
    ["oninvalid", "quandinvalide"],
    ["onkeydown", "quandtouchebas"],
    ["onkeypress", "quandtouchepressee"],
    ["onkeyup", "quandtouchehaute"],
    ["onloadstart", "quandchargementcommence"]
    // Debut mouse option
    ,
    ["onmousedown", "quandsourisbasse"],
    ["onmouseenter", "quandsourisentre"],
    ["onmouseleave", "quandsourisquitte"],
    ["onmousemove", "quandsourisbouge"],
    ["onmouseout", "quandsourishorsjeu"],
    ["onmouseover", "quandplusdesouris"],
    ["onmouseup", "вынулНаРайоне"],
    ["onmousewheel", "quandsouristourne"]
    // fin mouse
    ,
    ["onpause", "quandpose"],
    ["onplay", "quandjoue"],
    ["onplaying", "quandjouer"],
    ["onpointerdown", "quandpointeurbas"],
    ["onpointermove", "quandpointeurbouge"],
    ["onpointerup", "quandpointeurmonte"],
    ["onpointercancel", "quandpointeurabandonne"],
    ["onpointerover", "quandplusdepointeur"],
    ["onpointerout", "quandpointeurhorsjeu"],
    ["onpointerenter", "quandpointeurentre"],
    ["onpointerleave", "quandpointeurquitte"],
    ["onprogress", "quandprogresse"],
    ["onreset", "quandreset"],
    ["onscroll", "quandglissement"],
    ["onseeked", "quandcherche"],
    ["onseeking", "quandchercher"],
    ["onselect", "quandselecter"],
    ["onshow", "quandmontrer"],
    ["onsort", "quandtrier"],
    ["onstalled", "quandestaupointmort"],
    ["onsubmit", "quandsoumettre"],
    ["onsuspend", "quandsuspendre"],
    ["ontimeupdate", "quandmajdutemps"],
    ["onvolumechange", "quandvolumechange"],
    ["ontouchcancel", "quandtouchestoppee"],
    ["ontouchend", "quandtouchefinie"],
    ["ontouchmove", "quandtouchebouge"],
    ["ontouchstart", "quandtouchecommence"],
    ["onwaiting", "quandilattend"]
    // fin des "on", il faudra modif OBLIGATOIREMENT 
    //    Window properties
    ,
    ["window", "fenetre"],
    ["closed", "fermee"],
    ["console", "console"],
    ["controllers", "controlleurs"],
    ["crypto", "crypto"],
    ["devicePixelRatio", "ratioDesPixelsDuDispositif"],
    ["dialogArguments", "argumentsDuDialogue"],
    ["frameElement", "elementDeCadre"],
    ["frames", "cadres"],
    ["fullScreen", "ecranPlein"],
    ["fullScreen", "pleinEcran"],
    ["history", "history"],
    ["history", "historique"],
    ["innerHeight", "hauteurInterne"],
    ["innerWidth", "longueurInterne"],
    ["length", "entendue"],
    ["location", "location"],
    ["name", "nom"],
    ["navigator", "navigateur"],
    ["opener", "ouvreur"],
    ["outerHeight", "hauteurExterieure"],
    ["outerWidth", "longueurExterieure"],
    ["pageXOffset", "pageXOffset"],
    ["pageYOffset", "pageXCompenser"],
    ["sessionStorage", "sessionStocker"],
    ["parent", "parent"],
    ["parent", "daron"],
    ["parent", "daronne"],
    ["returnValue", "retourneLaValeur"],
    ["performance", "performance"],
    ["performance", "perf"],
    ["screen", "ecran"],
    ["screenX", "ecranX"],
    ["screenX", "ecranDeCul"],
    ["screenY", "ecranY"],
    ["screenY", "ecranEnY"],
    ["scrollbars", "barreDeScroll"],
    ["scrollMaxX", "scrollMaxX"],
    ["scrollMaxY", "scrollMaxY"],
    ["scrollX", "scrollX"],
    ["scrollY", "scrollY"],
    ["self", "soi-meme"],
    ["sidebar", "barrelaterale"],
    ["top", "top10"]
    //    Window methods
    ,
    ["addEventListener", "ajouterEvenementEcouteur"],
    ["alert", "alert"],
    ["blur", "estomper"],
    ["cancelIdleCallback", "arreterDeRappelerIdle"],
    ["clearInterval", "effacerInterval"],
    ["clearTimeout", "effacerTempsMort"],
    ["confirm", "confirme"],
    ["dispatchEvent", "DispatcheEvenement"],
    ["dump", "ejecter"],
    ["find", "trouver"],
    ["focus", "focus"],
    ["getAttention", "obtenirAttention"],
    ["getComputedStyle", "obtenirUnStyleCalcule"],
    ["matchMedia", "correspondreLesMedias"],
    ["maximize", "maximise"],
    ["minimize", "minimise"],
    ["moveBy", "bougerPar"],
    ["moveTo", "bougerVers"],
    ["openDialog", "ouvrirDialogue"],
    ["postMessage", "posterMessage"],
    ["print", "imprimer"],
    ["prompt", "pousser"],
    ["removeEventListener", "enleverEvenementEcouteur"],
    ["resizeBy", "redimensionnerPar"],
    ["resizeTo", "redimensionnerVers"],
    ["scroll", "defile"],
    ["scrollBy", "defilerPar"],
    ["scrollByLines", "defilerParLignes"],
    ["scrollByPages", "defilerParPages"],
    ["scrollTo", "defilerVers"],
    ["setInterval", "mettreInterval"],
    ["setResizable", "mettreRedimensionnable"],
    ["setTimeout", "mettreTempsMort"],
    ["sizeToContent", "taillePourLeContenu"],
    ["sizeToContent", "tailleDuContenu"],
    ["stop", "stop"],
    ["stop", "arretetoinarvalo"],
    ["stop", "arreter"],
    ["Promise", "promesse"],
    ["updateCommands", "commandesMisesAJour"],
    ["updateCommands", "laBaseViraleVPSAEteMiseAJour"]
    //    Window event handlers
    ,
    ["onbeforeunload", "onbeforeunload"],
    ["ondevicelight", "ondevicelight"],
    ["onhashchange", "onhashchange"],
    ["oninstall", "oninstall"],
    ["onload", "onload"],
    ["onoffline", "onoffline"],
    ["ononline", "ononline"],
    ["onpagehide", "onpagehide"],
    ["onpageshow", "onpageshow"],
    ["onpaint", "onpaint"],
    ["onpopstate", "onpopstate"],
    ["onstorage", "onstorage"],
    ["onunload", "onunload"]
    //    Node properties
    ,
    ["baseURI", "baseURI"],
    ["baseURIObject", "baseURIObjet"],
    ["childNodes", "enfantNodes"],
    ["firstChild", "premierEnfant"],
    ["firstChild", "premiereErreurDeLaNature"],
    ["lastChild", "dernierEnfant"],
    ["nextSibling", "frereSuivant"],
    ["nodeName", "nomDeNode"],
    ["nodeType", "typeDeNode"],
    ["nodeValue", "valeurDeNode"],
    ["ownerDocument", "proprietaireDuDocument"],
    ["parentNode", "parentDeNode"],
    ["parentElement", "elementDeParent"],
    ["previousSibling", "frerePrecedent"],
    ["textContent", "contenuDuTexte"]
    //    Node methods
    ,
    ["appendChild", "ajouterUnEnfant"],
    ["appendChild", "uneErreurDePlus"],
    ["appendChild", "agrandirLaFamille"],
    ["cloneNode", "clonerNode"],
    ["compareDocumentPosition", "comparerDocumentPosition"],
    ["contains", "contient"],
    ["getRootNode", "obtenirLeModeRoot"],
    ["hasChildNodes", "aDesEnfantsDeNodes"],
    ["insertBefore", "insererAvant"],
    ["isDefaultNamespace", "estLEspaceDeNomsParDefaut"],
    ["isDefaultNamespace", "niqueZebiCTropLong"],
    ["isEqualNode", "estEgalANode"],
    ["normalize", "normaliser"],
    ["removeChild", "enleverLEnfant"],
    ["removeChild", "abandonnerVotreEnfant"],
    ["removeChild", "envoyerVotreEnfantALOrphelinat"],
    ["replaceChild", "remplacerLEnfant"],
    ["repplaceChild", "tesOrphelinsMonRhey"]
    //    String properties
    ,
    ["prototype", "prototype"]
    //    String methods
    ,
    ["fromCharCode", "depuisLeCharCode"],
    ["fromCharCode", "DepuisLeCarCode"],
    ["fromCodePoint", "depuisLeCodeDePoint"],
    ["raw", "brut"],
    ["raw", "brute"],
    ["charAt", "charA"],
    ["charAt", "caractereA"],
    ["charCodeAt", "leCodeCharA"],
    ["charCodeAt", "leCaractereCodeA"],
    ["codePointAt", "leCodePointA"],
    ["concat", "reduire"],
    ["includes", "inclure"],
    ["endsWith", "finirAvec"],
    ["indexOf", "indexDe"],
    ["indexOf", "majeurDe"],
    ["lastIndexOf", "dernierIndexDe"],
    ["lastIndexOf", "dernierMajeurDe"],
    ["localeCompare", "comparerLocalement"],
    ["match", "meeticMatch"],
    ["padEnd", "padFin"],
    ["padStart", "padCommence"],
    ["repeat", "repeter"],
    ["replace", "remplacer"],
    ["search", "chercher"],
    ["slice", "couper"],
    ["split", "exploser"],
    ["split", "dynamiter"],
    ["startsWith", "commencerAvec"],
    ["substr", "substr"],
    ["substring", "substring"],
    ["toLocaleLowerCase", "versLocalePetitCaractere"],
    ["toLocaleUpperCase", "versLocaleGrandCaractere"],
    ["toLowerCase", "versPetiteCase"],
    ["toLowerCase", "versPetitCaractere"],
    ["toString", "versCulotte"],
    ["toString", "versString"],
    ["toUpperCase", "versGrandCaractere"],
    ["trim", "reduire"],
    ["trim", "PasDeBlancs"]
    // != @MarineLePen
    // = [Staline]
    ,
    ["trimLeft", "reduireAGauche"],
    ["trimRight", "reduireADroite"],
    ["valueOf", "valeurDe"]
    //    String HTML wrapper methods
    ,
    ["anchor", "anchois"],
    ["anchor", "ancrer"],
    ["big", "gros"],
    ["big", "americainsAuFastFood"],
    ["big", "leNombreDeVictimeJuives"],
    ["bold", "gras"],
    ["bold", "mateTonVentreFrerot"],
    ["fixed", "fixer"],
    ["fontcolor", "couleurDeFonds"],
    ["fontsize", "tailleDuFond"],
    ["italics", "italique"],
    ["italics", "consommateurDePizza"],
    ["link", "lien"],
    ["small", "petit"],
    ["small", "microPenis"],
    ["strike", "booling"]
    //    Canvas properties
    ,
    ["currentTransform", "transformationActuelle"],
    ["direction", "direction"],
    ["filter", "filtrer"],
    ["font", "fond"],
    ["fillStyle", "remplirTonCharisme"],
    ["globalAlpha", "alphaGlobal"],
    ["imageSmoothingEnabled", "imageSmoothActif"],
    ["lineCap", "ligneCap"],
    ["lineDashOffset", "ligneDashOffset"],
    ["lineJoin", "ligneRejoint"],
    ["lineWidth", "ligneTaille"],
    ["miterLimit", "miterLimit"],
    ["shadowBlur", "estomperOmbre"],
    ["shadowColor", "couleurOmbre"],
    ["shadowOffsetX", "ombreOffsetX"],
    ["shadowOffsetY", "ombreOffsetY"],
    ["strokeStyle", "accidentVasculaireCerebrale"],
    ["strokeStyle", "avc"],
    ["strokeStyle", "barrerLeStyle"],
    ["textAlign", "texteAligner"],
    ["textBaseline", "texteSurLaBaseDeLaLigne"]
    //    Canvas methods 
    ,
    ["addHitRegion", "ajouterUneRegionABombarder"],
    ["getContext", "obtenirContexte"],
    ["arc", "arc"],
    ["arcTo", "arcVers"],
    ["bezierCurveTo", "bezierCourberVers"],
    ["clearHitRegions", "effacerLesRegionsBombardees"],
    ["clearRect", "effacerRect"],
    ["clip", "clip"],
    ["closePath", "fermerChemin"],
    ["closePath", "fermerLaCave"],
    ["createImageData", "creerLaDataDUneImage"],
    ["createLinearGradient", "creerUnePenteLineaire"],
    ["createPattern", "creerUnPaterne"],
    ["createRadialGradient", "creerUnePenteRadiale"],
    ["ellipse", "ellipse"],
    ["fill", "remplir"],
    ["fill", "remplirTaFemme"],
    ["fill", "jveuxPecho"],
    ["fillRect", "remplirRect"],
    ["fillText", "remplirTexte"],
    ["getImageData", "obtenirLaDataDeLImage"],
    ["getImageData", "obtenirDataImage"],
    ["getLineDash", "obtenirLaDashDeLaLigne"],
    ["getLineDash", "obtenirDashLigne"],
    ["isPointInPath", "estAuPointDansLeChemin"],
    ["isPointInPath", "jeDisLaMemeChoseAMesEsclaves"],
    ["isPointInStroke", "estAuPointDansLAVC"],
    ["isPointInStroke", "estAuPointDansLAccidentVasculaireCerebrale"],
    ["lineTo", "ligneVers"],
    ["measureText", "mesureTexte"],
    ["moveTo", "deplacerVers"],
    ["putImageData", "mettreImageData"],
    ["putImageData", "mettreLaDataDeLImage"],
    ["quadraticCurveTo", "quadratiqueCourberVers"],
    ["quadraticCurveTo", "wallahCestQuoiCeMot"],
    ["rect", "rect"],
    ["removeHitRegion", "enleverLaRegionBombardee"],
    ["resetTransform", "reinitialiserLaTransformation"],
    ["resetTransform", "gokuFormeNormale"],
    ["restore", "restorer"],
    ["rotate", "tourner"],
    ["save", "sauvegarder"],
    ["save", "retiensEsclave"],
    ["scale", "echelle"],
    ["scale", "ecarterTonTrouDuCul"],
    ["scale", "teLaMettreA"],
    ["scrollPathIntoView", "defilerLeCheminDansVue"],
    ["setLineDash", "mettreLaDashDeLaLigne"],
    ["setTransform", "mettreLaTranformation"],
    ["setTransform", "choisirTonGoku"],
    ["stroke", "avc"],
    ["strokeText", "texteAVC"],
    ["strokeText", "texteDAccidentVasculaireCerebrale"],
    ["transform", "transforme"],
    ["translate", "traduire"]
    //    Number properties
    ,
    ["EPSILON", "EPSILON"],
    ["MAX_SAFE_INTEGER", "MAX_SANS_DANGER_ENTIER"],
    ["MAX_VALUE", "VALEUR_MAX"],
    ["MIN_SAFE_INTEGER", "MIN_SANS_DANGER_ENTIER"],
    ["MIN_SAFE_INTEGER", "MINIMUM_SANS_DANGER_ENTIER"],
    ["MIN_VALUE", "VALEUR_MIN"],
    ["MIN_VALUE", "VALEUR_MINIMUM"],
    ["NEGATIVE_INFINITY", "INFINI_NEGATIF"],
    ["POSITIVE_INFINITY", "INFINI_POSITIF"]
    //    Number methods
    ,
    ["isFinite", "estFini"],
    ["isInteger", "estEntier"],
    ["isNaN", "estPasDeNombres"],
    ["isSafeInteger", "estUnEntierSansDanger"],
    ["parseFloat", "analyserLeNombreAVirgule"],
    ["parseInt", "analyserLeNombreEntier"],
    ["toExponential", "versExponentiel"],
    ["toFixed", "versFixe"],
    ["toLocaleString", "versLocaleString"],
    ["toPrecision", "versPrecision"],
    ["toPrecision", "versLeTrou"]
    //    Console methods
    ,
    ["assert", "affirmer"],
    ["count", "compter"],
    ["count", "compterLesEsclavesDansMaCave"],
    ["dirxml", "dirxml"],
    ["error", "erreur"],
    ["error", "yannEtSes8MoisDeTravail"],
    ["group", "groupe"],
    ["groupCollapsed", "groupeEcrouler"],
    ["groupEnd", "groupeFin"],
    ["info", "info"],
    ["log", "log"],
    ["log", "balance"],
    ["profile", "profil"],
    ["profileEnd", "profilFini"],
    ["table", "table"],
    ["time", "temps"],
    ["timeEnd", "tempsFini"],
    ["timeStamp", "temps"],
    ["trace", "trace"],
    ["warn", "alerter"],
    ["warn", "avertir"]
    //    XMLHttpRequest properties
    ,
    ["XMLHttpRequest", "requeteXMLHttp"],
    ["onreadystatechange", "surpretetatchanger"],
    ["readyState", "etatPret"],
    ["timeout", "tempsMort"],
    ["upload", "telecharger"],
    ["withCredentials", "avecCertificats"]
    //    XMLHttpRequest methods
    ,
    ["abort", "abandonner"],
    ["abort", "avorterDeSesGosses"],
    ["getResponseHeader", "obtenirLaReponseDEnTete"],
    ["send", "envoyer"],
    ["send", "sendNudes"]
    //    XMLHttpRequest Inheritance
    ,
    ["XMLHttpRequestEventTarget", "requeteEvenementDeCibleXMLHttp"],
    ["EventTarget", "EvenementDeCible"]
    //    XMLHttpRequest events
    ,
    ["loadstart", "chargementdemarrer"],
    ["progress", "progres"],
    ["progress", "progression"],
    ["progress", "progression"],
    ["load", "chargement"],
    ["loadend", "chargementFini"],
    ["readystatechange", "chagementdetatpret"]
    //    Arrays properties
    ,
    ["Array", "GangBang"]
    //    Arrays methods 
    ,
    ["from", "aPartirDe"],
    ["isArray", "estUnGangBang"],
    ["of", "de"],
    ["copyWithin", "copierDans"],
    ["entries", "entrees"],
    ["every", "tout"],
    ["findIndex", "trouverIndex"],
    ["forEach", "pourChaqueJuif"],
    ["join", "rejoint"],
    ["keys", "cles"],
    ["map", "map"],
    ["map", "detecteurDeJuif"],
    ["pop", "pop"],
    ["push", "enfonce"],
    ["push", "forceARentrerDedans"],
    ["reduce", "reduire"],
    ["reduceRight", "reduireADroite"],
    ["reverse", "inverse"],
    ["reverse", "contraire"],
    ["shift", "decaler"],
    ["splice", "epissure"],
    ["splice", "seBourerLaGueule"],
    ["splice", "rajouterUnItemAUnGangBang"],
    ["sort", "trier"],
    ["some", "certains"],
    ["unshift", "ajouterunelementaudebutdutableauetrenoyerlalongueur"],
    ["unshift", "putaintroplong"],
    ["values", "valeurs"]
    //    Math properties
    ,
    ["Math", "Math"],
    ["Math", "Math"],
    ["Math", "Mathematic"],
    ["Math", "Putaindemath"],
    ["Math", "Putaindemath"],
    ["E", "E"],
    ["LN10", "LN10"],
    ["LN2", "LN2"],
    ["LOG10E", "LOG10E"],
    ["LOG2E", "LOG2E"],
    ["PI", "PI"],
    ["SQRT1_2", "SQRT1_2"],
    ["SQRT2", "SQRT2"]
    //    Math methods
    ,
    ["abs", "abs"],
    ["acos", "acos"],
    ["acosh", "acosh"],
    ["asin", "asin"],
    ["asinh", "asinh"],
    ["atan", "atan"],
    ["atan2", "atan2"],
    ["atanh", "atanh"],
    ["cbrt", "cbrt"],
    ["ceil", "ceil"],
    ["clz32", "clz32"],
    ["cos", "cos"],
    ["cosh", "cosh"],
    ["exp", "exp"],
    ["expm1", "expm1"],
    ["floor", "floor"],
    ["fround", "fround"],
    ["hypot", "hypot"],
    ["imul", "imul"],
    ["log10", "log10"],
    ["log1p", "log1p"],
    ["log2", "log2"],
    ["max", "max"],
    ["min", "min"],
    ["pow", "puissance"],
    ["random", "random"],
    ["round", "round"],
    ["sign", "sign"],
    ["sin", "sin"],
    ["sinh", "sinh"],
    ["sqrt", "sqrt"],
    ["tan", "tan"],
    ["tanh", "tanh"],
    ["trunc", "trunc"]
    //    RegExp properties
    ,
    ["RegExp", "RegExp"],
    ["input", "entree"],
    ["flags", "drapeaux"],
    ["global", "global"],
    ["ignoreCase", "ignorerCase"],
    ["multiline", "multiligne"],
    ["source", "source"],
    ["sticky", "gluant"],
    ["sticky", "sperm"],
    ["unicode", "unicode"],
    ["lastIndex", "dernierIndex"]
    //    RegExp methods
    ,
    ["exec", "execution"],
    ["test", "test"]
    //    async/await functions, methods and objects
    ,
    ["async", "async"],
    ["await", "atendre"],
    ["resolveAfter2Seconds", "resoudreApres2Secondes"],
    ["AsyncFunction", "AsyncLaFonction"]
    //    Promise methods
    ,
    ["all", "tout"],
    ["then", "puis"],
    ["race", "race"],
    ["reject", "rejeter"],
    ["resolve", "resoudre"]
    //    Object properties
    ,
    ["Object", "Objet"],
    ["Object", "Objet2Lel"],
    ["constructor", "constructeur"]
    //    Object methods
    ,
    ["assign", "assigner"],
    ["create", "creer"],
    ["defineProperties", "definirLesProprietes"],
    ["defineProperty", "definirLaPropriete"],
    ["freeze", "geler"],
    ["getOwnPropertyDescriptor", "obtenirLaPropreDescriptionPourLaPropriete"],
    ["getOwnPropertyDescriptors", "obtenirLesPropresDescriptionsPourLaPropriete"],
    ["getOwnPropertyNames", "obtenirLesNomsDesProprietes"],
    ["getOwnPropertySymbols", "obtenirLesPropresSymboles"],
    ["getPrototypeOf", "obtenirLePrototypeDe"],
    ["isExtensible", "estExtensible"],
    ["isFrozen", "estGele"],
    ["isSealed", "estEnfermeDansLaCave"],
    ["hasOwnProperty", "aSaProprePropriete"],
    ["isPrototypeOf", "estProtoypeDe"],
    ["propertyIsEnumerable", "PrototypeEstEnumerable"],
    ["unwatch", "nePasMontrer"],
    ["watch", "montrer"],
    ["seal", "enfermer"],
    ["setPrototypeOf", "mettrePrototypeDe"]
    //    NodeJS/modules support
    ,
    ["module", "module"],
    ["exports", "exporterLesJuifs"],
    ["export", "exporterLeJuif"],
    ["global", "global"],
    ["require", "requiere"],
    ["require", "depend"]
];

dictionary.sort(function(a, b) {
    if (a[1].length < b[1].length) return 1;
    else if (a[1].length > b[1].length) return -1;
    else return 0;
});

module.exports = dictionary;