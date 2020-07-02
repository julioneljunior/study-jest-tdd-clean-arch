const EmailValidator = require('./email-validator');
const validator = require('validator');
const MissingParamError = require('../errors/missing-param-error');

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

  test('Should throw if no email is provided', async () => {
    const sut = makeSut();
    expect(() => { sut.isValid(); }).toThrow(new MissingParamError('email'));
  });
});
