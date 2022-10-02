export default class Validator {
  constructor(nickname) {
    this.name = nickname;
  }

  validateUserName() {
    const characterRule1 = /[^\w-]/.test(this.name);
    const characterRule2 = /^[^\d_-][\w-]+[^\d_-]$/.test(this.name);
    const characterRule3 = /\d{4,}/.test(this.name);

    if (characterRule1) {
      throw new Error(
        'Разрешены: только латинские буквы, символы тире -, подчёркивания _ и цифры (0-9)',
      );
    }
    if (!characterRule2) {
      throw new Error(
        'Имя пользоватебя не должно начинаться и заканчиваться цифрами, символами подчёркивания или тире.',
      );
    }
    if (characterRule3) {
      throw new Error('Имя не должно содержать подряд более трёх цифр.');
    }
    return this.name;
  }
}

// const nickName = 'Alex@-12_DM';
// const validateNickName = new Validator(nickName);
// const received = validateNickName.validateUserName();

// console.log(received);
