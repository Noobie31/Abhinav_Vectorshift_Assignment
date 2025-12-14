import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useNodeConfig } from '../hooks/useNodeConfig';

export const OutputNode = ({ id, data }) => {
  const { fields, handleChange } = useNodeConfig(id, data, {
    outputName: id.replace('customOutput-', 'output_'),
    outputType: 'Text'
  });

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-value`
    }
  ];

  return (
    <BaseNode 
      id={id} 
      title="Output" 
      handles={handles}
      color="terracotta"
    >
      <div className="space-y-2.5">
        <label className="block">
          <span className="text-terracotta-700 text-xs font-medium mb-1.5 block">Name</span>
          <input 
            type="text" 
            value={fields.outputName}
            onChange={handleChange('outputName')}
            className="w-full px-3 py-1.5 bg-white border border-terracotta-200 rounded text-terracotta-900 text-sm placeholder-terracotta-400 focus:border-terracotta-400"
          />
        </label>

        <label className="block">
          <span className="text-terracotta-700 text-xs font-medium mb-1.5 block">Type</span>
          <select 
            value={fields.outputType} 
            onChange={handleChange('outputType')}
            className="w-full px-3 py-1.5 bg-white border border-terracotta-200 rounded text-terracotta-900 text-sm focus:border-terracotta-400"
          >
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}