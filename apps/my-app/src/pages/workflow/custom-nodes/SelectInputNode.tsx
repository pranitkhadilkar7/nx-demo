import { Handle, NodeProps, Position } from "react-flow-renderer"
import { useDispatch } from "react-redux"
import { SelectInput2 } from "../../../common/input/SelectInput2"
import { onChangeSelectNodeData } from "../workflow-slice"
import { SelectInputNodeData } from "../workflow-types"

export function SelectInputNode({ id, data }: NodeProps<SelectInputNodeData>) {
  const dispatch = useDispatch()
  return (
    <div>
      <Handle type="target" position={Position.Left} />
      <div className="p-3">
        <SelectInput2
          formGroupClassName="mb-2 f-14"
          labelClassName="mb-1 f-12"
          label="Department"
          selectClassName="nodrag"
          value={data.department}
          onChange={(value) =>
            dispatch(onChangeSelectNodeData({ department: value, id }))
          }
        />
        <SelectInput2
          formGroupClassName="nodrag f-14"
          labelClassName="mb-1 f-12"
          label="Roles"
          selectClassName="nodrag"
          isMulti
          isClearable={false}
          value={data.roles}
          onChange={(value) =>
            dispatch(onChangeSelectNodeData({ roles: value, id }))
          }
        />
      </div>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}
