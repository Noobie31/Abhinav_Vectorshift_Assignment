import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-6 shadow-sm">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-slate-900 text-2xl font-semibold tracking-tight mb-6">Pipeline Builder</h1>
        
        <div className="space-y-5">
          <div>
            <h2 className="text-slate-600 text-xs font-semibold mb-3 uppercase tracking-wider">Core Nodes</h2>
            <div className="flex flex-wrap gap-2.5">
              <DraggableNode type='customInput' label='Input' color='sage' />
              <DraggableNode type='llm' label='LLM' color='slate' />
              <DraggableNode type='customOutput' label='Output' color='terracotta' />
              <DraggableNode type='text' label='Text' color='cream' />
            </div>
          </div>

          <div>
            <h2 className="text-slate-600 text-xs font-semibold mb-3 uppercase tracking-wider">Processing</h2>
            <div className="flex flex-wrap gap-2.5">
              <DraggableNode type='filter' label='Filter' color='slate' />
              <DraggableNode type='merge' label='Merge' color='sage' />
              <DraggableNode type='conditional' label='Conditional' color='cream' />
              <DraggableNode type='transform' label='Transform' color='terracotta' />
              <DraggableNode type='delay' label='Delay' color='slate' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}