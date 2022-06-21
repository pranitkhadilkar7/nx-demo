import { Col, Dropdown, Row } from "react-bootstrap"
import ReactFlow, { Background, Controls } from "react-flow-renderer"
import { useDispatch, useSelector } from "react-redux"
import { SelectInputNode } from "./custom-nodes/SelectInputNode"
import { StartNode } from "./custom-nodes/StartNode"
import {
  onConnect,
  onEdgesChange,
  onNodeAdd,
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
      <Row className="h-100 mt-2">
        <Col sm={2}>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="create-node" className="p-2">
              Create Node
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                href="/"
                onClick={(e) => {
                  e.preventDefault()
                  dispatch(onNodeAdd())
                }}
              >
                Start Node
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2">End Node</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Dropdown Node</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={(nodeChanges) =>
              dispatch(onNodeChanges(nodeChanges))
            }
            onEdgesChange={(edgeChanges) =>
              dispatch(onEdgesChange(edgeChanges))
            }
            onConnect={(connectChanges) => dispatch(onConnect(connectChanges))}
            nodeTypes={nodeTypes}
          >
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </Col>
      </Row>
    </>
  )
}
