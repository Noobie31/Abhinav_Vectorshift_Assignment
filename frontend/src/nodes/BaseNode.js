import { Handle, Position } from 'reactflow';

export const BaseNode = ({ 
  id, 
  title, 
  children, 
  handles = [],
  width = 240,
  height = 'auto',
  className = '',
  color = 'sage'
}) => {
  const colorClasses = {
    sage: 'bg-sage-50 border-sage-200 shadow-sage-100/50',
    cream: 'bg-cream-50 border-cream-200 shadow-cream-100/50',
    slate: 'bg-slate-50 border-slate-200 shadow-slate-100/50',
    terracotta: 'bg-terracotta-50 border-terracotta-200 shadow-terracotta-100/50',
  };

  const titleColors = {
    sage: 'text-sage-800',
    cream: 'text-cream-800',
    slate: 'text-slate-800',
    terracotta: 'text-terracotta-800',
  };

  return (
    <div 
      className={`${colorClasses[color]} rounded-lg shadow-lg border backdrop-blur-sm ${className}`}
      style={{ 
        width: width,
        minHeight: height === 'auto' ? 100 : height,
        padding: '14px',
      }}
    >
      {handles.map((handle, index) => (
        <Handle
          key={`${handle.type}-${handle.id || index}`}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={{
            ...handle.style,
            top: handle.position === Position.Left || handle.position === Position.Right 
              ? handle.top || `${((index + 1) * 100) / (handles.filter(h => h.position === handle.position).length + 1)}%`
              : 'auto',
          }}
        />
      ))}

      <div className={`${titleColors[color]} font-medium text-sm mb-3 tracking-tight`}>
        {title}
      </div>

      <div className="space-y-2.5">
        {children}
      </div>
    </div>
  );
}