import { validateForms } from "./../functions/validate-forms.js";

const rules = [
  {
    ruleSelector: ".input-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните имя!",
      },
    ],
  },
  {
    ruleSelector: ".input-tel",
    tel: true,
    telError: "Введите корректный телефон",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Заполните телефон!",
      },
    ],
  },
  {
    ruleSelector: ".input-mail",

    mailError: "Введите корректно адресс почты",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "Напишите свою почту!",
      },
    ],
  },
  {
    ruleSelector: ".input-textarea",

    mailError: "Введите корректное сообщение",
    rules: [
      {
        rule: "required",

        errorMessage: "Напишите сообщение!",
      },
    ],
  },
  {
    ruleSelector: ".input-checkbox",
    checkboxError: "Нужно поставить галочку",
    rules: [
      {
        rule: "required",
        errorMessage: "Нужно согласиться с условиями",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
};

validateForms("#questions-form", rules, afterForm);

validateForms("#service-form", rules, afterForm);
