import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useNodeConfig } from '../hooks/useNodeConfig';

export const TransformNode = ({ id, data }) => {
  const { fields, handleChange } = useNodeConfig(id, data, {
    operation: 'uppercase'
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
      title="Transform" 
      handles={handles}
      color="terracotta"
    >
      <div className="space-y-2.5">
        <label className="block">
          <span className="text-terracotta-700 text-xs font-medium mb-1.5 block">Operation</span>
          <select 
            value={fields.operation} 
            onChange={handleChange('operation')}
            className="w-full px-3 py-1.5 bg-white border border-terracotta-200 rounded text-terracotta-900 text-sm focus:border-terracotta-400"
          >
            <option value="uppercase">To Uppercase</option>
            <option value="lowercase">To Lowercase</option>
            <option value="trim">Trim Whitespace</option>
            <option value="reverse">Reverse</option>
            <option value="length">Get Length</option>
          </select>
        </label>

        <div className="text-xs text-terracotta-500">
          Transform data using selected operation
        </div>
      </div>
    </BaseNode>
  );
}