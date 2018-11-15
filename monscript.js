function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "#33FF99";
}

function verifPseudo(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
function verifAdresse(champ)
{
   if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifCom(champ)
{
      if(champ.value.length < 2 || champ.value.length > 25)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
function verifPassword(champ)
{
   var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
   if(!regex.test(champ.value)||(champ.value.length < 2 || champ.value.length > 25))
   {
      surligne(champ, true);
      alert("Veuillez remplir correctement le Mot De Passe , Le mot de passe doit être une combinaison de caractères, de chiffres et d'au moins une lettre majuscule. , Merci ");
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}


function verifForm(f)
{
   var pseudoOk = verifPseudo(f.pseudo);
   var mailOk = verifMail(f.email);
   var comOk = verifCom(f.com);
   var adrOk = verifAdresse(f.adresse)
   var passOk = verifPassword(f.password)
   
   if(pseudoOk && mailOk && comOk && adrOk && passOk )
      return true;
   else  ( (pseudoOk || mailOk || comOk || adrOk || passOk ) === false )
   {
      alert("Veuillez remplir correctement tous les champs , Merci ");
      return false;
   }

   
}

