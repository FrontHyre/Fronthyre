function ComingSoon() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-x-hidden px-6 py-6">
      <div
        aria-hidden
        className="pointer-events-none fixed left-[-140px] top-[-180px] z-0 h-[500px] w-[500px] rounded-full bg-[rgba(255,214,165,0.35)] blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed bottom-[-220px] right-[-180px] z-0 h-[600px] w-[600px] rounded-full bg-[rgba(165,214,255,0.35)] blur-[100px]"
      />

      <main className="relative z-[1] w-full max-w-[960px] animate-floatIn rounded-[2.5rem] border border-white/90 bg-white/70 px-5 py-11 text-center shadow-[0_25px_60px_-20px_rgba(120,140,170,0.25),0_8px_25px_-10px_rgba(120,140,170,0.15)] backdrop-blur-[18px] sm:px-10 sm:py-16 max-[560px]:rounded-[2rem] max-[560px]:px-[1.3rem] max-[560px]:py-[2.8rem]">
        <h1 className="mb-1 bg-[linear-gradient(135deg,#1a2b4a_0%,#2e4a7a_50%,#1a2b4a_100%)] bg-clip-text text-[clamp(3.2rem,13vw,6.8rem)] font-extrabold uppercase leading-none tracking-[-0.03em] text-transparent max-[560px]:text-[clamp(2.6rem,13vw,3.6rem)]">
          FRONTHYRE
        </h1>
        <span className="mx-auto mb-[1.2rem] mt-[1.4rem] block h-[5px] w-[90px] rounded-[10px] bg-[linear-gradient(90deg,#ffb347,#ffcc70,#7ec8e3,#a8d8ff)] shadow-[0_3px_10px_rgba(255,180,90,0.25)] max-[560px]:mb-[0.9rem] max-[560px]:mt-4 max-[560px]:h-1 max-[560px]:w-[70px]" />

        <p className="mb-[2.6rem] inline-block px-4 text-[clamp(0.95rem,3.2vw,1.3rem)] font-medium uppercase tracking-[0.08em] text-[#5a6b85]">
          where technology and talent meets
        </p>

        <section className="flex flex-col items-center gap-[1.2rem] pt-2">
          <div className="relative inline-flex items-center gap-2 rounded-[60px] border border-[rgba(110,180,150,0.35)] bg-[linear-gradient(135deg,#e6f7ef,#d7f0e6)] px-[1.8rem] py-[0.7rem] text-[clamp(0.75rem,2.6vw,0.95rem)] font-semibold uppercase tracking-[0.28em] text-[#3f6a5a] shadow-[0_4px_15px_rgba(110,180,150,0.12)] max-[560px]:px-[1.2rem] max-[560px]:py-[0.6rem] max-[560px]:tracking-[0.2em]">
            <span className="h-2 w-2 animate-pulseDot rounded-full bg-[#3fbf7f] shadow-[0_0_0_0_rgba(63,191,127,0.6)]" />
            In progress
          </div>

          <p className="mb-[0.2rem] bg-[linear-gradient(115deg,#2b4a7a,#4a7ab5,#ff9f4a)] bg-clip-text text-[clamp(1.8rem,7.5vw,3.4rem)] font-bold uppercase leading-[1.2] tracking-[-0.01em] text-transparent max-[560px]:text-[clamp(1.5rem,7vw,2.2rem)]">
            Something big is arriving
          </p>

          <div className="my-[0.8rem] h-2.5 w-full max-w-[440px] overflow-hidden rounded-[20px] bg-[#e9eef5] shadow-[inset_0_2px_5px_rgba(100,120,150,0.08)]">
            <div className="relative h-full w-[72%] animate-gradientShift rounded-[20px] bg-[linear-gradient(90deg,#ffb347,#ffcc70,#7ec8e3,#a8d8ff)] bg-[length:200%_100%]">
              <span className="absolute inset-0 animate-shine bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.55)_50%,transparent_100%)]" />
            </div>
          </div>

          <p className="mt-1 text-[0.78rem] font-medium uppercase tracking-[0.3em] text-[#8798b0]">
            building the future
          </p>
        </section>

        <footer className="mt-[2.8rem] flex flex-wrap justify-center gap-x-[2.4rem] gap-y-[1.2rem] border-t border-[rgba(120,140,170,0.15)] pt-[1.8rem] text-[clamp(0.7rem,2.2vw,0.82rem)] font-medium uppercase tracking-[0.18em] text-[#7d8fa8] max-[560px]:gap-x-[1.4rem] max-[560px]:gap-y-[0.8rem]">
          {['Job portal', 'Hackathon', 'For technologists'].map((label) => (
            <span key={label} className="inline-flex items-center gap-2">
              <span className="text-[0.75rem] text-[#ff9f4a]">✦</span>
              {label}
            </span>
          ))}
        </footer>
      </main>
    </div>
  );
}

export default ComingSoon;
