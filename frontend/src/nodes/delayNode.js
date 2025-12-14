import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useNodeConfig } from '../hooks/useNodeConfig';

export const DelayNode = ({ id, data }) => {
  const { fields, handleChange } = useNodeConfig(id, data, {
    duration: '1000',
    unit: 'ms'
  });

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input`
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`
    }
  ];

  return (
    <BaseNode 
      id={id} 
      title="Delay" 
      handles={handles}
      color="slate"
    >
      <div className="space-y-2.5">
        <label className="block">
          <span className="text-slate-700 text-xs font-medium mb-1.5 block">Duration</span>
          <div className="flex gap-2">
            <input 
              type="number" 
              value={fields.duration}
              onChange={handleChange('duration')}
              className="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-900 text-sm placeholder-slate-400 focus:border-slate-400"
              placeholder="1000"
            />
            <select 
              value={fields.unit} 
              onChange={handleChange('unit')}
              className="px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-900 text-sm focus:border-slate-400"
            >
              <option value="ms">ms</option>
              <option value="s">s</option>
            </select>
          </div>
        </label>

        <div className="text-xs text-slate-500">
          Pause execution for specified duration
        </div>
      </div>
    </BaseNode>
  );
}