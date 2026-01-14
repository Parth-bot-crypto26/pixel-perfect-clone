import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";

interface Country {
  name: string;
  lat: number;
  lng: number;
  flag: string;
}

const countries: Country[] = [
  { name: "United Kingdom", lat: 51.5074, lng: -0.1278, flag: "🇬🇧" },
  { name: "India", lat: 20.5937, lng: 78.9629, flag: "🇮🇳" },
  { name: "United States", lat: 37.0902, lng: -95.7129, flag: "🇺🇸" },
  { name: "Japan", lat: 36.2048, lng: 138.2529, flag: "🇯🇵" },
  { name: "Australia", lat: -25.2744, lng: 133.7751, flag: "🇦🇺" },
  { name: "Germany", lat: 51.1657, lng: 10.4515, flag: "🇩🇪" },
  { name: "Brazil", lat: -14.235, lng: -51.9253, flag: "🇧🇷" },
  { name: "Canada", lat: 56.1304, lng: -106.3468, flag: "🇨🇦" },
  { name: "France", lat: 46.2276, lng: 2.2137, flag: "🇫🇷" },
  { name: "Singapore", lat: 1.3521, lng: 103.8198, flag: "🇸🇬" },
];

// Generate dots for the globe surface
const generateGlobeDots = (count: number) => {
  const dots: { lat: number; lng: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = phi * i;

    const lat = Math.asin(y) * (180 / Math.PI);
    const lng = ((theta * 180) / Math.PI) % 360 - 180;
    
    dots.push({ lat, lng });
  }
  return dots;
};

const Globe3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, rotation: 0 });

  const globeDots = useMemo(() => generateGlobeDots(400), []);

  useEffect(() => {
    if (isHovered || isDragging) return;
    
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.3) % 360);
    }, 30);
    
    return () => clearInterval(interval);
  }, [isHovered, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, rotation });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStart.x;
    setRotation(dragStart.rotation + deltaX * 0.5);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const getPointPosition = (lat: number, lng: number, rotationOffset: number, radius: number = 120) => {
    const adjustedLng = lng + rotationOffset;
    const radLat = (lat * Math.PI) / 180;
    const radLng = (adjustedLng * Math.PI) / 180;
    
    const x = Math.cos(radLat) * Math.sin(radLng);
    const y = -Math.sin(radLat);
    const z = Math.cos(radLat) * Math.cos(radLng);
    
    const visible = z > 0;
    
    return {
      x: x * radius + 150,
      y: y * radius + 150,
      visible,
      z
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-[300px] h-[300px] cursor-grab active:cursor-grabbing select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* Globe Background with Gradient */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 25%, 
            rgba(40, 40, 80, 0.8) 0%, 
            rgba(20, 20, 50, 0.9) 40%, 
            rgba(10, 10, 30, 1) 70%,
            rgba(5, 5, 15, 1) 100%)`,
          boxShadow: `
            inset -20px -20px 60px rgba(0, 0, 0, 0.5),
            inset 10px 10px 40px rgba(100, 100, 200, 0.1),
            0 0 60px rgba(100, 120, 255, 0.15),
            0 0 100px rgba(80, 100, 200, 0.1)
          `,
          border: '1px solid rgba(100, 120, 200, 0.1)'
        }}
      />
      
      {/* Globe Dots */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
        {globeDots.map((dot, i) => {
          const pos = getPointPosition(dot.lat, dot.lng, rotation, 118);
          if (!pos.visible) return null;
          
          const opacity = Math.max(0.1, pos.z * 0.6);
          const size = 1 + pos.z * 0.8;
          
          return (
            <circle
              key={i}
              cx={pos.x}
              cy={pos.y}
              r={size}
              fill={`rgba(150, 170, 220, ${opacity})`}
            />
          );
        })}
      </svg>
      
      {/* Arc Lines - Latitude */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 300">
        {[-60, -30, 0, 30, 60].map((lat) => {
          const radius = Math.cos((lat * Math.PI) / 180) * 118;
          const y = -Math.sin((lat * Math.PI) / 180) * 118 + 150;
          const visible = radius > 30;
          
          if (!visible) return null;
          
          return (
            <ellipse
              key={`lat-${lat}`}
              cx="150"
              cy={y}
              rx={radius}
              ry={radius * 0.15}
              fill="none"
              stroke="rgba(100, 130, 200, 0.15)"
              strokeWidth="0.5"
              strokeDasharray="2 4"
            />
          );
        })}
      </svg>
      
      {/* Country Markers */}
      {countries.map((country) => {
        const pos = getPointPosition(country.lat, country.lng, rotation, 120);
        if (!pos.visible) return null;
        
        const scale = 0.6 + pos.z * 0.4;
        const opacity = 0.4 + pos.z * 0.6;
        const isSelected = selectedCountry?.name === country.name;
        
        return (
          <motion.button
            key={country.name}
            className="absolute flex items-center justify-center"
            style={{
              left: pos.x,
              top: pos.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              zIndex: Math.round(pos.z * 100) + (isSelected ? 200 : 0)
            }}
            whileHover={{ scale: scale * 1.5 }}
            whileTap={{ scale: scale * 0.9 }}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCountry(isSelected ? null : country);
            }}
          >
            <div className="relative">
              {/* Outer glow */}
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-300 ${
                  isSelected ? 'w-6 h-6 -m-1.5 bg-blue-400/30' : 'w-4 h-4 -m-0.5 bg-blue-400/0'
                }`}
                style={{
                  animation: isSelected ? 'pulse 2s infinite' : 'none'
                }}
              />
              {/* Main dot */}
              <div 
                className={`relative rounded-full transition-all duration-300 ${
                  isSelected 
                    ? 'w-3 h-3 bg-blue-400 shadow-lg shadow-blue-400/50' 
                    : 'w-2.5 h-2.5 bg-blue-500'
                }`}
              />
              {/* Ping animation */}
              <div 
                className="absolute inset-0 rounded-full bg-blue-400/40"
                style={{
                  animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            </div>
          </motion.button>
        );
      })}
      
      {/* Selected Country Tooltip */}
      {selectedCountry && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2 px-4 py-2 bg-card/95 backdrop-blur-sm rounded-full border border-white/20 shadow-xl"
        >
          <div className="flex items-center gap-2">
            <span className="text-xl">{selectedCountry.flag}</span>
            <span className="text-white text-sm font-medium">{selectedCountry.name}</span>
          </div>
        </motion.div>
      )}
      
      {/* Globe Shine/Highlight */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at 25% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 40%)`,
        }}
      />
    </div>
  );
};

export default Globe3D;
