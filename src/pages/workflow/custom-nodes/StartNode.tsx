import { Handle, NodeProps, Position } from "react-flow-renderer"

export function StartNode({ data, selected }: NodeProps<{ label: string }>) {
  return (
    <div className="star-node f-14">
      <div className="p-2">
        <p>{data.label}</p>
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}
