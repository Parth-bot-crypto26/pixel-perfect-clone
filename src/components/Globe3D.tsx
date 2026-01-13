import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Country {
  name: string;
  lat: number;
  lng: number;
  flag: string;
}

const countries: Country[] = [
  { name: "UK", lat: 51.5074, lng: -0.1278, flag: "🇬🇧" },
  { name: "India", lat: 20.5937, lng: 78.9629, flag: "🇮🇳" },
  { name: "USA", lat: 37.0902, lng: -95.7129, flag: "🇺🇸" },
  { name: "Japan", lat: 36.2048, lng: 138.2529, flag: "🇯🇵" },
  { name: "Australia", lat: -25.2744, lng: 133.7751, flag: "🇦🇺" },
  { name: "Germany", lat: 51.1657, lng: 10.4515, flag: "🇩🇪" },
];

const Globe3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const getPointPosition = (lat: number, lng: number, rotation: number) => {
    const adjustedLng = lng + rotation;
    const radLat = (lat * Math.PI) / 180;
    const radLng = (adjustedLng * Math.PI) / 180;
    
    const x = Math.cos(radLat) * Math.sin(radLng);
    const y = Math.sin(radLat);
    const z = Math.cos(radLat) * Math.cos(radLng);
    
    // Only show points on front side of globe
    const visible = z > -0.1;
    
    return {
      x: x * 120 + 150,
      y: -y * 120 + 150,
      visible,
      z
    };
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-[300px] h-[300px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setSelectedCountry(null);
      }}
    >
      {/* Globe Circle with Gradient */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, rgba(30, 30, 60, 0.8) 0%, rgba(10, 10, 30, 0.9) 50%, rgba(5, 5, 15, 1) 100%)`,
          boxShadow: `
            inset 0 0 60px rgba(100, 100, 255, 0.1),
            0 0 40px rgba(100, 100, 255, 0.1)
          `
        }}
      />
      
      {/* Grid Lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
        {/* Latitude lines */}
        {[-60, -30, 0, 30, 60].map((lat) => {
          const radius = Math.cos((lat * Math.PI) / 180) * 120;
          const y = -Math.sin((lat * Math.PI) / 180) * 120 + 150;
          return (
            <ellipse
              key={`lat-${lat}`}
              cx="150"
              cy={y}
              rx={radius}
              ry={radius * 0.2}
              fill="none"
              stroke="rgba(100, 100, 255, 0.1)"
              strokeWidth="0.5"
            />
          );
        })}
        
        {/* Longitude lines */}
        {[0, 30, 60, 90, 120, 150].map((lng) => {
          const adjustedLng = lng + rotation;
          return (
            <ellipse
              key={`lng-${lng}`}
              cx="150"
              cy="150"
              rx={Math.abs(Math.cos((adjustedLng * Math.PI) / 180)) * 120}
              ry="120"
              fill="none"
              stroke="rgba(100, 100, 255, 0.1)"
              strokeWidth="0.5"
              style={{
                opacity: Math.cos((adjustedLng * Math.PI) / 180) > 0 ? 0.3 : 0.1
              }}
            />
          );
        })}
      </svg>
      
      {/* Country Points */}
      {countries.map((country) => {
        const pos = getPointPosition(country.lat, country.lng, rotation);
        if (!pos.visible) return null;
        
        const scale = 0.5 + (pos.z + 1) * 0.25;
        const opacity = 0.3 + (pos.z + 1) * 0.35;
        
        return (
          <motion.button
            key={country.name}
            className="absolute flex items-center justify-center cursor-pointer"
            style={{
              left: pos.x,
              top: pos.y,
              transform: `translate(-50%, -50%) scale(${scale})`,
              opacity,
              zIndex: Math.round(pos.z * 10) + 10
            }}
            whileHover={{ scale: scale * 1.3 }}
            onClick={() => setSelectedCountry(country)}
          >
            <div className="relative">
              <div className="w-3 h-3 bg-blue-accent rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-blue-accent/50 rounded-full animate-ping" />
            </div>
          </motion.button>
        );
      })}
      
      {/* Selected Country Info */}
      {selectedCountry && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-full border border-white/10"
        >
          <span className="text-lg mr-2">{selectedCountry.flag}</span>
          <span className="text-white text-sm">{selectedCountry.name}</span>
        </motion.div>
      )}
    </div>
  );
};

export default Globe3D;
