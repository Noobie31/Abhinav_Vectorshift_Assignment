import { useState, useMemo, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const [dimensions, setDimensions] = useState({ width: 240, height: 120 });
  const textareaRef = useRef(null);

  const variables = useMemo(() => {
    const regex = /\{\{\s*(\w+)\s*\}\}/g;
    const matches = [];
    let match;
    
    while ((match = regex.exec(currText)) !== null) {
      if (!matches.includes(match[1])) {
        matches.push(match[1]);
      }
    }
    
    return matches;
  }, [currText]);

  useEffect(() => {
    if (textareaRef.current) {
      const lineHeight = 20;
      const padding = 40;
      const lines = currText.split('\n').length;
      const scrollHeight = textareaRef.current.scrollHeight;
      
      const newWidth = Math.max(240, Math.min(400, currText.length * 8));
      const newHeight = Math.max(120, scrollHeight + padding, lines * lineHeight + padding);
      
      setDimensions({ width: newWidth, height: newHeight });
    }
  }, [currText]);

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  const handles = [
    ...variables.map((varName, index) => ({
      type: 'target',
      position: Position.Left,
      id: `${id}-${varName}`,
      top: `${((index + 1) * 100) / (variables.length + 1)}%`
    })),
    {
      type: 'source',
      position: Position.Right,
      id: `${id}-output`
    }
  ];

  return (
    <BaseNode 
      id={id} 
      title="Text" 
      handles={handles}
      color="cream"
      width={dimensions.width}
      height={dimensions.height}
    >
      <div className="space-y-2.5">
        <label className="block">
          <span className="text-cream-700 text-xs font-medium mb-1.5 block">Content</span>
          <textarea
            ref={textareaRef}
            value={currText}
            onChange={handleTextChange}
            className="w-full px-3 py-2 bg-white border border-cream-200 rounded text-cream-900 text-sm placeholder-cream-400 focus:border-cream-400 resize-none"
            rows={3}
            placeholder="Enter text with {{variables}}"
          />
        </label>
        
        {variables.length > 0 && (
          <div className="pt-1 text-xs text-cream-600">
            <div className="font-medium mb-1.5">Variables:</div>
            <div className="flex flex-wrap gap-1.5">
              {variables.map(varName => (
                <span 
                  key={varName}
                  className="px-2 py-0.5 bg-cream-100 border border-cream-300 rounded text-cream-800 font-mono"
                >
                  {varName}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </BaseNode>
  );
}