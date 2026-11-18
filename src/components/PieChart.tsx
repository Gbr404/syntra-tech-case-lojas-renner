import React from 'react';
import { SegmentData } from '../types';

interface PieChartProps {
  segments: SegmentData[];
  selectedSegmentId: string | null;
  onSelectSegment: (segmentId: string) => void;
}

export const PieChart: React.FC<PieChartProps> = ({
  segments,
  selectedSegmentId,
  onSelectSegment,
}) => {
  const total = segments.reduce((acc, curr) => acc + curr.percentage, 0);

  // Calculate SVG arc paths for donut chart
  let cumulativeAngle = 0;
  const radius = 70;
  const strokeWidth = 28;
  const center = 100;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
      {/* SVG Donut */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex-shrink-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90 transform">
          {segments.map((segment) => {
            const fraction = segment.percentage / total;
            const strokeDasharray = `${fraction * circumference} ${circumference}`;
            const strokeDashoffset = -cumulativeAngle * circumference;
            cumulativeAngle += fraction;

            const isSelected = selectedSegmentId === segment.id;

            return (
              <circle
                key={segment.id}
                cx={center}
                cy={center}
                r={radius}
                fill="none"
                stroke={segment.color}
                strokeWidth={isSelected ? strokeWidth + 6 : strokeWidth}
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-300 cursor-pointer hover:opacity-90"
                onClick={() => onSelectSegment(segment.id)}
                style={{
                  filter: isSelected ? 'drop-shadow(0px 0px 8px rgba(0,0,0,0.3))' : 'none',
                }}
              />
            );
          })}
        </svg>

        {/* Center label inside donut hole */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
            Base Renner
          </span>
          <span className="text-2xl font-extrabold text-[#0A1C36] font-['IBM_Plex_Mono',monospace] tabular-nums tracking-tight">
            3.2M
          </span>
          <span className="text-[9px] text-[#E78224] font-bold uppercase">
            Clusterizados
          </span>
        </div>
      </div>

      {/* Legenda: só nome + %, detalhes apenas no selecionado */}
      <div className="flex flex-col gap-2 w-full max-w-sm">
        {segments.map((seg) => {
          const isSelected = selectedSegmentId === seg.id;
          return (
            <button
              key={seg.id}
              onClick={() => onSelectSegment(seg.id)}
              className={`p-3 rounded-xl text-left transition-all border cursor-pointer ${
                isSelected
                  ? 'bg-purple-900/10 border-purple-500 shadow-xs'
                  : 'bg-white hover:bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center space-x-2.5">
                  <span
                    className="w-3.5 h-3.5 rounded-md flex-shrink-0"
                    style={{ backgroundColor: seg.color }}
                  />
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">
                    {seg.name}
                  </h4>
                </div>
                <span className="font-extrabold text-sm text-[#0A1C36]">
                  {seg.percentage}%
                </span>
              </div>

              {isSelected && (
                <div className="mt-1.5 pl-6 flex items-center justify-between text-[10px] font-medium">
                  <span className="text-slate-500">{seg.audienceShare}</span>
                  <span className="text-emerald-600 font-bold">{seg.estimatedGrowth}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};