import { Button, Card, Steps } from 'antd';
import React, { useState } from 'react';
import s from '../styles/create.module.scss'
import Loader from './Loader';
const { Step } = Steps;

type Props = {
  firstContent: JSX.Element
  secondContent: JSX.Element
  thirdContent: JSX.Element
  onSubmit: () => void,
  isLoading?: boolean
}


const StepWrapper: React.FC<Props> = ({ firstContent, secondContent, thirdContent, onSubmit, isLoading }) => {
  const steps = [
    {
      title: 'Track info',
      content: firstContent,
    },
    {
      title: 'Upload image',
      content: secondContent,
    },
    {
      title: 'Upload track',
      content: thirdContent,
    },
  ];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current} className={s.label}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} className={s.label} />
        ))}
      </Steps>
      <div className="steps-content" style={{ margin: '24px 0' }}>
        <Card style={{ backgroundColor: '#fafafa', borderStyle: 'dashed' }}>
          {steps[current].content}
        </Card>
      </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button data-testid='nextBtn' type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => onSubmit()}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            Previous
          </Button>
        )}
        {isLoading &&
          <Loader />
        }
      </div>
    </>
  );
};

export default StepWrapper;