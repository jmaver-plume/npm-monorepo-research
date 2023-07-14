import { Test, TestingModule } from '@nestjs/testing';
import { MainController } from './main.controller';

describe('MainController', () => {
  const mainController: MainController = new MainController();

  describe('get', () => {
    it('should return add one to number', () => {
      expect(mainController.get(1)).toBe(2);
    });
  });
});
