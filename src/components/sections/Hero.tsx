import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import jellyfishImg from "../../assets/images/jellyfish.svg";
import MusicPlayer from "../ui/MusicPlayer";

const MonkeytypeIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-680 -1030 300 180"
    className={className + " fill-current"}
  >
    <g>
      <path d="M -430 -910 C -424.481 -910 -420 -905.519 -420 -900 C -420 -894.481 -424.481 -890 -430 -890 C -435.519 -890 -440 -894.481 -440 -900 C -440 -905.519 -435.519 -910 -430 -910 Z" />
      <path d="M -570 -910 L -510 -910 C -504.481 -910 -500 -905.519 -500 -900 C -500 -894.481 -504.481 -890 -510 -890 L -570 -890 C -575.519 -890 -580 -894.481 -580 -900 C -580 -905.519 -575.519 -910 -570 -910 Z" />
      <path d="M -590 -970 C -584.481 -970 -580 -965.519 -580 -960 L -580 -940 C -580 -934.481 -584.481 -930 -590 -930 C -595.519 -930 -600 -934.481 -600 -940 L -600 -960 C -600 -965.519 -595.519 -970 -590 -970 Z" />
      <path d="M -639.991 -960.515 C -639.72 -976.836 -626.385 -990 -610 -990 C -602.32 -990 -595.31 -987.108 -590 -982.355 C -584.69 -987.108 -577.68 -990 -570 -990 C -553.615 -990 -540.28 -976.836 -540.009 -960.515 C -540.001 -960.345 -540 -960.172 -540 -960 L -540 -940 C -540 -934.481 -544.481 -930 -550 -930 C -555.519 -930 -560 -934.481 -560 -940 L -560 -960 C -560 -965.519 -564.481 -970 -570 -970 C -575.519 -970 -580 -965.519 -580 -960 L -580 -940 C -580 -934.481 -584.481 -930 -590 -930 C -595.519 -930 -600 -934.481 -600 -940 L -600 -960 C -600 -965.519 -604.481 -970 -610 -970 C -615.519 -970 -620 -965.519 -620 -960 L -620 -940 C -620 -934.481 -624.481 -930 -630 -930 C -635.519 -930 -640 -934.481 -640 -940 L -640 -960 Z" />
      <path d="M -460 -930 L -460 -900 C -460 -894.481 -464.481 -890 -470 -890 C -475.519 -890 -480 -894.481 -480 -900 L -480 -930 L -508.82 -930 C -514.99 -930 -520 -934.481 -520 -940 C -520 -945.519 -514.99 -950 -508.82 -950 L -431.18 -950 C -425.01 -950 -420 -945.519 -420 -940 C -420 -934.481 -425.01 -930 -431.18 -930 L -460 -930 Z" />
      <path d="M -470 -990 L -430 -990 C -424.481 -990 -420 -985.519 -420 -980 C -420 -974.481 -424.481 -970 -430 -970 L -470 -970 C -475.519 -970 -480 -974.481 -480 -980 C -480 -985.519 -475.519 -990 -470 -990 Z" />
      <path d="M -630 -910 L -610 -910 C -604.481 -910 -600 -905.519 -600 -900 C -600 -894.481 -604.481 -890 -610 -890 L -630 -890 C -635.519 -890 -640 -894.481 -640 -900 C -640 -905.519 -635.519 -910 -630 -910 Z" />
      <path d="M -515 -990 L -510 -990 C -504.481 -990 -500 -985.519 -500 -980 C -500 -974.481 -504.481 -970 -510 -970 L -515 -970 C -520.519 -970 -525 -974.481 -525 -980 C -525 -985.519 -520.519 -990 -515 -990 Z" />
      <path d="M -660 -910 L -680 -910 L -680 -980 C -680 -1007.596 -657.596 -1030 -630 -1030 L -430 -1030 C -402.404 -1030 -380 -1007.596 -380 -980 L -380 -900 C -380 -872.404 -402.404 -850 -430 -850 L -630 -850 C -657.596 -850 -680 -872.404 -680 -900 L -680 -920 L -660 -920 L -660 -900 C -660 -883.443 -646.557 -870 -630 -870 L -430 -870 C -413.443 -870 -400 -883.443 -400 -900 L -400 -980 C -400 -996.557 -413.443 -1010 -430 -1010 L -630 -1010 C -646.557 -1010 -660 -996.557 -660 -980 L -660 -910 Z" />
    </g>
  </svg>
);

function DraggableImage() {
  const imgRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({
    dragging: false,
    startX: 0,
    startY: 0,
    origX: 0,
    origY: 0,
  });
  const pos = useRef({ x: 0, y: 0 });

  const start = (clientX: number, clientY: number) => {
    const s = dragState.current;
    s.dragging = true;
    s.startX = clientX;
    s.startY = clientY;
    s.origX = pos.current.x;
    s.origY = pos.current.y;
    document.body.style.userSelect = "none";
    if (imgRef.current) imgRef.current.style.transition = "none";
  };

  const move = (clientX: number, clientY: number) => {
    const s = dragState.current;
    if (!s.dragging || !imgRef.current) return;
    pos.current.x = s.origX + (clientX - s.startX);
    pos.current.y = s.origY + (clientY - s.startY);
    imgRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
  };

  const end = () => {
    dragState.current.dragging = false;
    document.body.style.userSelect = "";
    if (imgRef.current) {
      imgRef.current.style.transition =
        "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)";
      imgRef.current.style.transform = "translate(0px, 0px)";
      pos.current = { x: 0, y: 0 };
    }
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => move(e.clientX, e.clientY);
    const onTouchMove = (e: TouchEvent) =>
      move(e.touches[0].clientX, e.touches[0].clientY);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", end);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", end);
    };
  }, []);

  return (
    <div
      ref={imgRef}
      onMouseDown={(e) => {
        e.preventDefault();
        start(e.clientX, e.clientY);
      }}
      onTouchStart={(e) => start(e.touches[0].clientX, e.touches[0].clientY)}
      style={{ willChange: "transform" }}
      className="relative w-full aspect-square mb-10 group cursor-grab active:cursor-grabbing select-none z-20"
    >
      <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl group-hover:opacity-60 transition-opacity pointer-events-none" />
      <div className="absolute inset-0 bg-[#000814] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-inner">
        <img
          src="https://github.com/aadijaiin.png"
          alt="Aadi Jain"
          draggable={false}
          className="w-full h-full object-cover grayscale opacity-70 mix-blend-screen active:grayscale-0 active:opacity-100 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out scale-110 group-hover:scale-100 group-active:scale-100"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const [stats, setStats] = useState({
  years: 0,
  projects: 0,
  leetcode: 0,
});

  useEffect(() => {
  fetch("https://api.github.com/users/aadijaiin")
    .then((res) => res.json())
    .then((data) => {
      const createdYear = new Date(data.created_at).getFullYear();
      const currentYear = new Date().getFullYear();

      setStats((prev) => ({
        ...prev,
        years: currentYear - createdYear || 3,
        projects: data.public_repos || 1,
      }));
    })
    .catch(() =>
      setStats((prev) => ({ ...prev, years: 3, projects: 1 }))
    );

  fetch("https://leetcode-api-faisalshohag.vercel.app/Aadijain")
    .then((res) => res.json())
    .then((data) => {
      setStats((prev) => ({
        ...prev,
        leetcode: data.totalSolved || 0,
      }));
    })
    .catch(() =>
      setStats((prev) => ({ ...prev, leetcode: 0 }))
    );
}, []);

  // useEffect(() => {
  //   fetch("https://api.github.com/users/aadijaiin")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const createdYear = new Date(data.created_at).getFullYear();
  //       const currentYear = new Date().getFullYear();
  //       setStats({
  //         years: currentYear - createdYear || 3,
  //         projects: data.public_repos || 1,
  //       });
  //     })
  //     .catch(() => setStats({ years: 3, projects: 1 }));
  // }, []);

  return (
    <div className="min-h-screen bg-[#020c1b] text-white pt-20 pb-20 overflow-hidden relative">
      <div id="top" className="absolute top-0" />

      <div className="w-full mx-auto px-4 sm:px-8 lg:px-16 xl:px-24 relative z-10">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-center xl:items-stretch w-full">
          <div className="w-full max-w-105 bg-[#0a192f]/40 backdrop-blur-2xl rounded-[3rem] p-8 sm:p-12 flex flex-col relative shrink-0 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
            <DraggableImage />

            <h2 className="text-3xl sm:text-4xl font-black text-white text-center mb-4 tracking-tighter">
              Aadi Jain
            </h2>

            <div className="flex justify-center mb-6">
              <div className="px-5 py-2 bg-cyan-500/10 border border-cyan-400/20 rounded-full flex items-center gap-3 text-cyan-400 shadow-lg shadow-cyan-500/5">
                <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  Software Engineer
                </span>
              </div>
            </div>

            <p className="text-cyan-100/50 text-center font-medium text-base sm:text-lg leading-relaxed mb-4">
              Exploring and building across web, mobile, and cloud focusing on systems that scale.
            </p>

            <div className="mb-12">
              <MusicPlayer />
            </div>

            <div className="flex justify-center gap-4 sm:gap-6 mb-12">
              <a
                href="https://github.com/aadijaiin"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-lg sm:text-xl"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aadi-jain-15462a327/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-lg sm:text-xl"
                />
              </a>
              <a
                href="https://monkeytype.com/profile/aadijaiin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-white/5 border border-white/10 text-cyan-400 flex items-center justify-center hover:bg-cyan-400 hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <MonkeytypeIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center w-full lg:pl-10">
            <div className="mb-12 relative">
              <div className="inline-block px-4 py-1 bg-cyan-500/20 rounded-lg text-cyan-400 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-6">
                Exploring Opportunities
              </div>
              <h1 className="text-5xl sm:text-8xl lg:text-[9rem] font-black text-white leading-[0.85] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                SOFTWARE
              </h1>
              <h1 className="text-5xl sm:text-8xl lg:text-[9rem] font-black text-transparent bg-clip-text bg-linear-to-r from-cyan-300/30 via-cyan-500/50 to-blue-900/10 leading-[0.85] tracking-tighter drop-shadow-[0_5px_15px_rgba(34,211,238,0.1)]">
                ENGINEER
              </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 mb-16 relative">
              <p className="text-cyan-100/30 text-lg sm:text-xl max-w-5xl font-medium leading-relaxed">
                I work across the stack, from frontend interfaces to backend systems and cloud infrastructure, 
with an emphasis on clean code and practical performance.
              </p>
              <div className="shrink-0 w-16 h-16 sm:w-28 sm:h-28 opacity-40 animate-float-slow pointer-events-none">
                <img
                  src={jellyfishImg}
                  className="w-full h-full"
                  alt="Jellyfish"
                />
              </div>
            </div>

            <div className="flex flex-row gap-8 sm:gap-20 items-center relative">
              <div className="relative z-10 group">
                <div className="text-4xl sm:text-7xl font-black text-white mb-3 tabular-nums drop-shadow-lg">
                  {stats.years}+
                </div>
                <div className="text-cyan-500/40 text-[10px] sm:text-sm tracking-[0.2em] uppercase font-bold">
                  YEARS OF
                  <br className="hidden sm:block" /> EXPERIENCE
                </div>
              </div>
              <div className="relative z-10 group flex items-center gap-6">
                <div>
                  <div className="text-4xl sm:text-7xl font-black text-white mb-3 tabular-nums drop-shadow-lg">
                    {stats.projects}+
                  </div>
                  <div className="text-cyan-500/40 text-[10px] sm:text-sm tracking-[0.2em] uppercase font-bold">
                    PROJECTS
                    <br className="hidden sm:block" /> ON GITHUB
                  </div>
                </div>
              </div>
                  <div className="relative z-10 group">
                    <div className="text-4xl sm:text-7xl font-black text-white mb-3 tabular-nums drop-shadow-lg">
                      {stats.leetcode}+
                    </div>
                    <div className="text-cyan-500/40 text-[10px] sm:text-sm tracking-[0.2em] uppercase font-bold">
                      LEETCODE
                      <br className="hidden sm:block" /> PROBLEMS
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
