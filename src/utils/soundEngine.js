// Web Audio API Synthesizer for Organic Soft Pop / Key Tap Sounds (Clean Single Click, Zero Echo)
let audioCtx = null;
let soundEnabled = true;
let lastClickTimestamp = 0;

export function setSoundEnabled(enabled) {
  soundEnabled = enabled;
  if (typeof window !== 'undefined') {
    localStorage.setItem('alexchai_hub_sound_enabled_v1', JSON.stringify(enabled));
  }
}

export function isSoundEnabled() {
  if (typeof window === 'undefined') return true;
  const saved = localStorage.getItem('alexchai_hub_sound_enabled_v1');
  return saved !== null ? JSON.parse(saved) : true;
}

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Unlock audio context on first user touch / pointerdown
if (typeof window !== 'undefined') {
  const unlockAudio = () => {
    const ctx = getAudioContext();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
    window.removeEventListener('pointerdown', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
  };
  window.addEventListener('pointerdown', unlockAudio, { passive: true });
  window.addEventListener('keydown', unlockAudio, { passive: true });
}

export function playHoverSound() {
  return;
}

// Organic Soft Pop / Key Tap Sound (Single Crisp Click with Debounce to Eliminate Echo)
export function playClickSound() {
  if (!soundEnabled) return;

  const nowMs = Date.now();
  // Prevent double-trigger echo (min 90ms debounce)
  if (nowMs - lastClickTimestamp < 90) return;
  lastClickTimestamp = nowMs;

  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    const now = ctx.currentTime;

    // Clean Organic Pop Pitch Sweep (850Hz -> 220Hz in 18ms)
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(850, now);
    osc.frequency.exponentialRampToValueAtTime(220, now + 0.018);

    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.018);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.018);
  } catch (e) {}
}
