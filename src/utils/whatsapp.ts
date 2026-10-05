import { CONFIG } from '../config';

export function createWhatsAppUrl(data: {
  name?: string;
  emailOrPhone?: string;
  plan?: string;
  message?: string;
}) {
  const parts: string[] = [
    `*MEERA AI - Access Request*`,
    `--------------------------`
  ];

  if (data.name) parts.push(`*Name:* ${data.name}`);
  if (data.emailOrPhone) parts.push(`*Contact:* ${data.emailOrPhone}`);
  if (data.plan) parts.push(`*Plan:* ${data.plan}`);
  if (data.message) parts.push(`*Message:* ${data.message}`);

  parts.push(`--------------------------`);
  parts.push(`Sent via meera-agent.ai`);

  const fullText = parts.join('\n');
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(fullText)}`;
}

export function openWhatsAppDirect(data?: {
  name?: string;
  emailOrPhone?: string;
  plan?: string;
  message?: string;
}) {
  const url = createWhatsAppUrl(data || { message: 'Hi! I would like to know more about MEERA AI.' });
  window.open(url, '_blank', 'noopener,noreferrer');
}
