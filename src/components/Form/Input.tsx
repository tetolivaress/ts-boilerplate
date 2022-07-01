interface Props {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  name: string
  placeholder?: string
}

const Input = ({ value, onChange, label, name, placeholder }: Props) => {
  return (
    <>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <div>
        <input
          id={name}
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(e)}
          placeholder={placeholder || label}
        />
      </div>
    </>
  )
}

export default Input
