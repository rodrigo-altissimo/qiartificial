const express = require('express');
const cors = require('cors');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Preencha todos os campos obrigatórios.' });
  }

  const msg = {
    to: process.env.MAIL_TO,
    from: process.env.MAIL_FROM,
    subject: 'Nova mensagem do site QiArtificial',
    text: `
      Nome: ${name}
      Email: ${email}
      Telefone: ${phone || '-'}
      Mensagem: ${message}
    `,
    html: `
      <strong>Nome:</strong> ${name}<br/>
      <strong>Email:</strong> ${email}<br/>
      <strong>Telefone:</strong> ${phone || '-'}<br/>
      <strong>Mensagem:</strong><br/>${message.replace(/\\n/g, '<br/>')}
    `
  };

  try {
    await sgMail.send(msg);
    console.log('Email enviado com sucesso, retornando { success: true }');
    res.json({ success: true });
  } catch (error) {
    console.error(error);
    console.log('Erro ao enviar email, retornando { success: false }');
    res.status(500).json({ success: false, message: 'Erro ao enviar e-mail.' });
  }
});

app.listen(3001, () => console.log('API rodando na porta 3001'));