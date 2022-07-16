import Select from "react-select"

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
]

type Props = {
  formGroupClassName?: string
  label?: string
  labelClassName?: string
  getOptionLabel?: (option: any) => string
  getOptionValue?: (option: any) => string
  selectClassName?: string
  isClearable?: boolean
  isMulti?: boolean
  value?: any
  onChange?: (value: any) => void
}

export function SelectInput2({
  formGroupClassName,
  label,
  labelClassName,
  getOptionLabel,
  getOptionValue,
  isMulti,
  selectClassName,
  isClearable,
  value,
  onChange,
}: Props) {
  return (
    <div className={`form-group ${formGroupClassName}`}>
      {label && <label className={labelClassName}>{label}</label>}
      <Select
        getOptionLabel={getOptionLabel}
        getOptionValue={getOptionValue}
        options={options}
        styles={{
          control: (provided, state) => ({
            ...provided,
            borderColor: "transparent",
            boxShadow: "none",
            "&:hover": {
              border: "1px solid #4b49ac",
            },
          }),
          option: (provided, state) => {
            return Object.assign(
              { ...provided },
              state.isSelected && {
                backgroundColor: "#4b49ac",
              }
            )
          },
        }}
        className={selectClassName}
        isClearable={isClearable}
        isSearchable={true}
        isMulti={isMulti}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
