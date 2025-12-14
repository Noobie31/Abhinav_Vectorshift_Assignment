import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useNodeConfig } from '../hooks/useNodeConfig';

export const FilterNode = ({ id, data }) => {
  const { fields, handleChange } = useNodeConfig(id, data, {
    condition: 'equals',
    value: ''
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
      title="Filter" 
      handles={handles}
      color="slate"
    >
      <div className="space-y-2.5">
        <label className="block">
          <span className="text-slate-700 text-xs font-medium mb-1.5 block">Condition</span>
          <select 
            value={fields.condition} 
            onChange={handleChange('condition')}
            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-900 text-sm focus:border-slate-400"
          >
            <option value="equals">Equals</option>
            <option value="contains">Contains</option>
            <option value="greater">Greater Than</option>
            <option value="less">Less Than</option>
          </select>
        </label>

        <label className="block">
          <span className="text-slate-700 text-xs font-medium mb-1.5 block">Value</span>
          <input 
            type="text" 
            value={fields.value}
            onChange={handleChange('value')}
            className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded text-slate-900 text-sm placeholder-slate-400 focus:border-slate-400"
            placeholder="Filter value"
          />
        </label>
      </div>
    </BaseNode>
  );
}