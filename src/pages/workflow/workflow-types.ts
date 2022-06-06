import { Edge, Node } from "react-flow-renderer"

export type WorkflowData = {
  nodes: Node[]
  edges: Edge[]
}

export type SelectInputNodeData = {
  department: { value: string; label: string }
  roles: { value: string; label: string }[]
}
