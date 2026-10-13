import express from 'express';
import cors from 'cors';
import crypto from 'node:crypto';

const app = express();
const port = Number.parseInt(process.env.PORT || '4000', 10);

const users = [
  {
    id: 'user-1',
    name: 'Nandi Mokoena',
    email: 'reception@mineclinic.demo',
    username: 'reception@mineclinic.demo',
    password: 'prototype',
    role: 'Receptionist',
    department: 'Front desk',
  },
  {
    id: 'user-2',
    name: 'Dr. Sipho Khumalo',
    email: 'doctor@mineclinic.demo',
    username: 'doctor@mineclinic.demo',
    password: 'prototype',
    role: 'Doctor',
    department: 'Clinical',
  },
  {
    id: 'user-3',
    name: 'Lindiwe Zulu',
    email: 'nurse@mineclinic.demo',
    username: 'nurse@mineclinic.demo',
    password: 'prototype',
    role: 'Nurse',
    department: 'Triage',
  },
  {
    id: 'user-4',
    name: 'Michael Botha',
    email: 'lab@mineclinic.demo',
    username: 'lab@mineclinic.demo',
    password: 'prototype',
    role: 'Laboratory',
    department: 'Laboratory',
  },
  {
    id: 'user-5',
    name: 'Kagiso Radebe',
    email: 'admin@mineclinic.demo',
    username: 'admin@mineclinic.demo',
    password: 'prototype',
    role: 'Admin',
    department: 'Administration',
  },
];

const sessions = new Map();

function sanitizeUser(user) {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    department: user.department,
  };
}

function createSessionToken(user) {
  return `clinic_${user.id}_${crypto.randomBytes(16).toString('hex')}`;
}

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'mine-clinic-backend',
    timestamp: new Date().toISOString(),
  });
});

app.post('/api/auth/login', (req, res) => {
  const username = String(req.body?.username ?? '').trim().toLowerCase();
  const password = String(req.body?.password ?? '');
  const role = String(req.body?.role ?? '').trim();

  const user = users.find((item) => {
    const matchesUsername = item.username.toLowerCase() === username || item.email.toLowerCase() === username;
    const matchesPassword = item.password === password;
    const matchesRole = !role || item.role === role;
    return matchesUsername && matchesPassword && matchesRole;
  });

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }

  const token = createSessionToken(user);
  sessions.set(token, user.id);

  return res.json({
    token,
    user: sanitizeUser(user),
  });
});

app.get('/api/auth/profile', (req, res) => {
  const authHeader = req.headers.authorization ?? '';
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  const token = match ? match[1] : null;

  if (!token || !sessions.has(token)) {
    return res.status(401).json({ message: 'Session expired. Please sign in again.' });
  }

  const userId = sessions.get(token);
  const user = users.find((item) => item.id === userId);

  if (!user) {
    return res.status(401).json({ message: 'Session expired. Please sign in again.' });
  }

  return res.json({ user: sanitizeUser(user) });
});

app.get('/api/dashboard', (req, res) => {
  const authHeader = req.headers.authorization ?? '';
  const match = authHeader.match(/^Bearer\s+(.+)$/i);
  const token = match ? match[1] : null;

  if (!token || !sessions.has(token)) {
    return res.status(401).json({ message: 'Session expired. Please sign in again.' });
  }

  const userId = sessions.get(token);
  const user = users.find((item) => item.id === userId);

  if (!user) {
    return res.status(401).json({ message: 'Session expired. Please sign in again.' });
  }

  return res.json({
    user: sanitizeUser(user),
    stats: {
      patientsToday: 48,
      appointments: 26,
      inQueue: 14,
      resultsPending: 7,
      role: user.role,
    },
  });
});

app.listen(port, () => {
  console.log(`Mine Clinic API running on http://localhost:${port}`);
});

