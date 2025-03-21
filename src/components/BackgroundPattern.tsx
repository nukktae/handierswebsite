'use client';

export default function BackgroundPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#17453B05_1px,transparent_1px),linear-gradient(to_bottom,#17453B05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>
  );
}