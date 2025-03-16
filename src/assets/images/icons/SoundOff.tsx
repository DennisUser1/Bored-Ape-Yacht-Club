const SoundOff = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 28 28" fill="none">
    <path d="M3 15V9h4l5-5v16l-5-5H3z" />
    <path d="M16 12a4 4 0 0 0-4-4v2a2 2 0 0 1 0 4v2a4 4 0 0 0 4-4z" />

    <path
      d="M20 12a8 8 0 0 0-8-8v2a6 6 0 0 1 0 12v2a8 8 0 0 0 8-8z"
      className="sound-wave"
      strokeWidth="2"
    />
    <path
      d="M23 5l-6 6m0-6l6 6"
      className="cross-icon"
      stroke="currentColor"
      strokeWidth="2"
      transform="translate(4 -2)"
    />
  </svg>
);
export default SoundOff;
