import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-system`,
      top: '33%'
    },
    {
      type: 'target',
      position: Position.Left,
      id: `${id}-prompt`,
      top: '66%'
    },
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-response`
    }
  ];

  return (
    <BaseNode 
      id={id} 
      title="LLM" 
      handles={handles}
      color="slate"
    >
      <div className="text-slate-600 text-xs leading-relaxed">
        <p className="mb-2 font-medium text-slate-700">Language Model</p>
        <div className="space-y-1 text-slate-500">
          <div>System configuration</div>
          <div>Prompt input</div>
          <div>Generated response</div>
        </div>
      </div>
    </BaseNode>
  );
}