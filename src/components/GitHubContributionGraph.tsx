import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Generate mock contribution data for the year
const generateContributions = () => {
  const contributions: { date: string; count: number; level: number }[] = [];
  const today = new Date();
  const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
  
  for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
    // Random contribution count with some patterns
    const dayOfWeek = d.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const baseChance = isWeekend ? 0.3 : 0.7;
    
    let count = 0;
    if (Math.random() < baseChance) {
      count = Math.floor(Math.random() * 15);
    }
    
    // Determine level (0-4) based on count
    let level = 0;
    if (count > 0) level = 1;
    if (count > 3) level = 2;
    if (count > 6) level = 3;
    if (count > 10) level = 4;
    
    contributions.push({
      date: d.toISOString().split('T')[0],
      count,
      level
    });
  }
  
  return contributions;
};

// Group contributions by week
const groupByWeeks = (contributions: { date: string; count: number; level: number }[]) => {
  const weeks: { date: string; count: number; level: number }[][] = [];
  let currentWeek: { date: string; count: number; level: number }[] = [];
  
  contributions.forEach((contrib, i) => {
    const date = new Date(contrib.date);
    const dayOfWeek = date.getDay();
    
    if (dayOfWeek === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    
    currentWeek.push(contrib);
    
    if (i === contributions.length - 1) {
      weeks.push(currentWeek);
    }
  });
  
  return weeks;
};

const getLevelColor = (level: number) => {
  switch (level) {
    case 0: return 'bg-white/5';
    case 1: return 'bg-green-900/60';
    case 2: return 'bg-green-700/70';
    case 3: return 'bg-green-500/80';
    case 4: return 'bg-green-400';
    default: return 'bg-white/5';
  }
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const GitHubContributionGraph = () => {
  const [contributions, setContributions] = useState<{ date: string; count: number; level: number }[]>([]);
  const [hoveredCell, setHoveredCell] = useState<{ date: string; count: number } | null>(null);
  
  useEffect(() => {
    setContributions(generateContributions());
  }, []);
  
  const weeks = groupByWeeks(contributions);
  
  // Calculate total contributions
  const totalContributions = contributions.reduce((sum, c) => sum + c.count, 0);
  
  // Get month labels
  const getMonthLabels = () => {
    const labels: { month: string; week: number }[] = [];
    let lastMonth = -1;
    
    weeks.forEach((week, weekIndex) => {
      if (week.length > 0) {
        const date = new Date(week[0].date);
        const month = date.getMonth();
        
        if (month !== lastMonth) {
          labels.push({ month: months[month], week: weekIndex });
          lastMonth = month;
        }
      }
    });
    
    return labels;
  };
  
  const monthLabels = getMonthLabels();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl border border-white/10 p-6 overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <svg viewBox="0 0 16 16" className="w-5 h-5 text-white/70 fill-current">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span className="text-white/70 text-sm font-medium">GitHub Contributions</span>
        </div>
        <span className="text-white/50 text-sm">
          {totalContributions.toLocaleString()} contributions in the last year
        </span>
      </div>
      
      {/* Graph */}
      <div className="relative">
        {/* Month labels */}
        <div className="flex mb-2 pl-8">
          {monthLabels.map((label, i) => (
            <span 
              key={i}
              className="text-xs text-white/40"
              style={{ 
                marginLeft: i === 0 ? 0 : `${(label.week - monthLabels[i - 1].week) * 13 - 20}px`
              }}
            >
              {label.month}
            </span>
          ))}
        </div>
        
        {/* Day labels + Grid */}
        <div className="flex">
          {/* Day labels */}
          <div className="flex flex-col gap-[3px] mr-2 text-xs text-white/40">
            <span className="h-[11px]"></span>
            <span className="h-[11px] flex items-center">Mon</span>
            <span className="h-[11px]"></span>
            <span className="h-[11px] flex items-center">Wed</span>
            <span className="h-[11px]"></span>
            <span className="h-[11px] flex items-center">Fri</span>
            <span className="h-[11px]"></span>
          </div>
          
          {/* Contribution grid */}
          <div className="flex gap-[3px] overflow-x-auto pb-2">
            {weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {/* Fill empty days at start of first week */}
                {weekIndex === 0 && week.length < 7 && 
                  Array(7 - week.length).fill(null).map((_, i) => (
                    <div key={`empty-${i}`} className="w-[11px] h-[11px]" />
                  ))
                }
                
                {week.map((day, dayIndex) => (
                  <motion.div
                    key={day.date}
                    className={`w-[11px] h-[11px] rounded-sm ${getLevelColor(day.level)} cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (weekIndex * 7 + dayIndex) * 0.001 }}
                    whileHover={{ 
                      scale: 1.5, 
                      zIndex: 10,
                      boxShadow: day.level > 0 ? '0 0 8px rgba(74, 222, 128, 0.5)' : undefined
                    }}
                    onMouseEnter={() => setHoveredCell({ date: day.date, count: day.count })}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Tooltip */}
        {hoveredCell && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-white text-black text-xs rounded-lg shadow-lg whitespace-nowrap z-20"
          >
            <strong>{hoveredCell.count} contributions</strong> on {new Date(hoveredCell.date).toLocaleDateString('en-US', { 
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </motion.div>
        )}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-end gap-2 mt-4">
        <span className="text-xs text-white/40">Less</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <div 
            key={level}
            className={`w-[11px] h-[11px] rounded-sm ${getLevelColor(level)}`}
          />
        ))}
        <span className="text-xs text-white/40">More</span>
      </div>
    </motion.div>
  );
};

export default GitHubContributionGraph;