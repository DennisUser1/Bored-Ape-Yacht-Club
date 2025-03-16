const SoundOn = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <path d="M3 15V9h4l5-5v16l-5-5H3z" />
    <path d="M16 12a4 4 0 0 0-4-4v2a2 2 0 0 1 0 4v2a4 4 0 0 0 4-4z" />
    <path d="M20 12a8 8 0 0 0-8-8v2a6 6 0 0 1 0 12v2a8 8 0 0 0 8-8z">
      <animate
        attributeName="opacity"
        values="1;0.5;1"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
);
export default SoundOn;
