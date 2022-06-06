import ReactFlow, { Background, Controls } from "react-flow-renderer"
import { useDispatch, useSelector } from "react-redux"
import { SelectInputNode } from "./custom-nodes/SelectInputNode"
import { StartNode } from "./custom-nodes/StartNode"
import {
  onConnect,
  onEdgesChange,
  onNodeChanges,
  workflowData,
} from "./workflow-slice"

const nodeTypes = { startNode: StartNode, selectInputNode: SelectInputNode }

export function CreateWorkflow() {
  const { nodes, edges } = useSelector(workflowData)
  const dispatch = useDispatch()

  return (
    <>
      <h1>Workflow Creation</h1>
      <div className="h-100">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(nodeChanges) => dispatch(onNodeChanges(nodeChanges))}
          onEdgesChange={(edgeChanges) => dispatch(onEdgesChange(edgeChanges))}
          onConnect={(connectChanges) => dispatch(onConnect(connectChanges))}
          nodeTypes={nodeTypes}
        >
          <Controls />
          <Background color="#aaa" gap={16} />
        </ReactFlow>
      </div>
    </>
  )
}
