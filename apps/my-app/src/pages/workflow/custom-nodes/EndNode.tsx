import { Handle, NodeProps, Position } from "react-flow-renderer"

export function EndNode({ data }: NodeProps<{ label: string }>) {
  return (
    <div className="end-node f-14">
      <Handle type="target" position={Position.Left} />
      <div className="p-2">
        <p>{data.label}</p>
      </div>
    </div>
  )
}
