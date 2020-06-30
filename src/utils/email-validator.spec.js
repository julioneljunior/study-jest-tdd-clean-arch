const EmailValidator = require('./email-validator');
const validator = require('validator');

const makeSut = () => {
  return new EmailValidator();
};

describe('Email validator', () => {
  test('Should return true if validators returns true ', () => {
    const sut = makeSut();
    const isEmailValid = sut.isValid('valid_email@mail.com');
    expect(isEmailValid).toBe(true);
  });

  test('Should return false if validators returns false ', () => {
    validator.isEmailValid = false;
    const sut = makeSut();
    const isEmailValid = sut.isValid('invalid_email@mail.com');
    expect(isEmailValid).toBe(false);
  });

  test('Should call validator with correct email', () => {
    const sut = makeSut();
    sut.isValid('any_email@mail.com');
    expect(validator.email).toBe('any_email@mail.com');
  });
});
