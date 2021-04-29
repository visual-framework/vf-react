import { VfButton } from '@visual-framework/vf-button/vf-button.react';
import React from 'react';
import ComponentVariants from '../component-variants/ComponentVariants';
import './ComponentShowcase.scss';

/* React specific components showcase */
export default function ComponentShowcase() {
  return (
    <>
      <div>
        <section className='vf-intro | embl-grid embl-grid--has-centered-content'>
          <div>{/* empty */}</div>
          <div>
            <h1 className='vf-intro__heading vf-intro__heading--has-tag'>
              React Components Showcase
            </h1>
          </div>
        </section>
      </div>

      <section className='embl-grid embl-grid--has-centered-content'>
        <div>{/* empty */}</div>
        <div className='vf-content'>
          <h1>Button</h1>
          <ComponentVariants
            singleChoiceOptions={{
              theme: ['primary', 'secondary', 'tertiary'],
              size: ['sm', 'md', 'lg'],
            }}
            booleanOptions={{ outline: false }}
            renderComponent={selectedProps => (
              <VfButton text='Button' {...selectedProps} />
            )}
            renderCodeString={({ theme, outline, size }) =>
              `<VfButton theme='vf-button-${theme}' size='vf-button-${size}' ${outline ? 'outline={true}' : ''} text='Button' />`
            }
          />
        </div>
      </section>
    </>
  )
}
