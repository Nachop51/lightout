import { methodsColors } from '../../constants'
import type { Method } from '../../types.d'

const MethodTag = ({ method }: {method: Method }) => {
  const conf = methodsColors[method]

  return (
    <span className={`p-1 text-xs text-center rounded uppercase ${conf.bgColor} ${conf.textColor}`}>
      {conf.short}
    </span>
  )
}

export default MethodTag
