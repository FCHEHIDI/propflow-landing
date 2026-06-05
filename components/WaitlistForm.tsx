'use client';

import { useState } from 'react';

type State = 'idle' | 'loading' | 'success' | 'error';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<State>('idle');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setState('success');
        setMsg("You're on the list. We'll be in touch.");
        setEmail('');
      } else {
        const data = await res.json();
        setState('error');
        setMsg(data.error ?? 'Something went wrong. Please try again.');
      }
    } catch {
      setState('error');
      setMsg('Network error. Please try again.');
    }
  }

  if (state === 'success') {
    return (
      <div
        style={{
          padding: '20px 28px',
          border: '1px solid var(--gold-dim)',
          borderRadius: '3px',
          background: 'rgba(196, 160, 53, 0.06)',
          textAlign: 'center',
        }}
      >
        <p style={{ color: 'var(--gold)', fontSize: '14px', letterSpacing: '0.04em' }}>
          {msg}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: 'flex', gap: '0', width: '100%' }}
    >
      <input
        type="email"
        required
        placeholder="your@hotel.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        disabled={state === 'loading'}
        style={{
          flex: 1,
          padding: '14px 18px',
          background: 'var(--ink-soft)',
          border: '1px solid var(--ink-border)',
          borderRight: 'none',
          borderRadius: '3px 0 0 3px',
          color: 'var(--text-main)',
          fontSize: '14px',
          outline: 'none',
          fontFamily: 'inherit',
          transition: 'border-color 0.2s',
        }}
        onFocus={e => (e.target.style.borderColor = 'var(--gold-dim)')}
        onBlur={e  => (e.target.style.borderColor = 'var(--ink-border)')}
      />
      <button
        type="submit"
        disabled={state === 'loading'}
        style={{
          padding: '14px 24px',
          background: 'var(--gold)',
          border: '1px solid var(--gold)',
          borderRadius: '0 3px 3px 0',
          color: 'var(--ink)',
          fontSize: '13px',
          fontWeight: 600,
          letterSpacing: '0.06em',
          cursor: state === 'loading' ? 'not-allowed' : 'pointer',
          fontFamily: 'inherit',
          whiteSpace: 'nowrap',
          opacity: state === 'loading' ? 0.7 : 1,
          transition: 'opacity 0.2s, background 0.2s',
        }}
        onMouseEnter={e => {
          if (state !== 'loading')
            (e.target as HTMLButtonElement).style.background = 'var(--gold-light)';
        }}
        onMouseLeave={e => {
          (e.target as HTMLButtonElement).style.background = 'var(--gold)';
        }}
      >
        {state === 'loading' ? 'Joining…' : 'Join Waitlist'}
      </button>

      {state === 'error' && (
        <p
          style={{
            position: 'absolute',
            marginTop: '52px',
            fontSize: '12px',
            color: '#E05555',
          }}
        >
          {msg}
        </p>
      )}
    </form>
  );
}
