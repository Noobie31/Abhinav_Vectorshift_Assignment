import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useNodeConfig } from '../hooks/useNodeConfig';

export const InputNode = ({ id, data }) => {
  const { fields, handleChange } = useNodeConfig(id, data, {
    inputName: id.replace('customInput-', 'input_'),
    inputType: 'Text'
  });

  const handles = [
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-value`
    }
  ];

  return (
    <BaseNode 
      id={id} 
      title="Input" 
      handles={handles}
      color="sage"
    >
      <div className="space-y-2.5">
        <label className="block">
          <span className="text-sage-700 text-xs font-medium mb-1.5 block">Name</span>
          <input 
            type="text" 
            value={fields.inputName}
            onChange={handleChange('inputName')}
            className="w-full px-3 py-1.5 bg-white border border-sage-200 rounded text-sage-900 text-sm placeholder-sage-400 focus:border-sage-400"
          />
        </label>

        <label className="block">
          <span className="text-sage-700 text-xs font-medium mb-1.5 block">Type</span>
          <select 
            value={fields.inputType} 
            onChange={handleChange('inputType')}
            className="w-full px-3 py-1.5 bg-white border border-sage-200 rounded text-sage-900 text-sm focus:border-sage-400"
          >
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}