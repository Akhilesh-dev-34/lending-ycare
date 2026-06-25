const RECIPIENT_EMAIL = 'yasin@yachii.com';
const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

const ROLE_LABELS = {
  family: 'Family member',
  hospital: 'Hospital / clinic',
  nurse: 'Registered nurse',
  student: 'Nursing student',
  educator: 'Nursing educator',
};

async function submitToGoogleSheet(payload) {
  const response = await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'Could not save to Google Sheets.');
  }

  return data;
}

async function submitToEmail(payload) {
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(RECIPIENT_EMAIL)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      ...payload,
      _subject: `YCare Waitlist: ${payload.name}`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === 'false') {
    throw new Error(data.message || 'Unable to send your request. Please try again.');
  }

  return data;
}

export async function submitWaitlist({ name, email, role }) {
  const payload = {
    name,
    email,
    role: ROLE_LABELS[role] || role,
  };

  const tasks = [];

  if (GOOGLE_SCRIPT_URL) {
    tasks.push(submitToGoogleSheet(payload));
  }

  tasks.push(submitToEmail(payload));

  await Promise.all(tasks);

  return { success: true };
}
