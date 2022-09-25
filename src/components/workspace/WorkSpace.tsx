import React from 'react';
import Card from '../../components/cards/Card';
import CardSection from '../../components/cards/CardSection';

import Module from './modules/Module';
import Planner from '../planner/Planner';

export interface IWorkSpace {}

const WorkSpace: React.FC<IWorkSpace> = () => {
  return (
    <div className="block pt-0 pb-7 py-0">
      {/* App Container */}
      <div className={`block px-7`}>
        <Module>
          <CardSection className="grid grid-cols-2 gap-4">
            <Card title="One" className="w-[417px] h-[250px]" />
            <Card title="Two" className="w-[417px] h-[250px]" />
            <Card title="Three" className="w-[417px] h-[250px]" />
            <Card title="Four" className="w-[417px] h-[250px]" />
          </CardSection>
          <CardSection>
            <Card title="Calendar" className="w-[900px] h-[520px]">
              <Planner />
            </Card>
          </CardSection>
        </Module>
      </div>
    </div>
  );
};

export default WorkSpace;
