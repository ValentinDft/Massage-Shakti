<?php
  if (isset($_POST['envoie'])) {

    if (!empty($_POST['nom']) AND !empty($_POST['email']) AND !empty($_POST['tel']) AND !empty($_POST['message']))
    {
      $nom = $_POST['nom'];
      $email = $_POST['email'];
      $tel = $_POST['tel'];
      $message = $_POST['message'];

      $destinataire = "ayurvedi.shakti07@yahoo.fr";
      $sujet = "Formulaire de contact site internet";
      $contenu = "Nom : $nom \n
        Tel : $tel \n
        Email : $email \n
        Message : $message";
      $header = "From : $nom \n Reply-To: $email";
      mail($destinataire, $sujet, $contenu, $header);
      echo "Merci votre message est envoyé";

    } else {
      echo "Tous les champs ne sont pas complétés";
    }
  }

?>
