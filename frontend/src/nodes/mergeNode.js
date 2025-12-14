import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useNodeConfig } from '../hooks/useNodeConfig';

export const MergeNode = ({ id, data }) => {
  const { fields, handleChange } = useNodeConfig(id, data, {
    mergeType: 'concat'
  });

  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input1`,
      top: '33%'
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-input2`,
      top: '66%'
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
      title="Merge" 
      handles={handles}
      color="sage"
    >
      <div className="space-y-2.5">
        <label className="block">
          <span className="text-sage-700 text-xs font-medium mb-1.5 block">Type</span>
          <select 
            value={fields.mergeType} 
            onChange={handleChange('mergeType')}
            className="w-full px-3 py-1.5 bg-white border border-sage-200 rounded text-sage-900 text-sm focus:border-sage-400"
          >
            <option value="concat">Concatenate</option>
            <option value="merge">Merge Objects</option>
            <option value="join">Join Arrays</option>
          </select>
        </label>

        <div className="text-xs text-sage-500 leading-relaxed space-y-0.5">
          <div>Input 1: First source</div>
          <div>Input 2: Second source</div>
        </div>
      </div>
    </BaseNode>
  );
}