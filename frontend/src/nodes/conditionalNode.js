import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useNodeConfig } from '../hooks/useNodeConfig';

export const ConditionalNode = ({ id, data }) => {
  const { fields, handleChange } = useNodeConfig(id, data, {
    condition: ''
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
      id: `${id}-true`,
      top: '33%'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-false`,
      top: '66%'
    }
  ];

  return (
    <BaseNode 
      id={id} 
      title="Conditional" 
      handles={handles}
      color="cream"
    >
      <div className="space-y-2.5">
        <label className="block">
          <span className="text-cream-700 text-xs font-medium mb-1.5 block">Condition</span>
          <input 
            type="text" 
            value={fields.condition}
            onChange={handleChange('condition')}
            className="w-full px-3 py-1.5 bg-white border border-cream-200 rounded text-cream-900 text-sm placeholder-cream-400 focus:border-cream-400"
            placeholder="value > 10"
          />
        </label>

        <div className="text-xs text-cream-600 leading-relaxed space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-sage-500 rounded-full"></div>
            <span>True branch</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-terracotta-500 rounded-full"></div>
            <span>False branch</span>
          </div>
        </div>
      </div>
    </BaseNode>
  );
}