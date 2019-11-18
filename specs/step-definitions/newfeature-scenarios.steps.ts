/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable arrow-parens */
import { defineFeature, loadFeature } from 'jest-cucumber';
import { TeslaCar } from '../../src/autopilot';

const feature = loadFeature('./specs/features/newfeature.feature');

defineFeature(feature, (test) => {
  let autocar: TeslaCar;
    test('new feature to test', ({ given, when, then }) => {
      beforeEach(()=>{
        autocar=new TeslaCar();
      })
      given('the car is in auto-pilot mode', () => {
        autocar.setAutoPilotOn(true);
      });
   
      when('there is a stationary object ahead in the path of the car', () => {
        autocar.setObjectDistance(5);
        autocar.ScanAhead();
      });
   
      then('the self-driving car should beep', () => {
        expect(autocar.isInAutoPilotMode).toBe(true);
        expect(autocar.beep).toBe(true);
      });
    });
  });