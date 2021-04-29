import React, { useState } from 'react'
import './ComponentVariants.scss'

/* Generic component to show component variant options and rendered component along with generated code */
function ComponentVariants({
  renderComponent, // component render method
  renderCodeString, //method that takes all options and outputs code string
  singleChoiceOptions = {}, // example: {'size' : ['s','m','l'], 'theme': ['primary', 'secondary']}
  booleanOptions = {}, // example: {'outline' : true, 'some_option': false}
}) {
  const [singleChoices, setSingleChoices] = useState(() => {
    const state = {}
    for (let choiceName in singleChoiceOptions) {
      state[choiceName] = singleChoiceOptions[choiceName][0]
    }
    return state
  })

  const setSingleChoiceOption = (choiceName, choiceValue) => {
    setSingleChoices({
      ...singleChoices,
      [choiceName]: choiceValue,
    })
  }

  const [booleanChoices, setBooleanChoices] = useState(booleanOptions)

  const toggleBooleanChoiceOption = choiceName => {
    setBooleanChoices({
      ...booleanChoices,
      [choiceName]: !booleanChoices[choiceName],
    })
  }

  return (
    <div className='showcase-component-container vf-u-border-color--grey--lightest'>
      <div className='options'>
        {singleChoiceOptions &&
          Object.entries(singleChoiceOptions).map(([choiceName, options]) => {
            return (
              <div className='choice vf-form__item vf-stack'>
                <label
                  className='vf-form__label'
                  htmlFor={`vf-form__select-${choiceName}`}>
                  {choiceName}
                </label>

                <select
                  style={{ width: 140 }}
                  className='vf-form__select'
                  id={`vf-form__select-${choiceName}`}
                  onChange={event =>
                    setSingleChoiceOption(choiceName, event.target.value)
                  }>
                  {options.map(options => (
                    <option value={options}>{options}</option>
                  ))}
                </select>
              </div>
            )
          })}
        {booleanOptions && (
          <fieldset className='choice vf-form__fieldset | vf-stack vf-stack--400'>
            <legend className='vf-form__legend'>Boolean options</legend>
            <div className='vf-cluster vf-cluster--400'>
              <div className='vf-cluster__inner'>
                {Object.entries(booleanOptions).map(
                  ([choiceName, choiceValue]) => (
                    <div className='vf-form__item vf-form__item--checkbox'>
                      <input
                        type='checkbox'
                        checked={booleanChoices[choiceName]}
                        onChange={() => toggleBooleanChoiceOption(choiceName)}
                        id={`vf-form__checkbox-${choiceName}`}
                        className='vf-form__checkbox'
                      />
                      <label
                        htmlFor={`vf-form__checkbox-${choiceName}`}
                        className='vf-form__label'>
                        {choiceName}
                      </label>
                    </div>
                  )
                )}
              </div>
            </div>
          </fieldset>
        )}
      </div>
      <div className='vf-box renderer'>
        {renderComponent({
          ...singleChoices,
          ...booleanChoices,
        })}
      </div>
      <div className='code'>
        <pre className='vf-code-example__pre'>
          <code className='vf-code-example'>
            {renderCodeString({ ...singleChoices, ...booleanChoices })}
          </code>
        </pre>
      </div>
    </div>
  )
}

export default ComponentVariants
