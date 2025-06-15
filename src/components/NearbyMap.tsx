import React, { useState, useEffect } from "react";
import { nearby } from "../data/nearby";
import { ScrollArea } from "@/components/ui/scroll-area";

const NearbyMap: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Trigger animations after mount with delay
    const timer = setTimeout(() => setAnimateIn(true), 300);
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timer);
    };
  }, []);

  const nedumNode = nearby.find(a => a.id === "nedumkandam");
  const destinationNodes = nearby.filter(a => a.id !== "nedumkandam");

  const generatePath = (destination: any) => {
    if (!nedumNode || destination.id === "nedumkandam") return "";

    const startX = parseFloat(nedumNode.coords.left);
    const startY = parseFloat(nedumNode.coords.top);
    const endX = parseFloat(destination.coords.left);
    const endY = parseFloat(destination.coords.top);

    // Using a quadratic bezier curve for a simple, modern arc.
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;
    const curveAmount = 0.2;
    const controlX = midX + (startY - endY) * curveAmount;
    const controlY = midY + (endX - startX) * curveAmount;

    return `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
  };

  const handleNodeClick = (nodeId: string) => {
    if (activeNode === nodeId) {
      setActiveNode(null);
    } else {
      setActiveNode(nodeId);
    }
  };

  return (
    <section className="nearby-map relative w-full bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden min-h-screen flex flex-col">
      {/* Enhanced animated background patterns */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full opacity-20" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,200 Q250,150 500,200 T1000,200 L1000,0 L0,0 Z" fill="url(#waveGradient1)" className="animate-wave-slow" />
          <path d="M0,600 Q250,550 500,600 T1000,600 L1000,400 Q750,450 500,400 T0,400 Z" fill="url(#waveGradient2)" className="animate-wave-slower" />
          <path d="M0,800 Q200,750 400,800 T800,800 L800,600 Q600,650 400,600 T0,600 Z" fill="url(#waveGradient3)" className="animate-wave-medium" />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ecfdf5" />
              <stop offset="50%" stopColor="#f0fdf4" />
              <stop offset="100%" stopColor="#fef3e2" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f0fdf4" />
              <stop offset="50%" stopColor="#fefce8" />
              <stop offset="100%" stopColor="#ecfdf5" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fefce8" />
              <stop offset="50%" stopColor="#f0f9ff" />
              <stop offset="100%" stopColor="#f0fdf4" />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-emerald-300/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="w-full relative z-10">
        <div className={`text-center ${isMobile ? 'py-6' : 'py-12 md:py-20'} transition-all duration-1500 ${
          animateIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-emerald-500 mb-4">
            Explore Nearby Destinations
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto px-4">
            Discover the enchanting destinations around Nedumkandam, each offering unique experiences and unforgettable memories.
          </p>
        </div>

        <div className="relative w-full aspect-square max-w-5xl mx-auto px-4 mb-12">
          {/* SVG container for paths */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {destinationNodes.map((destination) => {
              const pathD = generatePath(destination);
              const isActive = activeNode === destination.id || hoveredPath === destination.id;
              
              return (
                <g key={destination.id}>
                  <path
                    d={pathD}
                    fill="none"
                    stroke={isActive ? "#059669" : "#9ca3af"}
                    strokeWidth={isActive ? "3" : "2"}
                    strokeDasharray={isActive ? "none" : "4 4"}
                    className="transition-all duration-300"
                    style={{
                      opacity: activeNode ? (isActive ? 1 : 0.3) : 0.6
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Map nodes */}
          <div className="relative w-full h-full">
            {nearby.map((location) => (
              <div
                key={location.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  location.id === "nedumkandam" ? "z-20" : "z-10"
                }`}
                style={{
                  top: location.coords.top,
                  left: location.coords.left,
                }}
              >
                <button
                  onClick={() => handleNodeClick(location.id)}
                  onMouseEnter={() => setHoveredPath(location.id)}
                  onMouseLeave={() => setHoveredPath(null)}
                  className={`group relative flex items-center justify-center transition-all duration-300 ${
                    location.id === "nedumkandam"
                      ? "w-16 h-16 md:w-20 md:h-20"
                      : "w-12 h-12 md:w-16 md:h-16 hover:scale-110"
                  } ${activeNode === location.id ? "scale-110" : ""}`}
                >
                  <div className={`absolute inset-0 rounded-full ${
                    location.id === "nedumkandam"
                      ? "bg-emerald-100 group-hover:bg-emerald-200"
                      : "bg-white/80 group-hover:bg-white"
                    } shadow-lg backdrop-blur-sm transition-all duration-300`}
                  />
                  
                  <img
                    src={location.icon}
                    alt={location.name}
                    className="relative w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                  
                  {/* Location info popup */}
                  <div
                    className={`absolute ${
                      location.id === "nedumkandam" ? "top-full" : "bottom-full"
                    } left-1/2 -translate-x-1/2 ${
                      location.id === "nedumkandam" ? "pt-4" : "pb-4"
                    } w-64 transition-all duration-300 ${
                      activeNode === location.id
                        ? "opacity-100 visible transform translate-y-0"
                        : "opacity-0 invisible transform translate-y-2"
                    }`}
                  >
                    <div className="bg-white rounded-xl shadow-xl p-4 text-left">
                      <h3 className="font-semibold text-lg text-emerald-800 mb-2">
                        {location.name}
                      </h3>
                      <div className="space-y-2">
                        {location.id !== "nedumkandam" && (
                          <div className="flex items-center text-sm text-slate-600">
                            <span className="mr-2">🚗</span>
                            <span>{location.distance} • {location.time} drive</span>
                          </div>
                        )}
                        <ScrollArea className="h-24">
                          <ul className="space-y-1">
                            {location.highlights.map((highlight, index) => (
                              <li
                                key={index}
                                className="flex items-center text-sm text-slate-600"
                              >
                                <span className="mr-2">✨</span>
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </ScrollArea>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyMap;
