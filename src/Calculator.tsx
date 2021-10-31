import { FunctionComponent, useState } from 'react'
import Buttons from './components/generateButtons'
import NumberInputArea from './components/numberInputArea'
import WindowControls from './components/windowControls'

const Calculator: FunctionComponent = () => {
  const [totalValue, setTotalValue] = useState(0)
  const [currentOperator, setCurrentOperator] = useState('')
  const [newInputValue, setNewInputValue] = useState(0)

  const buttonProps = {
    totalValue,
    setTotalValue,
    currentOperator,
    setCurrentOperator,
    newInputValue,
    setNewInputValue,
  }

  return (
    <section className="calculator">
      <WindowControls />
      <NumberInputArea newInputValue={newInputValue} totalValue={totalValue} />
      <Buttons buttonProps={buttonProps} />
    </section>
  )
}

export default Calculator
