
import React, { useState, useEffect, useMemo } from "react";
import { nearby, type Destination } from "../data/nearby";
import { useNavigate } from "react-router-dom";

const AttractionsSection: React.FC = () => {
  const navigate = useNavigate();
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  // Mapping between nearby destination IDs and attraction detail slugs
  const destinationSlugMap: Record<string, string> = {
    'munnar': 'munnar-hill-station',
    'thekkady': 'thekkady-wildlife-sanctuary',
    'vagamon': 'vagamon-meadows',
    'idukki-dam': 'idukki-arch-dam',
    'ramakkalmedu': 'ramakkalmedu',
    'nedumkandam': 'nedumkandam'
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    const timer = setTimeout(() => setAnimateIn(true), 300);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const nedumNode = nearby.find(a => a.id === "nedumkandam");
  const destinationNodes = nearby.filter(a => a.id !== "nedumkandam");

  // Node size calculations
  const nodeSize = useMemo(() => {
    const baseSize = isMobile 
      ? (window.innerWidth < 480 ? 26 : 32)
      : 80;
    const ratio = isMobile ? 0.85 : 0.75;
    
    return {
      center: baseSize,
      destination: Math.round(baseSize * ratio),
    };
  }, [isMobile]);

  // Path generation logic
  const generatePath = (destination: Destination) => {
    if (!nedumNode || destination.id === "nedumkandam") return "";

    const startX = parseFloat(nedumNode.coords.left);
    const startY = parseFloat(nedumNode.coords.top);
    const endX = parseFloat(destination.coords.left);
    const endY = parseFloat(destination.coords.top);

    const angle = Math.atan2(endY - startY, endX - startX);
    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const baseIntensity = isMobile ? 20 : 35;
    const distanceScale = Math.min(distance * 0.25, isMobile ? 25 : 40);
    const curveIntensity = Math.max(baseIntensity, distanceScale);

    const startRadius = (nodeSize.center / (isMobile ? 350 : 700)) * 100;
    const endRadius = (nodeSize.destination / (isMobile ? 350 : 700)) * 100;

    const startOffset = startRadius / 100;
    const endOffset = endRadius / 100;
    
    const startConnectionX = startX + Math.cos(angle) * startOffset;
    const startConnectionY = startY + Math.sin(angle) * startOffset;
    const endConnectionX = endX - Math.cos(angle) * endOffset;
    const endConnectionY = endY - Math.sin(angle) * endOffset;

    const midX = (startConnectionX + endConnectionX) / 2;
    const midY = (startConnectionY + endConnectionY) / 2;
    
    const perpX = -Math.sin(angle) * curveIntensity;
    const perpY = Math.cos(angle) * curveIntensity;
    
    const controlX = midX + perpX;
    const controlY = midY + perpY;

    return `M ${startConnectionX.toFixed(3)} ${startConnectionY.toFixed(3)} Q ${controlX.toFixed(3)} ${controlY.toFixed(3)} ${endConnectionX.toFixed(3)} ${endConnectionY.toFixed(3)}`;
  };

  const getNodePosition = (coords: { top: string; left: string }, isCenter: boolean) => {
    const radius = isCenter ? nodeSize.center : nodeSize.destination;
    const viewportAdjustment = isMobile ? 1 : 1.25;
    const size = radius * 2 * viewportAdjustment;
    
    return {
      top: coords.top,
      left: coords.left,
      transform: `translate(-50%, -50%) scale(${1 / viewportAdjustment})`,
      width: size,
      height: size,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  const handleNodeClick = (nodeId: string) => {
    // Use the mapping to get the correct slug for navigation
    const slug = destinationSlugMap[nodeId];
    if (slug) {
      navigate(`/attractions/${slug}`);
    }
  };

  // Get custom position and transform for each node
  const getNodeLabelStyle = (nodeId: string): { base: string; transform: string; textAlign: React.CSSProperties['textAlign'] } => {
    const positions = {
      'munnar': {
        base: "top-0 right-full",
        transform: "translate(101px, -69px)",
        textAlign: "right" as const
      },
      'idukki-dam': {
        base: "top-0 right-full",
        transform: "translate(60px, -40px)",
        textAlign: "right" as const
      },
      'nedumkandam': {
        base: "bottom-full left-1/2",
        transform: "translate(-50%, -8px)",
        textAlign: "center" as const
      },
      'ramakkalmedu': {
        base: "top-0 left-full",
        transform: "translate(-35px, -60px)",
        textAlign: "left" as const
      },
      'thekkady': {
        base: "top-full left-1/2",
        transform: "translate(-50%, 28px)",
        textAlign: "center" as const
      },
      'vagamon': {
        base: "top-0 right-full",
        transform: "translate(-2px, 40px)",
        textAlign: "right" as const
      }
    } as const;
    return positions[nodeId] || { base: "top-full", transform: "translateY(8px)", textAlign: "center" };
  };

  return (
    <section className="nearby-map relative w-full bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden min-h-[90vh] md:min-h-[800px] flex flex-col">
      {/* Title section */}
      <div className="w-full relative z-10 container mx-auto px-4">
        <div className={`text-center py-4 md:py-8 transition-all duration-1500 ${
          animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <div className="mb-2 md:mb-4">            <span className="inline-block text-sm md:text-base font-semibold text-emerald-600 tracking-wider uppercase animate-fade-in-up">
              Explore Idukki
            </span>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-emerald-700 via-emerald-600 to-amber-600 bg-clip-text text-transparent mb-3 md:mb-4 animate-text-glow px-4">
            Hidden Treasures Await
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-xl mx-auto mb-3 md:mb-6 px-2 md:px-4 leading-relaxed">
            Embark on an extraordinary journey through the mystical landscapes around Nedumkandam, where every destination tells a story of natural wonder.
          </p>
        </div>
      </div>

      {/* Map section */}
      <div className="relative w-full flex-1 flex items-center justify-center py-8 md:py-12">
        <div className="relative w-[92%] md:w-[95%] max-w-[1400px] mx-auto aspect-[3/4] md:aspect-[16/9]">
          {/* SVG Layer for paths */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="-5 -5 110 110"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#047857" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
              </linearGradient>
              
              <filter id="pathSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="0.3" result="glow1" />
                <feGaussianBlur stdDeviation="0.5" result="glow2" />
                <feMerge>
                  <feMergeNode in="glow1" />
                  <feMergeNode in="glow2" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              
              <filter id="pathShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0.2" dy="0.2" stdDeviation="0.3" floodColor="#047857" floodOpacity="0.3"/>
              </filter>

              <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669">
                  <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" stopColor="#10B981">
                  <animate attributeName="offset" values="0.5;1.5;0.5" dur="3s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" stopColor="#059669">
                  <animate attributeName="offset" values="1;2;1" dur="3s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>

            {/* Connection paths */}
            {destinationNodes.map((destination, idx) => (
              <g key={destination.id}>
                <path
                  d={generatePath(destination)}
                  stroke="#00000015"
                  strokeWidth={isMobile ? "0.3" : "0.4"}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#pathShadow)"
                  transform="translate(0.2, 0.2)"
                  opacity={animateIn ? 0.3 : 0}
                  style={{
                    transition: "all 0.8s cubic-bezier(.6,.2,.4,1)",
                    transitionDelay: `${idx * 250 + 700}ms`
                  }}
                />
                <path
                  d={generatePath(destination)}
                  stroke={hoveredPath === destination.id ? "url(#hoverGradient)" : "url(#pathGradient)"}
                  strokeWidth={isMobile ? "0.3" : "0.4"}
                  fill="none"
                  filter="url(#pathSoftGlow)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeDasharray={isMobile ? "0.6 1.2" : "0.8 1.6"}
                  opacity={hoveredPath === destination.id ? 1 : animateIn ? 0.85 : 0}
                  style={{
                    transition: "all 0.8s cubic-bezier(.6,.2,.4,1)",
                    transitionDelay: `${idx * 250 + 900}ms`
                  }}
                  onMouseEnter={() => setHoveredPath(destination.id)}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  <animate
                    attributeName="strokeDashoffset"
                    values="0;24"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
              </g>
            ))}
          </svg>

          {/* Center Node (Nedumkandam) */}
          {nedumNode && (
            <div
              className={`absolute z-30 transition-all duration-1200 ${
                animateIn ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
              }`}
              style={getNodePosition(nedumNode.coords, true)}
            >
              <div
                className="flex flex-col items-center group cursor-pointer"
                onMouseEnter={() => setActiveNode("nedumkandam")}
                onMouseLeave={() => setActiveNode(null)}
                onClick={() => handleNodeClick("nedumkandam")}
              >
                <div className="relative w-20 h-20 md:w-44 md:h-44 rounded-full shadow-2xl bg-gradient-to-br from-white via-emerald-50 to-white border-2 md:border-3 border-emerald-200 flex items-center justify-center transition-all duration-700 overflow-hidden group-hover:shadow-3xl group-hover:scale-110 group-hover:border-emerald-300">
                  <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping"></div>
                  <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-pulse"></div>
                  <div className="absolute inset-0 rounded-full bg-emerald-400/15 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  <img
                    src={nedumNode.icon}
                    alt={nedumNode.name}
                    className="w-full h-full object-cover rounded-full relative z-10 transition-transform duration-700 group-hover:scale-110"
                  />
                </div>                <div className="absolute whitespace-nowrap bottom-full mb-1 left-1/2 -translate-x-1/2">
                  <div className="inline-flex flex-col bg-white/90 backdrop-blur-md rounded-lg border border-emerald-100/50 shadow-sm px-2 py-1">
                    <span className="block text-[14px] md:text-xl font-bold text-emerald-800 leading-snug tracking-tight">
                      Nedumkandam
                    </span>
                    <span className="block text-[10px] md:text-sm text-emerald-600/90 font-medium mt-0.5">
                      (You Are Here)
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] md:text-sm font-semibold text-emerald-600 rounded-full px-2 py-0.5 bg-gradient-to-r from-emerald-100 to-emerald-50 border border-emerald-200/30 shadow-sm mt-1">
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      0 min
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Destination Nodes */}
          {destinationNodes.map((activity, idx) => (
            <div
              key={activity.id}
              className={`absolute z-20 cursor-pointer group transition-all duration-1000 ${
                animateIn ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-12'
              }`}
              style={getNodePosition(activity.coords, false)}
              onClick={() => handleNodeClick(activity.id)}
              onMouseEnter={() => setActiveNode(activity.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className="relative w-16 h-16 md:w-36 md:h-36 rounded-full flex items-center justify-center shadow-xl bg-gradient-to-br from-white via-amber-50 to-white border-2 md:border-3 border-amber-200 hover:shadow-2xl transition-all duration-700 overflow-hidden group-hover:scale-125 group-hover:border-amber-300 group-active:scale-95">
                <div className="absolute inset-0 rounded-full bg-amber-400/15 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-amber-400/25 animate-pulse"></div>
                
                <img
                  src={activity.icon}
                  alt={activity.name}
                  className="w-full h-full object-cover rounded-full relative z-10 transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Label with custom positioning */}
              <div 
                className={`absolute whitespace-nowrap ${getNodeLabelStyle(activity.id).base}`}
                style={{
                  transform: getNodeLabelStyle(activity.id).transform,
                  textAlign: getNodeLabelStyle(activity.id).textAlign
                }}
              >
                <div className="inline-flex flex-col bg-white/90 backdrop-blur-md rounded-lg border border-amber-100/50 shadow-sm px-2 py-1">
                  <span className="block text-[13px] md:text-lg font-bold text-slate-800 leading-snug tracking-tight">
                    {activity.name}
                  </span>
                  {activity.time && (
                    <div className="mt-0.5">
                      <span className="inline-flex items-center gap-1 text-[10px] md:text-sm font-semibold text-amber-700 rounded-full px-2 py-0.5 bg-gradient-to-r from-amber-100 to-amber-50 border border-amber-200/30 shadow-sm">
                        <svg className="w-3 h-3 md:w-3.5 md:h-3.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8V12L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                        {activity.time}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
