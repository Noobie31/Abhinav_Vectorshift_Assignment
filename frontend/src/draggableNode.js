export const DraggableNode = ({ type, label, color = 'slate' }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  const colorClasses = {
    sage: 'bg-sage-100 border-sage-300 text-sage-800 hover:bg-sage-200 hover:border-sage-400',
    cream: 'bg-cream-100 border-cream-300 text-cream-800 hover:bg-cream-200 hover:border-cream-400',
    slate: 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200 hover:border-slate-400',
    terracotta: 'bg-terracotta-100 border-terracotta-300 text-terracotta-800 hover:bg-terracotta-200 hover:border-terracotta-400',
  };

  return (
    <div
      className={`${colorClasses[color]} cursor-grab active:cursor-grabbing min-w-[90px] px-4 py-2.5 flex items-center justify-center rounded-lg border transition-all duration-200 hover:shadow-md`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      draggable
    >
      <span className="font-medium text-sm">{label}</span>
    </div>
  );
}