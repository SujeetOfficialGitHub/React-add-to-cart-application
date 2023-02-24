import React, {forwardRef} from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <div>
        <input ref={ref} {...props.input} />
    </div>
  )
})

export default Input