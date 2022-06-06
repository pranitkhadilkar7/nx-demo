import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Connection,
  EdgeChange,
  MarkerType,
  NodeChange,
} from "react-flow-renderer"
import { RootState } from "../../store/store"
import { SelectInputNodeData, WorkflowData } from "./workflow-types"

const name = "node-store"

const initialState: WorkflowData = {
  nodes: [
    {
      id: "1",
      type: "startNode",
      data: { label: "Start" },
      position: { x: 5, y: 5 },
    },
    {
      id: "2",
      type: "selectInputNode",
      data: {
        department: { value: "chocolate", label: "Chocolate" },
        roles: [{ value: "chocolate", label: "Chocolate" }],
      },
      position: { x: 100, y: 5 },
    },
  ],
  edges: [],
}

export const slice = createSlice({
  name,
  initialState: initialState,
  reducers: {
    onNodeChanges: (state, action: PayloadAction<NodeChange[]>) => {
      state.nodes = applyNodeChanges(action.payload, state.nodes)
    },
    onEdgesChange: (state, action: PayloadAction<EdgeChange[]>) => {
      state.edges = applyEdgeChanges(action.payload, state.edges)
    },
    onConnect: (state, action: PayloadAction<Connection>) => {
      state.edges = addEdge(
        {
          ...action.payload,
          animated: true,
          markerEnd: { type: MarkerType.ArrowClosed },
        },
        state.edges
      )
    },
    onChangeSelectNodeData: (
      state,
      action: PayloadAction<Partial<SelectInputNodeData> & { id: string }>
    ) => {
      const updatedNodes = state.nodes.map((node) => {
        if (node.id === action.payload.id) {
          const data: Partial<SelectInputNodeData> = action.payload
          return {
            ...node,
            data: { ...node.data, ...data },
          }
        }
        return node
      })
      state.nodes = updatedNodes
    },
  },
})

export const {
  onNodeChanges,
  onEdgesChange,
  onConnect,
  onChangeSelectNodeData,
} = slice.actions
export const workflowData = (state: RootState) => state.workflowData
export default slice.reducer
