export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email } = req.body;
    const webhookUrl = "https://discord.com/api/webhooks/1475299568844537978/sY0Q1M8QTyU2Pwung5uuIb5Dn3nvqhuD3tnmEvyGf48ZkFmQfiy-MSBIJCs5k8LQDYER";

    await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: `👤 **${email}** logged into their account.`
      }),
    });

    return res.status(200).json({ message: 'Success' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

